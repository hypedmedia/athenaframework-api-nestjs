import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AthenaAPIAccountService } from '../service/api-account.service';

@Controller('/accounts')
export class AthenaAPIAccounts {
    constructor(private readonly accountService: AthenaAPIAccountService) {}

    @Get('/discord')
    @UseGuards(AuthGuard('basic'))
    async getAccountByDiscordId(@Query() query: { id: string }) {
        return this.accountService.getAccountByDiscordId(query.id);
    }
}
