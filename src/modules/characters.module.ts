import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterController } from 'src/controllers/character.controller';
import { CharacterService } from 'src/services/character.service';

@Module({
    imports: [],
    controllers: [CharacterController],
    providers: [CharacterService],
})
export class CharactersModule {}
