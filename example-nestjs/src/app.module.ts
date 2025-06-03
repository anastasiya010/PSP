import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TovarsModule } from './tovars/tovars.module';

@Module({
  imports: [TovarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}