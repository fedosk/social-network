import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY": "0cacf017-a2b3-4867-b5f3-0ddb61c5eaf8"
        }

    }
)

export const useresAPI = {
    getUsers(currentPage: any, pageSize: any) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    followUser(id: any) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUser(id: any) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

