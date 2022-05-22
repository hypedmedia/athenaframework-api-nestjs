import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/modules/api-auth.module';

import { AthenaAPIAccounts } from '../controller/api-accounts.controller';
import { AthenaAPIFaction } from '../controller/api-faction.controller';
import { AthenaAPIPlayer } from '../controller/api-player.controller';
import { AthenaAPIVehicle } from '../controller/api-vehicle.controller';
import { AthenaAPIAccountService } from '../service/api-account.service';
import { AthenaAPIFactionService } from '../service/api-faction.service';
import { AthenaAPIPlayerService } from '../service/api-player.service';
import { AthenaAPIVehicleService } from '../service/api-vehicle.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        AuthModule
    ],
    controllers: [AthenaAPIPlayer, AthenaAPIFaction, AthenaAPIAccounts, AthenaAPIVehicle],
    providers: [AthenaAPIPlayerService, AthenaAPIFactionService, AthenaAPIAccountService, AthenaAPIVehicleService],
})
export class AthenaAPIModule {}

