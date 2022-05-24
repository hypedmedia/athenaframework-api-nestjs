import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class FactionService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getAllFactions() {
        return this.connection.collection('factions').find().toArray();
    }

    async getVehiclesByFactionName(name: string) {
        return this.connection
            .collection('factions')
            .findOne({ name: name })
            .then((faction) => {
                return faction.vehicles;
            });
    }

    async getFactionStorageByFactionName(name: string) {
        return this.connection
            .collection('factions')
            .findOne({ name: name })
            .then((faction) => {
                return faction.storage;
            });
    }

    async getFactionMembersByFactionName(name: string) {
        return this.connection
            .collection('factions')
            .findOne({ name: name })
            .then((faction) => {
                return faction.members;
            });
    }
}
