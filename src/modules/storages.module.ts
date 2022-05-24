import { Module } from '@nestjs/common';
import { StorageController } from 'src/controllers/storage.controller';
import { StorageService } from 'src/services/storage.service';

@Module({
    imports: [],
    controllers: [StorageController],
    providers: [StorageService],
})
export class StoragesModule {}
