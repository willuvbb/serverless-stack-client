const config = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "wlc-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://29vx49mmma.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_8WSBxRhzM",
      APP_CLIENT_ID: "5j5a36mefl90ej0562upplq8lk",
      IDENTITY_POOL_ID: "us-east-2:36b76452-1e5b-44c0-a89c-ffdb0998a6ef",
    },
  };

  export default config;