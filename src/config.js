export default {
    ENDPOINT:
      process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_ENDPOINT
        : 'http://localhost:8080/',
  };