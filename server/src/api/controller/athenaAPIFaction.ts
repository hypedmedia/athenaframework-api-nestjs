import { Controller, Get, Query } from '@nestjs/common';
import { AthenaAPIFactionService } from '../service/athenaAPIFactionService';

@Controller('/factions')
export class AthenaAPIFaction {
    constructor(private readonly factionService: AthenaAPIFactionService) {}

    @Get('/')
    async getFactionByName(@Query() query: { name: string }) {
        return this.factionService.getFactionByName(query.name);
    }

    @Get('/all')
    async getFaction() {
        return this.factionService.getAllFactions();
    }

    @Get('/members')
    async getFactionMembers(@Query() query: { id: string }) {
        return this.factionService.getFactionMembers(query.id);
    }

    @Get('/vehicles')
    async getFactionVehicles(@Query() query: { id: string }) {
        return this.factionService.getFactionVehicles(query.id);
    }

    @Get('/storage')
    async getFactionStorage(@Query() query: { id: string }) {
        return this.factionService.getFactionStorage(query.id);
    }
}
