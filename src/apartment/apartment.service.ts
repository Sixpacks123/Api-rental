import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateApartmentInput } from './inputs/create-apartment.input';
import { UpdateApartmentInput } from './inputs/update-apartment.input';

@Injectable()
export class ApartmentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createApartmentInput: CreateApartmentInput) {
    return this.prisma.apartment.create({ data: createApartmentInput });
  }

  findAll() {
    return this.prisma.apartment.findMany({
      include: {
        building: true,
        owner: true,
        tenants: true,
        options: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.apartment.findUnique({
      where: { id },
      include: {
        building: true,
        owner: true,
        tenants: true,
        options: true,
      },
    });
  }

  update(id: number, updateApartmentInput: UpdateApartmentInput) {
    return this.prisma.apartment.update({
      where: { id },
      data: updateApartmentInput,
    });
  }

  remove(id: number) {
    return this.prisma.apartment.delete({ where: { id } });
  }
}
