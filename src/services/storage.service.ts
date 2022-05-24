import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class StorageService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getAllStorages() {
        return this.connection.collection('storages').find().toArray();
    }
}
