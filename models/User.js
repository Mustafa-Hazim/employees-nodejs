import faker from 'faker'

// create salarys range
const salary = range(3000,4000)
// initail users array
export const users = []


// populate the users in the users Array
for (let index = 1; index < 51; index++) {
    const user = {
        id: index,
        fname: faker.name.firstName(), 
        lname: faker.name.lastName(),
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        age: faker.date.between('1950/01/01','2000/01/01'),
        country: faker.address.country(),
        rigesterdSince: faker.date.between('2015/01/01','2023/09/01'),
        avatar: getColor(),
        salary: salary[Math.floor(Math.random() * salary.length)]
    }
    
    users.push(user)
}


function getColor () {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

