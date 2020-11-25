import api from "@/api";
export default {
  getArtigos: () => {
    return api.get("/artigos");
  },
  addArtigo: (obj) => {
    return api.post("/artigos", obj);
  },
  removeArtigo: (id) => {
    var url = "/artigos";
    url = url.concat("/" + id);
    console.log(url);
    return api.delete(url);
  },
};
