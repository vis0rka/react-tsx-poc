import fetchIntercept from "fetch-intercept";
import nprogress from "nprogress";

fetchIntercept.register({
  request: (url, config) => {
    nprogress.start();
    return [url, config];
  },

  response: response => {
    nprogress.done();
    return response;
  }
});
