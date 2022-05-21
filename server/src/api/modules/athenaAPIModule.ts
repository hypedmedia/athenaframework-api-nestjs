import { Module } from '@nestjs/common';

import { AthenaAPIAccounts } from '../controller/athenaAPIAccounts';
import { AthenaAPIFaction } from '../controller/athenaAPIFaction';
import { AthenaAPIPlayer } from '../controller/athenaAPIPlayer';
import { AthenaAPIVehicle } from '../controller/athenaAPIVehicle';
import { AthenaAPIAccountService } from '../service/athenaAPIAccountService';
import { AthenaAPIFactionService } from '../service/athenaAPIFactionService';
import { AthenaAPIPlayerService } from '../service/athenaAPIPlayerService';
import { AthenaAPIVehicleService } from '../service/athenaAPIVehicleService';

@Module({
    controllers: [AthenaAPIPlayer, AthenaAPIFaction, AthenaAPIAccounts, AthenaAPIVehicle],
    providers: [AthenaAPIPlayerService, AthenaAPIFactionService, AthenaAPIAccountService, AthenaAPIVehicleService],
})

export class AthenaAPIModule {}
