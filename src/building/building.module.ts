import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingResolver } from './building.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [BuildingService, BuildingResolver, PrismaService],
})
export class BuildingModule {}
