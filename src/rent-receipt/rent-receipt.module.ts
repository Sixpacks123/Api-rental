import { Module } from '@nestjs/common';
import { RentReceiptService } from './rent-receipt.service';
import { RentReceiptResolver } from './rent-receipt.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [RentReceiptService, RentReceiptResolver, PrismaService],
})
export class RentReceiptModule {}
