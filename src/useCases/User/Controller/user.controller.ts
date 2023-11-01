import { createUser, getUser, setBanner } from "../Repository/user.repository";

// This method will get the user data
export const getUserData = async (userid: string) => {

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
export const setUserBanner = async (userid: string, banner: string) => {

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