import Database from '@stuyk/ezmongodb';
import { Controller, Get, Query } from '@nestjs/common';
import { Account } from '../../../../../../server/interface/iAccount';
import { Collections } from '../../../../../../server/interface/iDatabaseCollections';

@Controller('/accounts')
export class AthenaAPIAccounts {
    /* A function that is called when the user goes to the url /accounts/discord?id=id */
    @Get('/discord')
    async discord(@Query() query: { id: string }) {
        const account = await Database.fetchData<Account>('discord', query.id, Collections.Accounts);

        if (!account || !query.id) {
            return {
                status: 'error',
                message: 'Account not found',
            };
        }

        // Remove some stuff from the returned object
        delete account.quickToken;
        delete account.quickTokenExpiration;
        delete account.email;
        delete account.ips;
        delete account.hardware;

        return {
            status: 'success',
            account,
        };
    }
}
