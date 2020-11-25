import api from "@/api";
export default {
  getIcs: () => {
    return api.get("/iniciacao_cientifica");
  },
  addIc: (obj) => {
    return api.post("/iniciacao_cientifica", obj);
  },
  removeIc: (id) => {
    var url = "/iniciacao_cientifica";
    url = url.concat("/" + id);
    return api.delete(url);
  },
};
