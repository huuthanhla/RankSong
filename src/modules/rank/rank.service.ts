import { Injectable } from '@nestjs/common';

import { RankLoader } from './rank.loader';
import { PlaylistHelper } from '../playlist/playlist.helper';
import { PlaylistLoader } from '../playlist/playlist.loader';

import { SongHelper } from '../song/song.helper';

@Injectable()
export class RankService {

    constructor(
        private rankLoader: RankLoader,
        private playlistLoader: PlaylistLoader,
    ) {}

    async getRanks(country: string) {
        const rank = await this.rankLoader.response(country);

        return {
            songs: SongHelper.songs(rank.songs)
        };
    }

    async getSongs(country: string) {
        const songsURL = await this.rankLoader.responseSongsURL(country);
        console.log('songsURL ' + songsURL)
        const tracks = await this.playlistLoader.responseTracks(songsURL);

        return PlaylistHelper.tracks(tracks);
    }

    getCountryName(country: string): string {
        let name = '';

        if (country == 'nhac-viet') {
            name = 'Việt Nam';
        } else if (country == 'au-my') {
            name = 'Âu Mỹ';
        } else if (country == 'nhac-han') {
            name = 'Hàn Quốc';
        }

        return name;
    }

}