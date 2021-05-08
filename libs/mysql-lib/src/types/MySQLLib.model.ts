import { QueryModel } from './Query.model';

export interface DatabaseLib {
  initConnection(connection: ConnectionString): Promise<void>
  query(): QueryModel
}

export type ConnectionString = {
  connectionLimit: number;
  host: string;
  user: string;
  password: string;
  database: string;
}
