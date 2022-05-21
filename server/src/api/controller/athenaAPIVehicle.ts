import { Controller, Get, Query } from '@nestjs/common';
import { AthenaAPIVehicleService } from '../service/athenaAPIVehicleService';

@Controller('/vehicles')
export class AthenaAPIVehicle {
    constructor(private readonly vehicleService: AthenaAPIVehicleService) {}
    @Get('/all')
    async getAllVehicles() {
        return this.vehicleService.getAllVehicles();
    }

    @Get('/character')
    async getVehicleByCharacterId(@Query() query: { id: string }) {
        return this.vehicleService.getVehicleByCharacterId(query.id);
    }
}
