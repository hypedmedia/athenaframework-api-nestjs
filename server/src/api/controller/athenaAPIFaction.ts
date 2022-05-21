import { Controller, Get, Query } from '@nestjs/common';
import Database from '@stuyk/ezmongodb';
import { Collections } from '../../../../../../server/interface/iDatabaseCollections';
import { Faction } from '../../../../../core-factions/shared/interfaces';

@Controller('/factions')
export class AthenaAPIFaction {
    /* A function that is called when the user goes to the url /factions?name=name */
    @Get('/')
    async getFactionByName(@Query() query: { name: string }) {
        const faction = await Database.fetchData<Faction>('name', query.name, Collections.Factions);
        if (!faction) return { error: 'No faction found' };
        return {
            status: 'success',
            data: faction,
        };
    }

    /* A function that is called when the user goes to the url /factions/all */
    @Get('/all')
    async getFaction() {
        const factions = await Database.fetchAllData<Faction>(Collections.Factions);
        if (!factions) return { error: 'No factions found' };
        return {
            status: 'success',
            data: factions,
        };
    }

    /* A function that is called when the user goes to the url /factions/members?id=id */
    @Get('/members')
    async getFactionMembers(@Query() query: { id: string }) {
        const faction = await Database.fetchData<Faction>('_id', query.id, Collections.Factions);
        if (!faction) return { error: 'No faction found' };
        return {
            status: 'success',
            data: faction.members,
        };
    }

    /* A function that is called when the user goes to the url /factions/vehicles?id=id */
    @Get('/vehicles')
    async getFactionVehicles(@Query() query: { id: string }) {
        const faction = await Database.fetchData<Faction>('_id', query.id, Collections.Factions);
        if (!faction) return { error: 'Faction not found' };
        return {
            status: 'success',
            data: faction.vehicles,
        };
    }

    /* A function that is called when the user goes to the url /factions/storage?id=id */
    @Get('/storage')
    async getFactionStorage(@Query() query: { id: string }) {
        const faction = await Database.fetchData<Faction>('_id', query.id, Collections.Factions);
        if (!faction) return { error: 'Faction not found' };
        return {
            status: 'success',
            data: faction.storages,
        };
    }
}
