import { Module } from '@nestjs/common';
import { AthenaAPIAccounts } from './controller/athenaAPIAccounts';
import { AthenaAPIFaction } from './controller/athenaAPIFaction';
import { AthenaAPIPlayer } from './controller/athenaAPIPlayer';
import { AthenaAPIVehicle } from './controller/athenaAPIVehicle';

@Module({
    controllers: [AthenaAPIAccounts, AthenaAPIPlayer, AthenaAPIVehicle, AthenaAPIFaction],
    providers: [],
})
export class AthenaAPIModule {}
