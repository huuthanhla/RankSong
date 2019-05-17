import { Module, Global } from '@nestjs/common';

import { VideoController } from './video.controller';

import { VideoService } from './video.service';
import { VideoLoader } from './video.loader';
import { VideoRepository } from './video.repository';

@Global()
@Module({
    controllers: [ VideoController ],
    providers: [ VideoService, VideoLoader, VideoRepository ]
})
export class VideoModule {}