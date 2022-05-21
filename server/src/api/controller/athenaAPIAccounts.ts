import { Controller, Get, Query } from '@nestjs/common';
import { AthenaAPIAccountService } from '../service/athenaAPIAccountService';

@Controller('/accounts')
export class AthenaAPIAccounts {
    constructor(private readonly accountService: AthenaAPIAccountService) {}

    @Get('/discord')
    async getAccountByDiscordId(@Query() query: { id: string }) {
        return this.accountService.getAccountByDiscordId(query.id);
    }
}
