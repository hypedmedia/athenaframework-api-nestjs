import { Controller, Get, Query } from '@nestjs/common';
import Database from '@stuyk/ezmongodb';
import { Collections } from '../../../../../../server/interface/iDatabaseCollections';
import { IVehicle } from '../../../../../../shared/interfaces/iVehicle';

@Controller('/vehicles')
export class AthenaAPIVehicle {
    @Get('/all')
    async getAllVehicles() {
        const vehicles = await Database.fetchAllData<IVehicle>(Collections.Vehicles);
        if (!vehicles) {
            return {
                status: 'error',
                error: 'No vehicles found',
            };
        }

        return {
            status: 'success',
            data: vehicles,
        };
    }

    @Get('/character')
    async getVehicleByCharacterId(@Query() query: { id: string }) {
        const vehicle = await Database.fetchAllByField<IVehicle>('owner', query.id, Collections.Vehicles);
        if (!vehicle || !query.id) {
            return {
                status: 'error',
                error: 'No vehicle found',
            };
        }

        return {
            status: 'success',
            data: vehicle,
        };
    }
}
