export const formValidation = (email, password) => {
    const emailValid = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(email)

    const passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)



    if (!emailValid) return "Email is not valid"
    if (!passValid) return "Password not valid"


    return null;

}

// firebase login
// firebase init
// firebase deploy