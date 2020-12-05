import api from "@/api";
export default {
  getProjetos: () => {
    return api.get("/projetos-extensao");
  },
  addProjeto: (obj) => {
    return api.post("/projetos-extensao", obj);
  },
  removeProjeto: (id) => {
    var url = "/projetos-extensao";
    url = url.concat("/" + id);
    console.log(url);
    return api.delete(url);
  },
  findProjeto: async (id) => {
    var url = `/projetos-extensao/` + id;
    return api.get(url);
  },
};
