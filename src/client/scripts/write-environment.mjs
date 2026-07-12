import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const clientDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const rootDir = resolve(clientDir, '../..');
const envFile = resolve(rootDir, '.env');
const environmentFile = resolve(clientDir, 'src/environments/environment.ts');

function parseEnv(contents) {
  return contents
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))
    .reduce((env, line) => {
      const separatorIndex = line.indexOf('=');

      if (separatorIndex === -1) {
        return env;
      }

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');

      return {
        ...env,
        [key]: value,
      };
    }, {});
}

let env = {};

try {
  env = parseEnv(readFileSync(envFile, 'utf8'));
} catch {
  env = {};
}

mkdirSync(dirname(environmentFile), { recursive: true });
writeFileSync(
  environmentFile,
  `export const environment = {
    apiBaseUrl: ${JSON.stringify(env.NG_APP_API_BASE_URL ?? '')}
};
`,
);
