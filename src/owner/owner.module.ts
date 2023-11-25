import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [OwnerService, OwnerResolver, PrismaService],
})
export class OwnerModule {}
