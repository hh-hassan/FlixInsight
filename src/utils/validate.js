export const checkValidEmail = (email, password) => {
    
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    
    if(!isEmailValid) return "Please enter a valid email address.";

    return null;
}

export const checkValidPassword = (password) => {
    
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isPasswordValid) return "Invalid password.";

    return null;
}

export const checkValidNumber = (number) => {

    const isNumberValid = /^(0|91)?[6-9][0-9]{9}$/.test(number);

    if(!isNumberValid) return "Incorrect phone number.";

    return null;
}