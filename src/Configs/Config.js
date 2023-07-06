
export const config = () => {
  if (process.env.NODE_ENV == "development") {
    return 'http://localhost:8080';
  } else {
    return 'https://dropmore-api.onrender.com';
  }
};
