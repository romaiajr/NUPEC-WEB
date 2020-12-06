import api from "@/api";
export default {
  getCapitulos: () => {
    return api.post("/capitulos-get");
  },
  addCapitulo: (obj) => {
    return api.post("/capitulos-add", obj);
  },
  removeCapitulo: (obj) => {
    return api.post("/capitulos-remove", { data: obj });
  },
};
