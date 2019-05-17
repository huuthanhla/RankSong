import * as request from 'request';
import * as $ from 'cheerio';
import { Injectable } from '@nestjs/common';

import { SongParser } from './song.parser';

@Injectable()
export class SongLoader {

    private baseURL: string = 'http://www.nhaccuatui.com/tim-kiem/bai-hat?q=';

    constructor(private songParser: SongParser) {}

    reponse(query) {
        return new Promise((resolve, reject) => {
            request.get(this.baseURL + query, (error, response, body) => {
                if (error) { return reject(error); }

                const $songs = $(body).find('ul.search_returns_list li.list_song.search');
                const self = this;
                
                const songs = $songs.map(function (i, elem) {
                    return self.songParser.parse($(this));
                }).get();

                resolve(songs);
            });
        });
    }

}