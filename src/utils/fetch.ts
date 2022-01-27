import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

const fnRest = async (method: string, url: string, requestBody: any): Promise<any> => {
  const axiosConfig: AxiosRequestConfig = {
    method: fnCheckHTTPMethod(method),
    url: url,
    data: requestBody
  };

  try {
    const response: AxiosResponse<any> = await axios.request(axiosConfig);

    return response;

  } catch (error) {

  }

}

const fnCheckHTTPMethod = (method: string) => {
  let httpMethod: Method;
  switch (method) {
    case 'GET':
    case 'get':
      httpMethod = 'GET';
      break;
    case 'POST':
    case 'post':
      httpMethod = 'POST';
      break;
    case 'PUT':
    case 'put':
      httpMethod = 'PUT';
      break;
    case 'PATCH':
    case 'patch':
      httpMethod = 'PATCH';
      break;
    case 'DELETE':
    case 'delete':
      httpMethod = 'DELETE';
      break;
    default:
      httpMethod = 'GET';
  }
  return httpMethod;
};

export default fnRest;