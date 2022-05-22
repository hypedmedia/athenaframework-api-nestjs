import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AthenaAPIFactionService } from '../service/api-faction.service';

@Controller('/factions')
export class AthenaAPIFaction {
    constructor(private readonly factionService: AthenaAPIFactionService) {}

    @Get('/')
    @UseGuards(AuthGuard('basic'))
    async getFactionByName(@Query() query: { name: string }) {
        return this.factionService.getFactionByName(query.name);
    }

    @Get('/all')
    @UseGuards(AuthGuard('basic'))
    async getFaction() {
        return this.factionService.getAllFactions();
    }

    @Get('/members')
    @UseGuards(AuthGuard('basic'))
    async getFactionMembers(@Query() query: { id: string }) {
        return this.factionService.getFactionMembers(query.id);
    }

    @Get('/vehicles')
    @UseGuards(AuthGuard('basic'))
    async getFactionVehicles(@Query() query: { id: string }) {
        return this.factionService.getFactionVehicles(query.id);
    }

    @Get('/storage')
    @UseGuards(AuthGuard('basic'))
    async getFactionStorage(@Query() query: { id: string }) {
        return this.factionService.getFactionStorage(query.id);
    }
}
