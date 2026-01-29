export async function fetchUsers({ signal } = {}) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });
    const data = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch Users!")
    }

    return data;
}

export async function fetchUsersByID(id, { signal } = {}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{signal});
    const data = await response.json();

    if (!response.ok) {
        throw new Error(`Failed to fetch User with id ${id}!`);
    }
    return data
}