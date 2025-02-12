import { Module } from '@nestjs/common';
import { XpSystemsService } from './xp-systems.service';
import { DbModule } from '../database/db.module';

@Module({
  imports: [DbModule],
  providers: [XpSystemsService],
  exports: [XpSystemsService]
})
export class XpSystemsModule {}
