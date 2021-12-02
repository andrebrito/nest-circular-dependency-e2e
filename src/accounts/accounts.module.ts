import { forwardRef, Module } from '@nestjs/common';
import { BanksService } from '../banks/banks.service';
import { UsersModule } from '../users/users.module';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [forwardRef(() => UsersModule)],
  controllers: [AccountsController],
  providers: [AccountsService, BanksService],
  exports: [AccountsService],
})
export class AccountsModule {}
