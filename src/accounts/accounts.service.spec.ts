import { Test, TestingModule } from '@nestjs/testing';
import { BanksService } from '../banks/banks.service';
import { UsersService } from '../users/users.service';
import { AccountsService } from './accounts.service';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsService, BanksService, UsersService],
    })
      .overrideProvider(BanksService)
      .useValue({})
      .overrideProvider(UsersService)
      .useValue({})
      .compile();

    service = module.get<AccountsService>(AccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
