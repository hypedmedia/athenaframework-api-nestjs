import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AccountService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getAllAccounts() {
        return this.connection.db
            .collection('accounts')
            .find()
            .toArray()
            .then((accounts) => {
                accounts.forEach((account) => {
                    delete account.email;
                    delete account.ips;
                    delete account.hardware;
                    delete account.lastLogin;
                    delete account.quickToken;
                    delete account.quickTokenExpiration;
                });
                return accounts;
            });
    }

    async getAccountByDiscordId(discordId: string) {
        return this.connection.db
            .collection('accounts')
            .findOne({ discordId })
            .then((account) => {
                if (account) {
                    delete account.email;
                    delete account.ips;
                    delete account.hardware;
                    delete account.lastLogin;

                    return account;
                } else {
                    return null;
                }
            });
    }
}
