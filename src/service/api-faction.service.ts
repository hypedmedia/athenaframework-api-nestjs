import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class FactionService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getAllFactions() {
        return this.connection.db.collection('factions').find().toArray();
    }

    async getVehiclesByFactionName(name: string) {
        const resultFound = await this.connection.db
            .collection('factions')
            .findOne({ name: name });
        if (resultFound) {
            return { status: 'found', vehicles: resultFound.settings.vehicles };
        } else {
            return { name: name, status: 'not found' };
        }
    }

    async getFactionStorageByFactionName(name: string) {
        const resultFound = await this.connection.db
            .collection('factions')
            .findOne({ name: name });
        if (resultFound) {
            return { status: 'found', storage: resultFound.storage };
        } else {
            return { name: name, status: 'not found' };
        }
    }

    async getFactionMembersByFactionName(name: string) {
        const resultFound = await this.connection.db
            .collection('factions')
            .findOne({ name: name });
        if (resultFound) {
            return { status: 'found', members: resultFound.members };
        } else {
            return { name: name, status: 'not found' };
        }
    }
}
