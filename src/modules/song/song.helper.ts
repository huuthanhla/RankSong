import { ModelHelper } from '../model.helper';

import { NEW_LINK_SUFFIX, HOT_LINK_SUFFIX } from '../suffix';

export class SongHelper extends ModelHelper {
    
    static getLink(category: string): string {
        let link = category;
        if (category.indexOf(HOT_LINK_SUFFIX) != -1) {
            link = category.substring(0, category.indexOf(HOT_LINK_SUFFIX));
        } else if (category.indexOf(NEW_LINK_SUFFIX) != -1) {
            link = category.substring(0, category.indexOf(NEW_LINK_SUFFIX));
        }
        return link;
    }

    static getSuffix(category: string): string {
        if (category.indexOf(HOT_LINK_SUFFIX) == -1) {
            return 'new';
        }
        return 'hot';
    }

    static transformCategory(category) {
        return {
            name: category.name,
            newlink: category.link + NEW_LINK_SUFFIX,
            hotlink: category.link + HOT_LINK_SUFFIX
        };
    }

    static songs(songs) {
        return songs.map(song => ({
            id: SongHelper.getId(song.url),
            name: song.name,
            singer: song.singer
        }));
    }

}