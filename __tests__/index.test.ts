import { StateCTRL } from './../lib';

describe('State-ctrl', () => {
  const stateCtrl = new StateCTRL();
  it('dry init', () => {
    expect(stateCtrl).toBeTruthy();
  });
});
