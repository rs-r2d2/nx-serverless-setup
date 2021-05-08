import { APIGatewayEvent, APIGatewayProxyResultV2 } from 'aws-lambda';
import { apiGWResponse } from '@serverless/response-lib';

export async function appHandler(event: APIGatewayEvent): Promise<APIGatewayProxyResultV2> {
  return apiGWResponse()
    .json({statusCode: 200, body: {message: 'Message from lambda1'}, });
}
