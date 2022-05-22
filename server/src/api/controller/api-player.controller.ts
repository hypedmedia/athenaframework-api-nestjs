import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AthenaAPIPlayerService } from '../service/api-player.service';

@Controller('/players')
export class AthenaAPIPlayer {
    constructor(private playerService: AthenaAPIPlayerService) {}

    @Get('/all')
    @UseGuards(AuthGuard('basic'))
    async getPlayers() {
        return this.playerService.getAllPlayers();
    }

    @Get('/inventory')
    @UseGuards(AuthGuard('basic'))
    async getInventory(@Query() query: { id: string }) {
        return this.playerService.getInventory(query.id);
    }
}
