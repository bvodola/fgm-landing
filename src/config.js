const config = {
  BACKEND_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://sistema-fgm.herokuapp.com",
  SYSTEM_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://sistema.fgmdasorte.com.br",
};

export default config;
