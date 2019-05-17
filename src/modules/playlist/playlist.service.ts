import { Injectable } from '@nestjs/common';

import { PlaylistLoader } from './playlist.loader';
import { PlaylistHelper } from './playlist.helper';

@Injectable()
export class PlaylistService {

    async getPlaylist(id: string) {
        // let playlist = await this.playlistRepository.findPlaylist(id);
        // playlist = await this.playlistLoader.response(playlist.url);

        // this.playlistRepository.savePlaylists(playlist.others);

        // return {
        //     tracks: PlaylistHelper.tracks(playlist.tracks),
        //     others: PlaylistHelper.playlists(playlist.others)
        // };
        return {}
    }

}