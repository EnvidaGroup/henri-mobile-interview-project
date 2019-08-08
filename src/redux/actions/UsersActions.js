import { FETCH_USERS_SUCCESS } from '../types/UsersTypes'

export const fetchUsersSuccess = payload => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload
  }
}
