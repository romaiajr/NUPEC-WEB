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
  findProjeto: async (id) => {
    return api.post("/projetos-getOne", { data: id });
  },
};
