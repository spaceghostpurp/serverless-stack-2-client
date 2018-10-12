const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1bfd4yz9gpd0c"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.securecloudappx.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ArEVU02Le",
    APP_CLIENT_ID: "379jm03f5kk2p1ht784qc61n53",
    IDENTITY_POOL_ID: "us-east-1:64cde550-bfd5-4357-ab13-ae107694238a"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-10p9o45s5xjop"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://prodapi.securecloudappx.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_S19Wezj3Q",
    APP_CLIENT_ID: "7nni98p68pbgst9l80s5epevdb",
    IDENTITY_POOL_ID: "us-east-1:934497d7-9716-4ba7-820a-4c2744cfe3c4"
  }
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
