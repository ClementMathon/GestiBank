import { ConseillerLayoutModule } from './conseiller-layout.module';

describe('ConseillerLayoutModule', () => {
  let conseillerLayoutModule: ConseillerLayoutModule;

  beforeEach(() => {
    conseillerLayoutModule = new ConseillerLayoutModule();
  });

  it('should create an instance', () => {
    expect(conseillerLayoutModule).toBeTruthy();
  });
});
