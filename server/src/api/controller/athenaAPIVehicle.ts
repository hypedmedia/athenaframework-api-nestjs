import { Controller, Get, Query } from '@nestjs/common';
import Database from '@stuyk/ezmongodb';
import { Collections } from '../../../../../../server/interface/iDatabaseCollections';
import { IVehicle } from '../../../../../../shared/interfaces/iVehicle';

@Controller('/vehicles')
export class AthenaAPIVehicle {
    /* A function that is called when the user goes to the url /vehicles/all */
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

    /* A function that is called when the user goes to the url /vehicles/character?id=id */
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
