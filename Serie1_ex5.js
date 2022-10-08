export function checkUsersValid(goodUsers){
    return function(usersToCheck){
        const idArr = goodUsers.map(u => u.id)
        return usersToCheck.every(u => idArr.includes(u.id))
    }
}