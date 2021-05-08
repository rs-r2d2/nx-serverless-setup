import { DatabaseLib, ConnectionString } from '../types/MySQLLib.model';
import { QueryModel } from '../types/Query.model';
import * as mysql from 'mysql';
import Query from './Query';
import * as util from 'util'
import { QUERY_BEFORE_CONNECTION } from './const';


let connectionPool;

class MySQLLib implements DatabaseLib {

  query(): any {
    if (connectionPool) {
      return util.promisify(connectionPool.query);
    }
    throw new Error(QUERY_BEFORE_CONNECTION)
  }

  async initConnection(connection: ConnectionString): Promise<void> {
    mysql.createConnection(connection)
    connectionPool.connect()
  }
}

export default MySQLLib;
