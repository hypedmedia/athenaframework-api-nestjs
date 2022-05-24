import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { configAPI } from 'src/config';
import { AccountsModule } from './accounts.module';
import { CharactersModule } from './characters.module';
import { FactionsModule } from './factions.module';
import { StoragesModule } from './storages.module';
import { VehiclesModule } from './vehicles.module';

@Module({
    imports: [
        MongooseModule.forRoot(configAPI.dbHost, {
            dbName: configAPI.dbName,
        }),
        AccountsModule,
        CharactersModule,
        FactionsModule,
        StoragesModule,
        VehiclesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
