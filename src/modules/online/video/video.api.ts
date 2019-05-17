import { Injectable } from '@nestjs/common';

const baseURL = 'http://www.nhaccuatui.com/video';
const suffixURL = '.html';

@Injectable()
export class VideoAPI {

    getURL(categoryURL: string, page: number) {
        const pageURL = page == 1 ? '' : `.${page}`;
        return `${baseURL}-${categoryURL}${pageURL}${suffixURL}`;
    }

}