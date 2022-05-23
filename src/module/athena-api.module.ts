import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { configAPI } from 'src/config';
import { AccountController } from 'src/controller/api-accounts.controller';
import { CharacterController } from 'src/controller/api-character.controller';
import { FactionController } from 'src/controller/api-faction.controller';
import { StorageController } from 'src/controller/api-storage.controller';
import { VehicleController } from 'src/controller/api-vehicle.controller';
import { Account, AccountSchema } from 'src/schemas/api-account.schema';
import { Faction, FactionSchema } from 'src/schemas/api-faction.schema';
import { Storage, StorageSchema } from 'src/schemas/api-storage.schema';
import { AccountService } from 'src/service/api-account.service';
import { CharacterService } from 'src/service/api-character.service';
import { FactionService } from 'src/service/api-faction.service';
import { StorageService } from 'src/service/api-storage.service';
import { VehicleService } from 'src/service/api-vehicle.service';

@Module({
    imports: [
        MongooseModule.forRoot(configAPI.dbHost, {
            dbName: configAPI.dbName,
        }),
        MongooseModule.forFeature([
            {
                name: Account.name,
                schema: AccountSchema,
            },
            {
                name: Storage.name,
                schema: StorageSchema,
            },
            {
                name: Faction.name,
                schema: FactionSchema,
            },
        ]),
    ],
    controllers: [
        AccountController,
        CharacterController,
        FactionController,
        StorageController,
        VehicleController,
    ],
    providers: [
        AccountService,
        CharacterService,
        FactionService,
        StorageService,
        VehicleService,
    ],
})
export class AppModule {}
