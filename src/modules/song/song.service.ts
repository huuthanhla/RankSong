import { Injectable } from '@nestjs/common';

import { SongLoader } from './song.loader';
import { SongRepository } from './song.repository';
import { SongHelper } from './song.helper';

@Injectable()
export class SongService {

    constructor(
        private songLoader: SongLoader,
        private songRepository: SongRepository
    ) {}

    async getSong(id: string) {
        let song = await this.songRepository.findSong(id);
        song = await this.songLoader.reponse(song.url);

        return { track: SongHelper.tracks([song])[0] };
    }

}