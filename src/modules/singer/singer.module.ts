import { Module, Global } from '@nestjs/common';

import { SingerController } from './singer.controller';

import { SingerService } from './singer.service';
import { SingerLoader } from './singer.loader';
import { SingerRepository } from './singer.repository';

import { PlaylistRepository } from '../playlist/playlist.repository';
import { SongRepository } from '../song/song.repository';
import { VideoRepository } from '../video/video.repository';

@Global()
@Module({
    controllers: [ SingerController ],
    providers: [
        SingerService, SingerLoader, SingerRepository,
        PlaylistRepository, SongRepository, VideoRepository
    ]
})
export class SingerModule {}