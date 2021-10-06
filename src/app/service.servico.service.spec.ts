import { TestBed } from '@angular/core/testing';

import { Service.ServicoService } from './service.servico.service';

describe('Service.ServicoService', () => {
  let service: Service.ServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service.ServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
