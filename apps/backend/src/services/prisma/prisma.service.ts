import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { PrismaClient } from 'db';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnApplicationShutdown
{
  constructor() {
    super({
      errorFormat: 'pretty',
      log: ['error', 'info'],
    });
  }
  onApplicationShutdown() {
    this.$disconnect();
  }
}
