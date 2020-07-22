const { default: axiosClient } = require("./axiosClient");

const userApi = {
  getAll: (params) => {
    const url = '/users';
    return axiosClient.get(url, {params}); 
  },
  
  getById: (id) => {
    const url = `/get/${id}`;
    return axiosClient.get(url);
  },

  
}

export default userApi;