const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1hlft4ysn16oo"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://aoi31y7m3h.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_0qhqJjpob",
    APP_CLIENT_ID: "hpsifmd3vnbrau5tjc7mt8gh",
    IDENTITY_POOL_ID: "us-east-1:295db5de-d40a-48eb-8ea3-695a064296b3"
  },
  STRIPE_KEY: "pk_test_HxdPOouDQueatnVtcE0sTITW00IzSBY3H1"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-bup3wv2citdm"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ryz5am6wb8.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_O6H7j5gHj",
    APP_CLIENT_ID: "2jhvk9neii9sfp9h6kulsovsa8",
    IDENTITY_POOL_ID: "us-east-1:c6734605-cef1-45c3-8b51-d0244913b50f"
  },
  STRIPE_KEY: "pk_test_HxdPOouDQueatnVtcE0sTITW00IzSBY3H1"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
