const admin = {
    "name": "Admin",
    "email": "admin@test.com",
    "password": "admin123"
}

export const Products = [
    { id: 1, name: "Laptop", price: 94990, stock: 17 },
    { id: 2, name: "Smartphone", price: 26999, stock: 34 },
    { id: 3, name: "Headphones", price: 2999, stock: 55 },
    { id: 4, name: "Keyboard", price: 1286, stock: 40 },
    { id: 5, name: "Mouse", price: 798, stock: 63 },
    { id: 6, name: "Monitor", price: 12999, stock: 27 },
    { id: 7, name: "Printer", price: 3365, stock: 12 },
    { id: 8, name: "Webcam", price: 699, stock: 25 },
    { id: 9, name: "Speaker", price: 1399, stock: 39 },
    { id: 10, name: "USB Drive", price: 745, stock: 100 }
];


export function Authenticate(form) {
    if ((form.email === admin.email) && (form.password === admin.password)) {
        localStorage.setItem("products", JSON.stringify(Products))
        return admin
    }

    return {}
}