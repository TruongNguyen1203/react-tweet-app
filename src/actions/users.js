export const RECEIVE_USERS = "RECEVIE_USERS"

export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}