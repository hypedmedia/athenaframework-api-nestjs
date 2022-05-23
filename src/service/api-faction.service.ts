import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Faction, FactionDocument } from 'src/schemas/api-faction.schema';

@Injectable()
export class FactionService {
    constructor(@InjectModel(Faction.name) private readonly faction: Model<FactionDocument>) {}

    async getAllFactions() {
        return this.faction.find().select('_id members ranks vehicles storages settings');
    }

    async getVehiclesByFactionName(name: string) {
        return this.faction.findOne({ name: name }).select('vehicles');
    }

    async getFactionStorageByFactionName(name: string) {
        return this.faction.findOne({ name: name }).select('storage');
    }

    async getFactionMembersByFactionName(name: string) {
        return this.faction.findOne({ name: name }).select('members');
    }
}
