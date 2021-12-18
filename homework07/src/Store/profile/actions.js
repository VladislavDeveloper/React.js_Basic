import { CHANGE_USER_NAME } from "./constants"

export const changeUserName = (payload) => ({
  type: CHANGE_USER_NAME,
  payload,   
})