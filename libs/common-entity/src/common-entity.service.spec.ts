import { Test, TestingModule } from '@nestjs/testing';
import { CommonEntityService } from './common-entity.service';

describe('CommonEntityService', () => {
  let service: CommonEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonEntityService],
    }).compile();

    service = module.get<CommonEntityService>(CommonEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
