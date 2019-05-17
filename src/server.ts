import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

let port = process.env.PORT || 3000

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(port, () => console.log(`Application is listening on port ${port}.`));
}
bootstrap();