const lambda1 =  require('./dist/apps/lambda/lambda1/app');
const lambdasam = require('/home/ubuntu/Documents/sam-app/hello-world/app.js');

(async () => {
  console.log('lambda1')
  console.log(await lambda1.lambdaHandler());
  console.log('lambdasam')
  console.log(await lambdasam.lambdaHandler());
})(lambda1)
