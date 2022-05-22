import { Injectable } from '@nestjs/common';
import Database from '@stuyk/ezmongodb';
import { Collections } from '../../../../../../server/interface/iDatabaseCollections';
import { Faction } from '../../../../../core-factions/shared/interfaces';

@Injectable()
export class AthenaAPIFactionService {
    async getFactionByName(name: string) {
        const faction = await Database.fetchData<Faction>('name', name, Collections.Factions);
        if (!faction || !name) return { error: 'No faction found' };

        return {
            status: 'success',
            data: faction,
        };
    }

    async getAllFactions() {
        const factions = await Database.fetchAllData<Faction>(Collections.Factions);
        if (!factions) return { error: 'No factions found' };

        return {
            status: 'success',
            data: factions,
        };
    }

    async getFactionMembers(id: string) {
        const faction = await Database.fetchData<Faction>('_id', id, Collections.Factions);

        if (!faction || !id) return { error: 'No faction found' };

        return {
            status: 'success',
            data: faction.members,
        };
    }

    async getFactionVehicles(id: string) {
        const faction = await Database.fetchData<Faction>('_id', id, Collections.Factions);
        if (!faction || !id) return { error: 'Faction not found' };

        return {
            status: 'success',
            data: faction.vehicles,
        };
    }

    async getFactionStorage(id: string) {
        const faction = await Database.fetchData<Faction>('_id', id, Collections.Factions);
        if (!faction || !id) return { error: 'Faction not found' };

        return {
            status: 'success',
            data: faction.storages,
        };
    }
}
