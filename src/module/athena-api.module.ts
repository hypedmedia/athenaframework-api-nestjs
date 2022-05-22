import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from 'src/controller/api-accounts.controller';
import { CharacterController } from 'src/controller/api-character.controller';
import { FactionController } from 'src/controller/api-faction.controller';
import { StorageController } from 'src/controller/api-storage.controller';
import { VehicleController } from 'src/controller/api-vehicle.controller';
import { AccountService } from 'src/service/api-account.service';
import { CharacterService } from 'src/service/api-character.service';
import { FactionService } from 'src/service/api-faction.service';
import { StorageService } from 'src/service/api-storage.service';
import { VehicleService } from 'src/service/api-vehicle.service';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://0.0.0.0:27017', {
            dbName: 'athena',
        }),
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
