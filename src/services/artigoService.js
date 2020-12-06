import api from "@/api";
export default {
  getArtigos: () => {
    return api.post("/artigos-get");
  },
  addArtigo: (obj) => {
    return api.post("/artigos-add", obj);
  },
  removeArtigo: (obj) => {
    return api.post("/artigos-remove", { data: obj });
  },
};
