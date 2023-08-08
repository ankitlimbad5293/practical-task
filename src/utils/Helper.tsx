//  make a common helper file to check response we can add multiple function which will be use multiple time
export const Helper = {
  responseSuccess(json: any): boolean {
    if (json.status && json.status === 200) {
      return true;
    }
    return false;
  },
};
