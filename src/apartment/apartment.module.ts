import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentResolver } from './apartment.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [ApartmentService, ApartmentResolver, PrismaService],
})
export class ApartmentModule {}
