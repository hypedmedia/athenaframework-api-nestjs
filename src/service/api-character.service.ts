import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { COLLECTIONS } from 'src/config';

@Injectable()
export class CharacterService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getAllCharacters() {
        return this.connection.db
            .collection(COLLECTIONS.characters)
            .find()
            .toArray();
    }

    async getCharacterByName(name: string) {
        const resultFound = await this.connection.db
            .collection(COLLECTIONS.characters)
            .findOne({ name: name });
        if (resultFound) {
            return resultFound;
        } else {
            return { name: name, status: 'not found' };
        }
    }

    async getInventoryByName(name: string) {
        const resultFound = await this.connection.db
            .collection(COLLECTIONS.characters)
            .findOne({ name: name });
        if (resultFound) {
            return { status: 'found', inventory: resultFound.inventory };
        } else {
            return { name: name, status: 'not found' };
        }
    }

    async getToolbarByName(name: string) {
        const resultFound = await this.connection.db
            .collection(COLLECTIONS.characters)
            .findOne({ name: name });
        if (resultFound) {
            return { status: 'found', toolbar: resultFound.toolbar };
        } else {
            return { name: name, status: 'not found' };
        }
    }

    async getEquipmentByName(name: string) {
        const resultFound = await this.connection.db
            .collection(COLLECTIONS.characters)
            .findOne({ name: name });
        if (resultFound) {
            return { status: 'found', equipment: resultFound.equipment };
        } else {
            return { name: name, status: 'not found' };
        }
    }
}
