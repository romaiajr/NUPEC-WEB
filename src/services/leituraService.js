import api from "@/api";
export default {
  getLeituras: () => {
    return api.post("/leituras-get");
  },
  addLeitura: (obj) => {
    return api.post("/leituras-add", obj);
  },
  removeLeitura: (obj) => {
    return api.post("/leituras-remove", { data: obj });
  },
};
