import { Injectable } from "@nestjs/common";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";
import { COLLECTIONS } from "src/config";

@Injectable()
export class StorageService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getAllStorages() {
        const results = await this.connection.db
            .collection(COLLECTIONS.storages)
            .find()
            .toArray();

        if (results.length > 0) {
            return results;
        } else {
            return [];
        }
    }
}