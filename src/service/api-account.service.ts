import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { COLLECTIONS } from 'src/config';

@Injectable()
export class AccountService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getAllAccounts() {
        const results = await this.connection.db
            .collection(COLLECTIONS.accounts)
            .find()
            .toArray();

        if (results.length > 0) {
            for (const entry of results) {
                delete entry.ips;
                delete entry.hardware;
                delete entry.email;
                delete entry.quickToken;
                delete entry.quickTokenExpiration;
            }
            return results;
        } else {
            return [];
        }
    }
}
