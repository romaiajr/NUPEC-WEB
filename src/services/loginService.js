import api from "@/api";
export default {
  getLogin: () => {
    return api.post("/login");
  },
};
