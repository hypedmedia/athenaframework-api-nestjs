import { Injectable } from '@nestjs/common';
import Database from '@stuyk/ezmongodb';
import { Account } from '../../../../../../server/interface/iAccount';
import { Collections } from '../../../../../../server/interface/iDatabaseCollections';

@Injectable()
export class AthenaAPIAccountService {
    async getAccountByDiscordId(id: string) {
        const account = await Database.fetchData<Account>('discord', id, Collections.Accounts);

        if (!account || !id) {
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
