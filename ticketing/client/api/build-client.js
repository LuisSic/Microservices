import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
    // we are on the server
  } else {
    return axios.create({
      baseURL: '/',
    });
    // we are on the browser
  }
};
