const endPoint = "http://localhost:8083/api/web";
export const API = {
  getAPI: (type) => `${endPoint}/${type}`,
};
