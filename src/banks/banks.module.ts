import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import config from './config';
import { dummyConfig } from './dummy';

const ConfigModuleExports = NestConfigModule.forRoot({
  isGlobal: true,
  load: [config, dummyConfig],
});

@Global()
@Module({
  imports: [ConfigModuleExports],
  exports: [ConfigModuleExports],
})
export class ConfigModule {}
