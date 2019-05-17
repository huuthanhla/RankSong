import { Module, Global } from '@nestjs/common';

import { PlaylistController } from './playlist.controller';

import { PlaylistService } from './playlist.service';
import { PlaylistLoader } from './playlist.loader';
import { PlaylistRepository } from './playlist.repository';

@Global()
@Module({
    controllers: [ PlaylistController ],
    providers: [ PlaylistService, PlaylistLoader, PlaylistRepository ]
})
export class PlaylistModule {}