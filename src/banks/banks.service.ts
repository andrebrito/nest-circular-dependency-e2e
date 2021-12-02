import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { DummyConfig } from './dummy';

@Injectable()
export class BanksService implements OnModuleInit {
  constructor(
    @Inject('other') private readonly config: ConfigType<DummyConfig>,
  ) {}

  onModuleInit() {
    throw new Error('Method not implemented.');
  }
}
