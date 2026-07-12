import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiKey } from './api-key.entity';

@Injectable()
export class ApiKeysService implements OnModuleInit {
  private readonly logger = new Logger(ApiKeysService.name);

  constructor(
    @InjectRepository(ApiKey)
    private readonly apiKeysRepository: Repository<ApiKey>,
  ) {}

  async onModuleInit() {
    const count = await this.apiKeysRepository.count();

    if (count > 0) {
      return;
    }

    const initialApiKey = randomBytes(32).toString('hex');

    await this.createApiKey('Initial API key', initialApiKey);
    this.logger.warn(`Generated initial API key: ${initialApiKey}`);
  }

  async createApiKey(name: string, plainTextKey: string) {
    return this.apiKeysRepository.save({
      name,
      keyHash: this.hashKey(plainTextKey),
      keyPreview: this.previewKey(plainTextKey),
      isActive: true,
    });
  }

  async isValidApiKey(plainTextKey: string | undefined) {
    if (!plainTextKey) {
      return false;
    }

    const keyHash = this.hashKey(plainTextKey);
    const apiKey = await this.apiKeysRepository.findOneBy({
      keyHash,
      isActive: true,
    });

    if (!apiKey) {
      return false;
    }

    return timingSafeEqual(Buffer.from(apiKey.keyHash), Buffer.from(keyHash));
  }

  private hashKey(plainTextKey: string) {
    return createHash('sha256').update(plainTextKey).digest('hex');
  }

  private previewKey(plainTextKey: string) {
    return plainTextKey.length <= 8
      ? plainTextKey
      : `${plainTextKey.slice(0, 4)}...${plainTextKey.slice(-4)}`;
  }
}
