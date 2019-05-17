import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

import { Category } from '../../models/category';

@Injectable()
export class CategoryRepository extends Category {

    async getCategoryWithTransform(type: string, transform: ((category: any) => any)) {
        const category = await this.getTopic(type);
        return transform(category);
    }

}