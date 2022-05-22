import { Controller, Get } from '@nestjs/common';
import { AccountService } from 'src/service/api-account.service';

@Controller('accounts')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get('all')
    getAllAccounts() {
        return this.accountService.getAllAccounts();
    }
}
