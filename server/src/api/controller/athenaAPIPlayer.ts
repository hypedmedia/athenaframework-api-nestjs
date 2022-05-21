import { Controller, Get, Query } from '@nestjs/common';
import Database from '@stuyk/ezmongodb';
import { Collections } from '../../../../../../server/interface/iDatabaseCollections';
import { Character } from '../../../../../../shared/interfaces/character';

@Controller('/players')
export class AthenaAPIPlayer {
    /* A function that is called when the user goes to the url /players/all */
    @Get('/all')
    async getPlayers() {
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

    /* A function that is called when the user goes to the url /players/inventory?id=id */
    @Get('/inventory')
    async getInventory(@Query() query: { id: string }) {
        const character = await Database.fetchData<Character>('_id', query.id, Collections.Characters);
        if (!character || !query.id) {
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
