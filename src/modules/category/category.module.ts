import { Module, Global } from '@nestjs/common';

import { CategoryController } from './category.controller';

import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';

@Global()
@Module({
    controllers: [ CategoryController ],
    providers: [ CategoryService, CategoryRepository ]
})
export class CategoryModule {}