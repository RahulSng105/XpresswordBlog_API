import { Test, TestingModule } from '@nestjs/testing';
import { BlogCommentsResolver } from './blog-comments.resolver';

describe('BlogCommentsResolver', () => {
  let resolver: BlogCommentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogCommentsResolver],
    }).compile();

    resolver = module.get<BlogCommentsResolver>(BlogCommentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
