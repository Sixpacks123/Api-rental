import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOwnerInput } from './inputs/create-owner.input';
import { UpdateOwnerInput } from './inputs/update-owner.input';

@Injectable()
export class OwnerService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOwnerInput: CreateOwnerInput) {
    return this.prisma.owner.create({ data: createOwnerInput });
  }

  findAll() {
    return this.prisma.owner.findMany({
      include: {
        apartments: true, // Inclure la relation avec les appartements
      },
    });
  }

  findOne(id: number) {
    return this.prisma.owner.findUnique({
      where: { id },
      include: {
        apartments: true, // Inclure la relation avec les appartements
      },
    });
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return this.prisma.owner.update({
      where: { id },
      data: updateOwnerInput,
    });
  }

  remove(id: number) {
    return this.prisma.owner.delete({ where: { id } });
  }
}
