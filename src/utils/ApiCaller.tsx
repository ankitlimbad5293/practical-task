import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// make a helper function to re-usability of the code

const APICaller = async (
  endPoint: string,
  method: string,
  token: string | null,
  body: any,
  params: string = ''
): Promise<AxiosResponse | AxiosError> => {
  const url = 'https://run.mocky.io/v3/' + endPoint; // use static baseurl but it will be comes from .env file when working on product
  const headers: any = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `${token}`;
  }

  //Axios configuration
  const axiosConfig: AxiosRequestConfig = {
    method: method || 'get',
    url: url,
    data: body,
    headers: headers,
    timeout: 35000,
    responseType: 'json',
    params: params,
  };

  // to delete body/params if gets blank
  if (body === '') {
    delete axiosConfig.data;
  }

  if (params === '') {
    delete axiosConfig.params;
  }

  const response = await axios(axiosConfig);
  return response;
};

export { APICaller };
