import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { dataSourceOptions } from 'db/data-source';

@Injectable()
export class DatabaseService implements OnApplicationShutdown {
  private dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource(dataSourceOptions);
    this.initialize();
  }

  private async initialize() {
    try {
      await this.dataSource.initialize();
    } catch (error) {
      console.error('Error during PostgreSQL connection initialization:', error);
    }
  }

  async onApplicationShutdown() {
    console.log('[Shutdown]: Shutting down PostgreSQL connection in Transaction service');
    await this.dataSource.destroy();
    console.log('[Shutdown]: PostgreSQL connection closed in Transaction service');
  }
}
