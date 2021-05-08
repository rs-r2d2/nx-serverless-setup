import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { body, ResponseDataModel, ResponseModel } from './types/response.model';

export class Response implements ResponseModel {
 constructor(private statusCode: number = 200, private body: body = '', private headers = {}) {

 }

 json(responseData?: ResponseDataModel): APIGatewayProxyResultV2 {
   let statusCode, body, headers;
   statusCode = responseData?.statusCode || this.headers;
   body = responseData?.body || this.body;
   headers = responseData?.headers || this.headers;
   return {
     statusCode,
     body: JSON.stringify(body),
     headers
   }
 }
}
