// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  // CognitoClientID:
  "aws_user_pools_web_client_id": "55paasin18fnr4g7rghlrnlro3",
  // TodoFunctionApi:
  "api_base_url": "https://coy2vm1xm6.execute-api.eu-central-1.amazonaws.com/prod",
  // CognitoDomainName:
  "cognito_hosted_domain": "mytodoappdemo-mb-test-lambda.auth.eu-central-1.amazoncognito.com",
  // AmplifyURL:
  "redirect_url": "https://master.d30c30sut0tdpe.amplifyapp.com"
};

export default config;
