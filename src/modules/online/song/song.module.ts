import { Module, Global } from '@nestjs/common';

import { SongController } from './song.controller';

import { SongService } from './song.service';
import { SongRepository } from '../../song/song.repository';
import { SongAPI } from './song.api';
import { SongLoader } from './song.loader';

@Global()
@Module({
    controllers: [ SongController ],
    providers: [ SongService, SongRepository, SongAPI, SongLoader ]
})
export class SongsModule {}