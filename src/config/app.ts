type Config = {
  isProd: boolean;
  production: {
    api_endpoint: string;
  };
  development: {
    api_endpoint: string;
  };
};
const config: Config = {
  isProd: process.env.NODE_ENV === "production",
  production: {
    api_endpoint: process.env.REACT_APP_API_URL || "",
  },
  development: {
    api_endpoint: process.env.REACT_APP_API_URL || "",
  },
};

export default config;
