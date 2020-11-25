import api from "@/api";
export default {
  getArtigos: () => {
    return api.get("/artigos");
  },
};
