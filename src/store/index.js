import { configureStore } from "@reduxjs/toolkit";
import ipInfoReduser from "./ipInfoSlice";

export default configureStore({
  reducer: {
    ipInfo: ipInfoReduser,
  },
});
