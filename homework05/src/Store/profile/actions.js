import { SHOW_USER_INFO } from "./constants"
import { CHANGE_USER_STATUS } from "./constants"

export const toggleUserInfo = () => ({
    type: SHOW_USER_INFO
})

export const toggleUserStatus = () => ({
    type: CHANGE_USER_STATUS
})