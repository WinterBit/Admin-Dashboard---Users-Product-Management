const admin = {
    "name":"Admin",
    "email":"admin@test.com",
    "password":"admin123"
}

export function Authenticate(form){
    if((form.email === admin.email) && (form.password === admin.password)) return admin

    return {}
}