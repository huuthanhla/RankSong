import { Module, Global } from '@nestjs/common';

import { SongController } from './song.controller';

import { SongService } from './song.service';
import { SongLoader } from './song.loader';

@Global()
@Module({
    controllers: [ SongController ],
    providers: [ SongService, SongLoader ]
})
export class SongModule {}