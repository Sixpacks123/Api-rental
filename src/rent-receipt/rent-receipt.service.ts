import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateRentReceiptInput } from './inputs/create-rent-receipt.input';
import { UpdateRentReceiptInput } from './inputs/update-rent-receipt.input';

@Injectable()
export class RentReceiptService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRentReceiptInput: CreateRentReceiptInput) {
    return this.prisma.rentReceipt.create({ data: createRentReceiptInput });
  }

  findAll() {
    return this.prisma.rentReceipt.findMany({
      include: {
        tenant: true,
        owner: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.rentReceipt.findUnique({
      where: { id },
      include: {
        tenant: true,
        owner: true,
      },
    });
  }

  update(id: number, updateRentReceiptInput: UpdateRentReceiptInput) {
    return this.prisma.rentReceipt.update({
      where: { id },
      data: updateRentReceiptInput,
    });
  }

  remove(id: number) {
    return this.prisma.rentReceipt.delete({ where: { id } });
  }
}
