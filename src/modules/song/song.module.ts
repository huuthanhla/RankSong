import { Module, Global } from '@nestjs/common';

import { SongController } from './song.controller';

import { SongService } from './song.service';
import { SongLoader } from './song.loader';
import { SongRepository } from './song.repository';

@Global()
@Module({
    controllers: [ SongController ],
    providers: [ SongService, SongLoader, SongRepository ]
})
export class SongModule {}