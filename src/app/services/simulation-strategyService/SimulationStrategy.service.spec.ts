/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulationStrategyService } from './SimulationStrategy.service';

describe('Service: SimulationStrategy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulationStrategyService]
    });
  });

  it('should ...', inject([SimulationStrategyService], (service: SimulationStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
