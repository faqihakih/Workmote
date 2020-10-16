export const fetchUsers = async () => {
    const users = await fetch("http://jsonplaceholder.typicode.com/users").then(res => res.json()).catch(err => {
        console.log(err)
        return []
    })
    return users

}