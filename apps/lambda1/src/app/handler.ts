import { APIGatewayEvent, APIGatewayProxyResultV2 } from 'aws-lambda';
import { apiGWResponse } from '@serverless/response-lib';
import * as mysql from 'mysql';

export async function appHandler(event: APIGatewayEvent): Promise<APIGatewayProxyResultV2> {
  try {
    mysql.createConnection({})
  } catch (e) {
    console.log(e.message);
  }
  return apiGWResponse().json({
    body:
      {message: "Hello from lambda 1"},
    statusCode: 200}
  )
}
