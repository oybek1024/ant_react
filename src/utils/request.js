import { extend } from 'umi-request';
import { notification } from 'antd';
import router from 'umi/router';

const codeMessage = {
  200: 'Success',
  201: 'Created',
  202: 'Accepted',
  204: 'No Content',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  406: 'Not Acceptable',
  410: 'Gone',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

const errorHandler = error => {
  const { response = {} } = error;
  const errortext = codeMessage[response.status] || response.statusText;
  const { status, url } = response;

  if (status === 401) {
    notification.error({
      message: 'Access Denied',
    });
    /* eslint-disable no-underscore-dangle */
    window.g_app._store.dispatch({
      type: 'login/logout',
    });
    return;
  }
  notification.error({
    message: `Error - ${status}: ${url}`,
    description: errortext,
  });
  // environment should not be used
  if (status === 403) {
    router.push('/exception/403');
    return;
  }
  if (status <= 504 && status >= 500) {
    router.push('/exception/500');
    return;
  }
  if (status >= 404 && status < 422) {
    router.push('/exception/404');
  }
};

const request = extend({
  errorHandler,
  credentials: 'include',
});

export default request;
