import { Module } from '@nestjs/common';

import { SongModule } from './song/song.module';
import { RankModule } from './rank/rank.module';

@Module({
    imports: [
        SongModule, 
        RankModule
    ]
})
export class ApplicationModule {}