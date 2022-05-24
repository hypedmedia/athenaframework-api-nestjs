import { Controller, Get, Query } from "@nestjs/common";
import { FactionService } from "src/services/faction.service";

@Controller('factions')
export class FactionController {
    constructor(private readonly factionService: FactionService) {}

    @Get('all')
    getAllFactions() {
        return this.factionService.getAllFactions();
    }

    @Get('vehicles')
    getVehiclesByFactionName(@Query('name') name: string) {
        return this.factionService.getVehiclesByFactionName(name);
    }

    @Get('storage')
    getFactionStorageByFactionName(@Query('name') name: string) {
        return this.factionService.getFactionStorageByFactionName(name);
    }

    @Get('members')
    getFactionMembersByFactionName(@Query('name') name: string) {
        return this.factionService.getFactionMembersByFactionName(name);
    }
}