import { UserCreatinModule } from './user-creatin.module';

describe('UserCreatinModule', () => {
  let userCreatinModule: UserCreatinModule;

  beforeEach(() => {
    userCreatinModule = new UserCreatinModule();
  });

  it('should create an instance', () => {
    expect(userCreatinModule).toBeTruthy();
  });
});
