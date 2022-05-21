import { Module } from '@nestjs/common';
import { AthenaAPIAccounts } from './controller/athenaAPIAccounts';
import { AthenaAPIPlayer } from './controller/athenaAPIPlayer';
import { AthenaAPIVehicle } from './controller/athenaAPIVehicle';

@Module({
    controllers: [AthenaAPIAccounts, AthenaAPIPlayer, AthenaAPIVehicle],
    providers: [],
})
export class AthenaAPIModule {}
