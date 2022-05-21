import { Injectable } from '@nestjs/common';

@Injectable()
export class AthenaAPIService {
    constructor() {
        console.log('Athena APIService is initialized');
    }
}
