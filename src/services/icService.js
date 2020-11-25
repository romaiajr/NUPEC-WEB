import api from "@/api";
export default {
  getIcs: () => {
    return api.get("/iniciacao_cientifica");
  },
};
