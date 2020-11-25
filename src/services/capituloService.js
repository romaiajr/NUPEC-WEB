import api from "@/api";
export default {
  getCapitulos: () => {
    return api.get("/capitulos");
  },
  addCapitulo: (obj) => {
    return api.post("/capitulos", obj);
  },
  removeCapitulo: (id) => {
    var url = "/capitulos";
    url = url.concat("/" + id);
    return api.delete(url);
  },
};
