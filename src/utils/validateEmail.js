export const validateEmail = (email,pass) =>{
    const emailValidity = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValidity = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(pass);

    if(!emailValidity) return "Email format is not valid"
    if(!passwordValidity) return "Password format is not valid"
    return "Success";
}
