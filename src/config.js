const config = {
  BACKEND_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:80"
      : "https://intense-thicket-75118.herokuapp.com"
};

export default config;
