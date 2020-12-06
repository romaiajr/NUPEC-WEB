import api from "@/api";
export default {
  getEquipe: () => {
    return api.post("/equipe-get");
  },
  addEquipe: (obj) => {
    return api.post("/equipe-add", obj);
  },
  removeEquipe: (obj) => {
    return api.post("/equipe-remove", { data: obj });
  },
};
