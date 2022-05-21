import { Controller, Get, Query } from '@nestjs/common';
import { AthenaAPIPlayerService } from '../service/athenaAPIPlayerService';

@Controller('/players')
export class AthenaAPIPlayer {
    constructor(private playerService: AthenaAPIPlayerService) {}

    @Get('/all')
    async getPlayers() {
        return this.playerService.getAllPlayers();
    }

    @Get('/inventory')
    async getInventory(@Query() query: { id: string }) {
        return this.playerService.getInventory(query.id);
    }
}
