import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCommonFacilityInput } from './inputs/create-common-facility.input';
import { UpdateCommonFacilityInput } from './inputs/update-common-facility.input';

@Injectable()
export class CommonFacilityService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCommonFacilityInput: CreateCommonFacilityInput) {
    return this.prisma.commonFacility.create({
      data: createCommonFacilityInput,
    });
  }

  findAll() {
    return this.prisma.commonFacility.findMany({
      include: {
        building: true, // Inclure la relation avec Building
      },
    });
  }

  findOne(id: number) {
    return this.prisma.commonFacility.findUnique({
      where: { id },
      include: {
        building: true, // Inclure la relation avec Building
      },
    });
  }

  update(id: number, updateCommonFacilityInput: UpdateCommonFacilityInput) {
    return this.prisma.commonFacility.update({
      where: { id },
      data: updateCommonFacilityInput,
    });
  }

  remove(id: number) {
    return this.prisma.commonFacility.delete({ where: { id } });
  }
}
