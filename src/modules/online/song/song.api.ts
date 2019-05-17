import { Injectable } from '@nestjs/common';

const baseURL = 'http://www.nhaccuatui.com/bai-hat';
const suffixURL = '.html';

@Injectable()
export class SongAPI {

    getURL(categoryURL: string, page: number) {
        const pageURL = page == 1 ? '' : `.${page}`;
        return `${baseURL}/${categoryURL}${pageURL}${suffixURL}`;
    }

}