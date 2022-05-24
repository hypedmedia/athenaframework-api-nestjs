import { Controller, Get } from '@nestjs/common';
import { VehicleService } from 'src/services/vehicle.service';

@Controller('vehicles')
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) {}

    @Get('all')
    async getAllVehicles() {
        return this.vehicleService.getAllVehicles();
    }

    @Get('/')
    async getVehicleById(id: string) {
        return this.vehicleService.getVehicleById(id);
    }
}
