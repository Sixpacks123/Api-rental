import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSyndicInput } from './inputs/create-syndic.input';
import { UpdateSyndicInput } from './inputs/update-syndic.input';

@Injectable()
export class SyndicService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSyndicInput: CreateSyndicInput) {
    return this.prisma.syndic.create({ data: createSyndicInput });
  }

  findAll() {
    return this.prisma.syndic.findMany();
  }

  findOne(id: number) {
    return this.prisma.syndic.findUnique({ where: { id } });
  }

  update(id: number, updateSyndicInput: UpdateSyndicInput) {
    return this.prisma.syndic.update({
      where: { id },
      data: updateSyndicInput,
    });
  }

  remove(id: number) {
    return this.prisma.syndic.delete({ where: { id } });
  }
}
