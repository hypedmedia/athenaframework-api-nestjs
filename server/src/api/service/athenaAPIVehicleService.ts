import { Injectable } from '@nestjs/common';
import Database from '@stuyk/ezmongodb';
import { Collections } from '../../../../../../server/interface/iDatabaseCollections';
import { IVehicle } from '../../../../../../shared/interfaces/iVehicle';

@Injectable()
export class AthenaAPIVehicleService {
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

    async getVehicleByCharacterId(id: string) {
        const vehicle = await Database.fetchAllByField<IVehicle>('owner', id, Collections.Vehicles);
        if (!vehicle || !id) {
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
