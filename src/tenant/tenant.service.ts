import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTenantInput } from './inputs/create-tenant.input';
import { UpdateTenantInput } from './inputs/update-tenant.input';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTenantInput: CreateTenantInput) {
    return this.prisma.tenant.create({ data: createTenantInput });
  }

  findAll() {
    return this.prisma.tenant.findMany({
      include: {
        apartment: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.tenant.findUnique({
      where: { id },
      include: {
        apartment: true,
      },
    });
  }

  update(id: number, updateTenantInput: UpdateTenantInput) {
    return this.prisma.tenant.update({
      where: { id },
      data: updateTenantInput,
    });
  }

  remove(id: number) {
    return this.prisma.tenant.delete({ where: { id } });
  }
}
