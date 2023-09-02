import { users } from "../models/User.js";


export const getUsers = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return res.send(users)
}

export const getUsersSalaryMoreThan = (req,res) => {
    if(!req.query.than){return res.status(400).send("need the value")}
    const target = users.filter(user => {
       return user.salary >= parseInt(req.query.than)
    })
    return res.send(target)
}
export const getUsersSalaryLessThan = (req,res) => {
    if(!req.query.than){return res.status(400).send("need the value")}
    const target = users.filter(user => {
       return user.salary <= parseInt(req.query.than)
    })
    return res.send(target)
}

export const searchNameAndEmail = (req, res) => {
    if(!req.query.v) {return res.status(400).send("need the value")}
    const target  = users.filter(value => {
        console.log(value)
        if(value.fname.toUpperCase().search(req.query.v.toUpperCase()) != -1){return value}
        if(value.lname.toUpperCase().search(req.query.v.toUpperCase()) != -1){return value}
        if(value.email.toUpperCase().search(req.query.v.toUpperCase()) != -1){return value}
    })
    res.send(target)
}
export const searchJob = (req, res) => {
    if(!req.query.v) {return res.status(400).send("need the value")}
    const target  = users.filter(value => {
        if(value.jobTitle.toUpperCase().search(req.query.v.toUpperCase()) != -1){return value}
    })
    res.send(target)
}
export const searchCountry = (req, res) => {
    if(!req.query.v) {return res.status(400).send("need the value")}
    const target  = users.filter(value => {
        if(value.country.toUpperCase().search(req.query.v.toUpperCase()) != -1){return value}
    })
    res.send(target)
}

export const byBirthDay = (req, res) => {
    if(!req.query.year){return res.status(400).send('value is required')}
    const year = parseInt(req.query.year)
    const month = parseInt(req.query.month)-1
    const day = parseInt(req.query.day)

    const result = []

    users.filter(user => {
        const date = new Date(user.age)
        if(date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) result.push(user)
    })
    
    res.send(result)

}