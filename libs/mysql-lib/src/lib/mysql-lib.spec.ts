import { mysqlLib } from './mysql-lib';

describe('mysqlLib', () => {
  it('should work', () => {
    expect(mysqlLib()).toEqual('mysql-lib');
  });
});
