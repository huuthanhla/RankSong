import { Module, Global } from '@nestjs/common';

import { PlaylistController } from './playlist.controller';

import { PlaylistService } from './playlist.service';
import { PlaylistLoader } from './playlist.loader';



@Global()
@Module({
    controllers: [ PlaylistController ],
    providers: [ PlaylistService, PlaylistLoader ]
})
export class PlaylistModule {}