import api from "@/api";
export default {
  getIcs: () => {
    return api.post("/iniciacao-cientifica-get");
  },
  addIc: (obj) => {
    return api.post("/iniciacao-cientifica-add", obj);
  },
  removeIc: (obj) => {
    return api.post("/iniciacao-cientifica-remove", { data: obj });
  },
};
