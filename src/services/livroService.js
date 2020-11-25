import api from "@/api";
export default {
  getLivros: () => {
    return api.get("/livros");
  },
};
