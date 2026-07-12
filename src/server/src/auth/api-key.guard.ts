import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { ApiKeysService } from '../api-keys/api-keys.service';
import { IS_PUBLIC_ROUTE } from './public.decorator';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    private readonly apiKeysService: ApiKeysService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const isPublicRoute = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_ROUTE, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (request.method === 'OPTIONS' || isPublicRoute) {
      return true;
    }

    const apiKey = this.getApiKey(request);
    const isValid = await this.apiKeysService.isValidApiKey(apiKey);

    if (!isValid) {
      throw new UnauthorizedException('A valid API key is required');
    }

    return true;
  }

  private getApiKey(request: Request) {
    const headerApiKey = request.header('x-api-key');

    if (headerApiKey) {
      return headerApiKey;
    }

    const authorization = request.header('authorization');

    if (authorization?.toLowerCase().startsWith('bearer ')) {
      return authorization.slice(7);
    }

    return undefined;
  }
}
