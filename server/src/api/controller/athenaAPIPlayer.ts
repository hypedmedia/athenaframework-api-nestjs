import { Controller, Get, Query } from "@nestjs/common";
import Database from "@stuyk/ezmongodb";
import { Collections } from "../../../../../../server/interface/iDatabaseCollections";
import { Character } from "../../../../../../shared/interfaces/character";

@Controller('/players')
export class AthenaAPIPlayer {
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