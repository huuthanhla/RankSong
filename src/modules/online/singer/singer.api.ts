import { Injectable } from '@nestjs/common';

const baseURL = 'http://nhaccuatui.com/nghe-si';
const suffixURL = '.html';

@Injectable()
export class SingerAPI {

    getHotSingerURL(): string {
        return `${baseURL}${suffixURL}`;
    }

    getURL(alpha: string, page: number = 1): string {
        const pageURL = page == 1 ? '' : `.${page}`;
        return `${baseURL}/${alpha}${pageURL}${suffixURL}`;
    }

}