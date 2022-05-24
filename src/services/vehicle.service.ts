import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { COLLECTIONS } from 'src/config';

@Injectable()
export class VehicleService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getAllVehicles() {
        const results = await this.connection.db
            .collection(COLLECTIONS.vehicles)
            .find()
            .toArray();

        if (results.length > 0) {
            return results;
        } else {
            return [];
        }
    }

    async getVehicleById(id: string) {
        const results = await this.connection.db
            .collection(COLLECTIONS.vehicles)
            .find({ _id: id })
            .toArray();

        if (results.length > 0) {
            return results[0];
        } else {
            return null;
        }
    }
}
