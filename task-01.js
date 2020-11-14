import  users  from "./users.js"
console.log(users);

// task-01
const getUserNames = users => users.map(user =>  user.name);
console.log(getUserNames(users));

//task-02
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//task-03
const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender);
console.table(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//task-04
const getInactiveUsers = users => users.filter(user => !user.isActive )
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//task-05
const getUserWithEmail = (users, email) => users.find(user => user.email === email)
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//task-06
const getUsersWithAge = (users, min, max) => users.filter(user => user.age > min && user.age < max);
console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//task-07
const calculateTotalBalance = users => users.reduce((acc, user) => acc + user.balance, 0 )
console.log(calculateTotalBalance(users)); // 20916



//task-08
const getUsersWithFriend = (users, friendName) => users.reduce((acc, user) => { if (user.friends.includes(friendName)) { acc.push(user.name) } return acc } , [])
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//task-09
const getNamesSortedByFriendsCount = users => (users
    .slice()
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name));
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


//task-10
const getSortedUniqueSkills = users => users.reduce((allSkills, user) => {
    if (!allSkills.includes(user.skills)) {
    allSkills.push(...user.skills)}

    return allSkills.sort()
}, [])
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
