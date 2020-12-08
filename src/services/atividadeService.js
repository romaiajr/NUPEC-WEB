import api from "@/api";
export default {
  getAtividades: () => {
    return api.post("/atividade-complementar-get");
  },
  addAtividade: (obj) => {
    return api.post("/atividade-complementar-add", obj);
  },
  removeAtividade: (obj) => {
    return api.post("/atividade-complementar-remove", { data: obj });
  },
  findAtividade: async (id) => {
    console.log("entrou");
    var atividade = await api.post("/atividade-complementar-getOne", {
      data: id,
    });
    var eventos = await api.post("/eventos-get", { data: id });
    var obj = {
      atividade: atividade.data,
      eventos: eventos.data,
    };
    return obj;
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
