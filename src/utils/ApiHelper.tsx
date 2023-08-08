import { APICaller } from './ApiCaller';

// make a api helper function to re-usability of the code

export const APIHelper = {
  getUserListApi: async () => {
    const json = await APICaller(
      '1540711f-d08f-47dd-b085-5087669e9e04',
      'GET',
      '',
      '',
      ''
    );
    return json;
  },
};
