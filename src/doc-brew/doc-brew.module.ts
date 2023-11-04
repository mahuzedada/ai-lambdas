import { Module } from '@nestjs/common';
import { DocBrewController } from './doc-brew.controller';
import { DocBrewService } from './doc-brew.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [DocBrewController],
  providers: [DocBrewService],
})
export class DocBrewModule {}
