import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class CharacterService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getAllCharacters() {
        return this.connection.collection('characters').find().toArray();
    }

    async getCharacterByName(name: string) {
        return this.connection.collection('characters').findOne({ name: name });
    }

    async getInventoryByName(name: string): Promise<Array<any>> {
        return this.connection.collection('characters').findOne({ name: name }).then(
            (character) => {
                return character.inventory;
            }
        );
    }

    async getToolbarByName(name: string) {
        return this.connection.collection('characters').findOne({ name: name }).then(
            (character) => {
                return character.toolbar;
            }
        );
    }

    async getEquipmentByName(name: string) {
        return this.connection.collection('characters').findOne({ name: name }).then(
            (character) => {
                return character.equipment;
            }
        );
    }
}
