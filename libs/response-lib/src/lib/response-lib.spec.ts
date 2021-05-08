import { apiGWResponse } from './response-lib';

describe('responseLib', () => {
  it('should work', () => {
    expect(apiGWResponse({}))
      .toEqual({"body": "", "headers": {}, "statusCode": 200});
  });
});
