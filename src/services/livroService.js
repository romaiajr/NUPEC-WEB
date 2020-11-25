import api from "@/api";
export default {
  getLivros: () => {
    return api.get("/livros");
  },
  addLivro: (obj) => {
    return api.post("/livros", obj);
  },
  removeLivro: (id) => {
    var url = "/livros";
    url = url.concat("/" + id);
    return api.delete(url);
  },
};
