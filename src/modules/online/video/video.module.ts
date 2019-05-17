import { Module, Global } from '@nestjs/common';

import { VideoController } from './video.controller';

import { VideoService } from './video.service';
import { VideoRepository } from '../../video/video.repository';
import { VideoAPI } from './video.api';
import { VideoLoader } from './video.loader';

@Global()
@Module({
    controllers: [ VideoController ],
    providers: [ VideoService, VideoRepository, VideoAPI, VideoLoader ]
})
export class VideosModule {}