import { APIGatewayProxyResultV2 } from 'aws-lambda';

export interface ResponseModel {
  json(responseData?:ResponseDataModel): APIGatewayProxyResultV2
}

export type body = string | {};

export interface ResponseDataModel {
  statusCode: number,
  body: body,
  headers?: {}
}
