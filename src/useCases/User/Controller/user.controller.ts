import { createUser, getUser, setBanner, setRole } from "../Repository/user.repository";

// This method will get the user data
export const get = async (userid: string) => {

    // Getting the user from the database
    let user = await getUser(userid);

    // If the user doesn't exist, create a new one
    if(!user) {
        const createdUser = await createUser(userid);
        user = createdUser;
    }

    return user;
}

// This method will set the banner of the user
export const setbanner = async (userid: string, banner: string) => {

    // Getting the user from the database
    let user = await getUser(userid);
    
    // If the user doesn't exist, create a new one
    if(!user) {
        const createdUser = await createUser(userid);
        user = createdUser;
    }

    // Setting the banner
    setBanner(userid, banner)
}

// This method will set the role of the user
export const setrole = async (userid: string, role: string) => {
    let user = await getUser(userid);

    // If the user doesn't exist, create a new one
    if(!user) {
        const createdUser = await createUser(userid);
        user = createdUser;
    }

    // Setting the role
    setRole(userid, role)
}