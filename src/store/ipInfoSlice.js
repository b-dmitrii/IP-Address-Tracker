import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadData = createAsyncThunk(
  "ipInfo/loadData",
  async (currentIp) => {
    return axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_xYl43EGkQ9omU8Zg9JZ61SxMOlUBy&domain=${currentIp}&ipAddress'=${currentIp}`
      )
      .then(({ data }) => {
        return data;
      });
  }
);

const IpInfo = createSlice({
  name: "info",
  initialState: {
    data: {},
    status: "",
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },

  extraReducers: {
    [loadData.pending]: (state) => {
      state.status = "loading";
    },
    [loadData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
  },
});

export const { setSearch } = IpInfo.actions;

export default IpInfo.reducer;
