import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import Database from '@stuyk/ezmongodb';
import IAthenaAPI from '../../../interfaces/iAthenaApi';
import { configAPI } from '../../../config';
import { testPassword } from '../../../../../../../server/utility/encryption';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService: ConfigService) {
        super({
            passReqToCallback: true,
        });
    }

    public validate = async (_req: any, username: string, password: string): Promise<boolean> => {
        const authUser = await Database.fetchData<IAthenaAPI>('name', username, configAPI.dbCollection);

        if (!authUser) {
            throw new UnauthorizedException();
        }

        if (
            authUser.name == username &&
            testPassword(password, authUser.password)
        ) {
            return true;
        }

        throw new UnauthorizedException();
    };
}
