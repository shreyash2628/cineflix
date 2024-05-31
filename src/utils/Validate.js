
export const Validate = (email, password) => {
    const isEmailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValidate) return "Invalid Email-Id";
    if (!isPasswordValidate) return "Invalid Password";

    return null;
}

