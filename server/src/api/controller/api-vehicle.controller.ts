import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AthenaAPIVehicleService } from '../service/api-vehicle.service';

@Controller('/vehicles')
export class AthenaAPIVehicle {
    constructor(private readonly vehicleService: AthenaAPIVehicleService) {}
    @Get('/all')
    @UseGuards(AuthGuard('basic'))
    async getAllVehicles() {
        return this.vehicleService.getAllVehicles();
    }

    @Get('/character')
    @UseGuards(AuthGuard('basic'))
    async getVehicleByCharacterId(@Query() query: { id: string }) {
        return this.vehicleService.getVehicleByCharacterId(query.id);
    }
}
