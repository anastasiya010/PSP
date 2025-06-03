import { Module } from '@nestjs/common';
import { TovarsController } from './tovars.controller';
import { TovarsService } from './tovars.service';
import { FileService } from '../file.service';
import { Tovar } from './entities/tovar.entity';
import { FileAccessor } from '../file.service';

@Module({
  controllers: [TovarsController],
  providers: [
    TovarsService,
    {
      provide: FileService,
      useFactory: (tovars: TovarsModule) =>
        new FileService<Tovar[]>(tovars.filePath),
      inject: [TovarsModule],
    },
  ],
})
export class TovarsModule implements FileAccessor {
  public readonly filePath = 'assets/tovars.json';
}