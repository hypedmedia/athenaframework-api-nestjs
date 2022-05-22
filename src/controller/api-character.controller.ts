import { Controller, Get, Query } from '@nestjs/common';
import { CharacterService } from 'src/service/api-character.service';

@Controller('characters')
export class CharacterController {
    constructor(private readonly characterService: CharacterService) {}

    @Get('all')
    getAllCharacters() {
        return this.characterService.getAllCharacters();
    }

    @Get('/')
    getCharacterById(@Query('name') name: string) {
        return this.characterService.getCharacterByName(name);
    }

    @Get('/inventory')
    getInventoryByName(@Query('name') name: string) {
        return this.characterService.getInventoryByName(name);
    }

    @Get('/toolbar')
    getToolbarByName(@Query('name') name: string) {
        return this.characterService.getToolbarByName(name);
    }

    @Get('/equipment')
    getEquipmentByName(@Query('name') name: string) {
        return this.characterService.getEquipmentByName(name);
    }
}
