import api from "@/api";
export default {
  getCapitulos: () => {
    return api.get("/capitulos");
  },
};
