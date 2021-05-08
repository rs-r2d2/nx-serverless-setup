import { Response } from './response';
import { ResponseDataModel, ResponseModel } from './types/response.model';

export function apiGWResponse(responseData?: ResponseDataModel): ResponseModel {
  let res: ResponseModel;
  if (responseData) {
    const { statusCode, body, headers } = responseData
    res = new Response(statusCode, body, headers );
  }
  res = new Response();
  return res;
}
