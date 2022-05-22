import { Injectable } from '@nestjs/common';
import Database from '@stuyk/ezmongodb';
import { Collections } from '../../../../../../server/interface/iDatabaseCollections';
import { Character } from '../../../../../../shared/interfaces/character';

@Injectable()
export class AthenaAPIPlayerService {
    async getAllPlayers() {
        const characters = await Database.fetchAllData<Character>(Collections.Characters);
        if (!characters) {
            return {
                status: 'error',
                error: 'No characters found',
            };
        }

        return {
            status: 'success',
            data: characters,
        };
    }

    async getInventory(id: string) {
        const character = await Database.fetchData<Character>('_id', id, Collections.Characters);
        if (!character || !id) {
            return {
                status: 'error',
                error: 'No character found',
            };
        }

        return {
            status: 'success',
            data: character.inventory,
        };
    }
}
