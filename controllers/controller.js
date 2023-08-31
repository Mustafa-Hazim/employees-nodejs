import { users } from "../models/User.js";


export const getUsers = (req, res) => {
    return res.send(users)
}