import { Module } from '@nestjs/common';
import { CommonFacilityService } from './common-facility.service';
import { CommonFacilityResolver } from './common-facility.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [CommonFacilityService, CommonFacilityResolver, PrismaService],
})
export class CommonFacilityModule {}
