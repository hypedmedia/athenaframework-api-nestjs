import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Storage, StorageDocument } from 'src/schemas/api-storage.schema';

@Injectable()
export class StorageService {
    constructor(
        @InjectModel(Storage.name)
        private readonly storage: Model<StorageDocument>,
    ) {}

    async getAllStorages() {
        return this.storage.find<StorageDocument>({}).select('_id items');
    }
}
