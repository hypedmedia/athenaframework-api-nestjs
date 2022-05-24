import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FactionController } from "src/controllers/faction.controller";
import { FactionService } from "src/services/faction.service";

@Module({
    imports: [],
    controllers: [FactionController],
    providers: [FactionService],
})
export class FactionsModule {}