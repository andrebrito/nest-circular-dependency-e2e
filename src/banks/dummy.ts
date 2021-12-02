import { registerAs } from '@nestjs/config';

export const dummyConfig = registerAs('other', () => ({
  token: 'my token',
}));

export type DummyConfig = typeof dummyConfig;
