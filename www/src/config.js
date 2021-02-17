// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  // CognitoClientID:
  "aws_user_pools_web_client_id": "522oj2a4vmahns12hqskla3m6",
  // TodoFunctionApi:
  "api_base_url": "https://i2u2t5pqme.execute-api.eu-central-1.amazonaws.com/{StageNameParam}",
  // CognitoDomainName:
  "cognito_hosted_domain": "mytodoappdemo-mb-test-lambda.auth.eu-central-1.amazoncognito.com",
  // AmplifyURL:
  "redirect_url": "https://master.d2xrfj1xajhtgt.amplifyapp.com"
};

export default config;
