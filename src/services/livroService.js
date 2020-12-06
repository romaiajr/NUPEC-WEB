import api from "@/api";
export default {
  getLivros: () => {
    return api.post("/livros-get");
  },
  addLivro: (obj) => {
    return api.post("/livros-add", obj);
  },
  removeLivro: (obj) => {
    return api.post("/livros-remove", { data: obj });
  },
};
