import { QueryModel } from '../types/Query.model';

class Query implements QueryModel {
  constructor() {
  }

  query(): Promise<any> {
    return Promise.resolve()
  }

}

export default Query
