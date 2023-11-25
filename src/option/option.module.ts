import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionResolver } from './option.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [OptionService, OptionResolver, PrismaService],
})
export class OptionModule {}
