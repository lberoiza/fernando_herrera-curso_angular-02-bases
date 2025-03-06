import { TestBed } from '@angular/core/testing';

import { DragonballCharacterService } from './dragonball-character.service';

describe('DragonballCharacterService', () => {
  let service: DragonballCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonballCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
