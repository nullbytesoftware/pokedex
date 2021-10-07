import { TestBed } from '@angular/core/testing';

import { PokemonDetailsResolverResolver } from './pokemon-details-resolver.resolver';

describe('PokemonDetailsResolverResolver', () => {
  let resolver: PokemonDetailsResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokemonDetailsResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
