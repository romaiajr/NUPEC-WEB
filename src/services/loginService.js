import api from "@/api";
export default {
  getLogin: (obj) => {
    return api.post("/login", obj);
  },
};
