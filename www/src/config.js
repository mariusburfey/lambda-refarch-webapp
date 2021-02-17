// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  // CognitoClientID:
  "aws_user_pools_web_client_id": "6rgf4ernuq88k1dud060ce78p5",
  // TodoFunctionApi:
  "api_base_url": "https://nvi9tg8gjc.execute-api.eu-central-1.amazonaws.com/{StageNameParam}",
  // CognitoDomainName:
  "cognito_hosted_domain": "mytodoappdemo-mb-test-lambda.auth.eu-central-1.amazoncognito.com",
  // AmplifyURL:
  "redirect_url": "https://master.d1kianoffwvmyw.amplifyapp.com"
};

export default config;
