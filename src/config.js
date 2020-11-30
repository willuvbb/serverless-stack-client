const dev = {
  STRIPE_KEY: "pk_test_51HrTHoK1ZU9xHQvdpKJToz4p27nLIK3lV2fnxImywTya7e32fREU3LDwrDe2NmCcZhFqjAfTwUC24bGg5eY8Basi007OJXs5YJ",
  s3: {
    REGION: "us-east-2",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1uep0tm4rko5d"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://36wnm0ovbf.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_nJdp3veaY",
    APP_CLIENT_ID: "7oe5d0cib1tmenqgvntk0u1b2i",
    IDENTITY_POOL_ID: "us-east-2:22ed2bb6-aac4-4a96-b209-07e97f0c0cd9"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HrTHoK1ZU9xHQvdpKJToz4p27nLIK3lV2fnxImywTya7e32fREU3LDwrDe2NmCcZhFqjAfTwUC24bGg5eY8Basi007OJXs5YJ",
  s3: {
    REGION: "us-east-2",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1nneykwkaflnu"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://29vx49mmma.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_mPAyAPyjy",
    APP_CLIENT_ID: "dbd76cb76koeqpfi4cb9lnnhh",
    IDENTITY_POOL_ID: "us-east-2:528e3d1a-717f-404e-b4c9-d6996f65a215"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
