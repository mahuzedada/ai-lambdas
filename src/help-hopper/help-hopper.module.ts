import { Module } from '@nestjs/common';
import { HelpHopperController } from './help-hopper.controller';
import { HelpHopperService } from './help-hopper.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [HelpHopperController],
  providers: [HelpHopperService],
})
export class HelpHopperModule {}
