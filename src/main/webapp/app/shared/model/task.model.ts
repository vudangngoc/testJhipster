import { Moment } from 'moment';

export interface ITask {
  id?: number;
  name?: string;
  description?: string;
  date?: Moment;
}

export class Task implements ITask {
  constructor(public id?: number, public name?: string, public description?: string, public date?: Moment) {}
}
