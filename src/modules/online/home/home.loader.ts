import * as request from 'request';
import * as $ from 'cheerio';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeLoader {

    response() {
        const url = 'http://www.nhaccuatui.com';

        return new Promise((resolve, reject) => {
            request(url, (error, response, body) => {
                if (error) { return reject(error); }
                resolve($(body));
            });
        });
    }

}