import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from 'src/schemas/api-account.schema';

@Injectable()
export class AccountService {
    constructor(
        @InjectModel(Account.name)
        private readonly account: Model<AccountDocument>,
    ) {}

    async getAllAccounts(): Promise<Account[]> {
        return this.account
            .find<AccountDocument>({})
            .select('_id discord lastLogin permissionLevel id');
    }

    async getAccountByDiscordId(discordId: string): Promise<AccountDocument> {
        return this.account.findOne({ discord: discordId }).select('_id discord lastLogin permissionLevel id');
    }
}
