import api from "@/api";
export default {
  getProjetos: () => {
    return api.post("/projetos-get");
  },
  addProjeto: (obj) => {
    return api.post("/projetos-add", obj);
  },
  removeProjeto: (id) => {
    return api.post("/projetos-remove", { data: id });
  },
  findProjeto: (id) => {
    return api.post("/projetos-getOne", { data: id });
  },
  addProducao: (obj) => {
    return api.post("/producao-add", obj);
  },
  getProducao: (obj) => {
    return api.post("/producao-get", { data: obj });
  },
  removeProducao: (id) => {
    return api.post("/producao-remove", { data: id });
  },
  getEvento: (id) => {
    return api.post("/eventos-getProj", { data: id });
  },
  addEvento: (obj) => {
    return api.post("/eventos-add", obj);
  },
  deleteEvento: (obj) => {
    console.log(obj);
    return api.post("/eventos-remove", { data: obj });
  },
  getFotos(obj) {
    return api.post("/fotos-get", { data: obj });
  },
  addFoto: (obj) => {
    return api.post("/fotos-add", obj);
  },
  deleteFoto: (obj) => {
    return api.post("/fotos-remove", { data: obj });
  },
};
