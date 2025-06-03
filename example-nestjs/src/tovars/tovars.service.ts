import { Injectable } from '@nestjs/common';
import { CreateTovarDto } from './dto/create-tovar.dto';
import { UpdateTovarDto } from './dto/update-tovar.dto';
import { Tovar } from './entities/tovar.entity';
import { FileService } from 'src/file.service';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class TovarsService {
  constructor(private fileService: FileService<Tovar[]>) {}

  findAll(title?: string): Tovar[] {
    const tovars = this.fileService.read();

    return title
      ? tovars.filter((tovar) =>
          tovar.title.toLowerCase().includes(title.toLowerCase()),
        )
      : tovars;
  }

  create(createTovarDto: CreateTovarDto) {
    const tovars = this.fileService.read();
    const tovar = { ...createTovarDto, id: tovars.length + 1 };
    this.fileService.add(tovar);
  }

  findOne(id: number): Tovar | null {
    const tovars = this.fileService.read();
    return tovars.find((tovar) => tovar.id === id) ?? null;
  }

  update(id: number, updateTovarDto: UpdateTovarDto): void {
    const tovars = this.fileService.read();
    const updatedTovars = tovars.map((tovar) =>
      tovar.id === id ? { ...tovar, ...updateTovarDto } : tovar,
    );
    this.fileService.write(updatedTovars);
  }


  remove(id: number): void {
    const filteredTovars = this.fileService
      .read()
      .filter((tovar) => tovar.id !== id);
    this.fileService.write(filteredTovars);
  }
}
