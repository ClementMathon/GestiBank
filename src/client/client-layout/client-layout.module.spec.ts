import { ClientLayoutModule } from './client-layout.module';

describe('ClientLayoutModule', () => {
  let clientLayoutModule: ClientLayoutModule;

  beforeEach(() => {
    clientLayoutModule = new ClientLayoutModule();
  });

  it('should create an instance', () => {
    expect(clientLayoutModule).toBeTruthy();
  });
});
