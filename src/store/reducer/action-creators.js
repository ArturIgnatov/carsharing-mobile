import { CHANGE_CITY, CHANGE_POINT, SET_CONFIRM_CITY, SET_CHOOSE_CAR } from "./types";

export const setCityState = (value, name) => ({ type: CHANGE_CITY, value, name })
export const confirmCity = (city) => ({ type: SET_CONFIRM_CITY, city})
export const setPointState = (value, name) => ({ type: CHANGE_POINT, value, name})