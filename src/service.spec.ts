import { describe, it, expect } from 'vitest';

import { CatMockRepository } from './repository.mock';
import { CatServices } from './service';

const mockRepository = new CatMockRepository();
const testService = new CatServices(mockRepository);

describe('CatServices', () => {
  it('ServiceShould be mounted', async () => {
    const cat = await testService.update('4', {
      name: 'hi',
      id: 2,
      created_at: 0,
      bread: null,
    });

    expect(cat).instanceof(Object);
    expect(cat.id).equal(4);
  });
});
