import api from "@/api";
export default {
  getAtividades: () => {
    return api.get("/atividades-complementares");
  },
  addAtividade: (obj) => {
    return api.post("/atividades-complementares", obj);
  },
  removeAtividade: (id) => {
    var url = "/atividades-complementares";
    url = url.concat("/" + id);
    return api.delete(url);
  },
  findAtividade: async (id) => {
    var url = "/atividades-complementares/";
    url = url.concat(id);
    var atividade = await api.get(url);
    url = `/eventos/?idAtividade=` + id;
    var eventos = await api.get(url);
    var obj = {
      atividade: atividade.data,
      eventos: eventos.data,
    };
    return obj;
  },
  addEvento: (obj, id) => {
    var url = `/eventos/?idAtividade=` + id;
    return api.post(url, obj);
  },
  getFotos(id) {
    var url = `/fotos/?idEvento=` + id;
    return api.get(url);
  },
  addFoto: (obj, id) => {
    var url = `/fotos/?idEvento=` + id;
    return api.post(url, obj);
  },
  deleteFoto: (id) => {
    var url = `/fotos/` + id;
    return api.delete(url);
  },
  deleteEvento: (id) => {
    var url = `/eventos/` + id;
    return api.delete(url);
  },
};
