import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOptionInput } from './inputs/create-option.input';
import { UpdateOptionInput } from './inputs/update-option.input';

@Injectable()
export class OptionService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOptionInput: CreateOptionInput) {
    return this.prisma.option.create({ data: createOptionInput });
  }

  findAll() {
    return this.prisma.option.findMany({
      include: {
        apartment: true, // Inclure la relation avec Apartment
      },
    });
  }

  findOne(id: number) {
    return this.prisma.option.findUnique({
      where: { id },
      include: {
        apartment: true, // Inclure la relation avec Apartment
      },
    });
  }

  update(id: number, updateOptionInput: UpdateOptionInput) {
    return this.prisma.option.update({
      where: { id },
      data: updateOptionInput,
    });
  }

  remove(id: number) {
    return this.prisma.option.delete({ where: { id } });
  }
}
