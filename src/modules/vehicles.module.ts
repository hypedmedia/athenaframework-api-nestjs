import { Module } from '@nestjs/common';
import { VehicleController } from 'src/controllers/vehicle.controller';
import { VehicleService } from 'src/services/vehicle.service';

@Module({
    imports: [],
    controllers: [VehicleController],
    providers: [VehicleService],
})
export class VehiclesModule {}
