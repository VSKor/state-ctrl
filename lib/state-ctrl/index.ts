const INITIAL_STATE = 'init';

export type StateName = string;

export interface TransitionDefs {
  name: string;
  from: StateName;
  to: StateName;
}

export class StateCTRL {
  readonly state: string;

  constructor() {
    this.state = INITIAL_STATE;
  }
}
