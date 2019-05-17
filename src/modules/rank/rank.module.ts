import { Module, Global } from '@nestjs/common';

import { RankController } from './rank.controller';

import { RankService } from './rank.service';
import { RankLoader } from './rank.loader';

import { PlaylistLoader } from '../playlist/playlist.loader';



@Global()
@Module({
    controllers: [ RankController ],
    providers: [
        RankService, RankLoader,        
        PlaylistLoader
    ]
})
export class RankModule {}