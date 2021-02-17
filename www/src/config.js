// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  // CognitoClientID:
  "aws_user_pools_web_client_id": "3frp8hrloj4uao84bdb7mk2o6r",
  // TodoFunctionApi:
  "api_base_url": "https://7apsl3qgfj.execute-api.eu-central-1.amazonaws.com/prod",
  // CognitoDomainName:
  "cognito_hosted_domain": "mytodoappdemo-mb-test-lambda.auth.eu-central-1.amazoncognito.com",
  // AmplifyURL:
  "redirect_url": "https://master.d2p4dbi1x0a0hd.amplifyapp.com"
};

export default config;
