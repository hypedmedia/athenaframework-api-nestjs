import { Controller, Get } from "@nestjs/common";
import { StorageService } from "src/services/storage.service";

@Controller('storages')
export class StorageController {
    constructor(private readonly storageService: StorageService) {}

    @Get('all')
    async getAllStorages() {
        return this.storageService.getAllStorages();
    }
}