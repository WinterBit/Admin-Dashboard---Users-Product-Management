export async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    if(!response.ok){
        throw new Error("Failed to fetch Users!")
    }

    return data;
}