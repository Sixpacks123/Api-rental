import { Module } from '@nestjs/common';
import { SyndicService } from './syndic.service';
import { SyndicResolver } from './syndic.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [SyndicService, SyndicResolver, PrismaService],
})
export class SyndicModule {}
