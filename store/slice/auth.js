import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../API/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getTime from "date-fns/getTime";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    idToken: null,
    expiresIn: null,
    localId: null,
    refreshToken: null,
    createdAt: null,
  },
  reducers: {
    setAuthUser(state, action) {
      state = action.payload;
    },
  },
});

export const { setAuthUser } = authSlice.actions;

export const signUser = (data, mehtod) => async (dispatch) => {
  const methodAPI = authAPI[mehtod];
  try {
    const response = await methodAPI(data);
    const { idToken, expiresIn, localId, refreshToken } = response.data;
    const responseData = {
      idToken,
      expiresIn,
      localId,
      refreshToken,
      createdAt: getTime(new Date()),
    };

    await AsyncStorage.setItem("user", JSON.stringify(responseData));
    response.data && dispatch(setAuthUser(responseData));
    refreshTokenThunk(expiresIn * 1000 - 5000);
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const refreshTokenThunk =
  (expirationTime, refereshNow) => async (dispatch, getState) => {
    const refreshToken = getState().auth.refreshToken;

    const sendRefreshToken = async () => {
      const response = await authAPI.refreshToken({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      });
      console.log(response, "|||", `refresh token`);

      const { id_token, expires_in, user_id, refresh_token } = response.data;
      const responseData = {
        idToken: id_token,
        expiresIn: expires_in,
        localId: user_id,
        refreshToken: refresh_token,
      };

      await AsyncStorage.setItem("user", JSON.stringify(responseData));
      response.data && dispatch(setAuthUser(responseData));
      refreshTokenThunk(expires_in * 1000 - 5000);
    };

    refereshNow
      ? sendRefreshToken
      : setTimeout(sendRefreshToken, expirationTime);
  };
export default authSlice.reducer;
