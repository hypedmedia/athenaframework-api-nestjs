import * as alt from 'alt-server';
import Database from '@stuyk/ezmongodb';
import { hashPassword } from '../../../../../server/utility/encryption';
import { configAPI } from '../config';
import IAthenaAPI from '../interfaces/iAthenaApi';

export async function generateApiUser(name: string, password: string) {
    const apiUser: IAthenaAPI = {
        name: name,
        password: hashPassword(password),
    };

    await Database.insertData(apiUser, configAPI.dbCollection);

    alt.log(`~lg~\n[Athena-API] Generated a new user for usage in .env file!\nName: ${name}\nPassword: ${password}\nThis will only be displayed for once.`);
}
