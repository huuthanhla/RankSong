import * as $ from 'cheerio';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaylistParser {

    parse($playlist) {
        const $name = $playlist.find('a.name_song');
        const name = $name.attr('title');
        const key = $name.attr('key');
        const url = $name.attr('href');

        const $singers = $playlist.find('a.name_singer');
        const singer = $singers.map(function (i, elem) {
            return $(this).text();
        }).get().join('. ');

        const $avatar = $playlist.find('span.avatar img');
        const avatar = $avatar.data('src');

        return { name, singer, avatar, url, key };
    }

}