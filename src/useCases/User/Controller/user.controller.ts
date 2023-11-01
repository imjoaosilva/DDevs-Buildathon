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

export const setUserBanner = async (userid: string, banner: string) => {
    let user = await getUser(userid);
    
    if(!user) {
        const createdUser = await createUser(userid);
        user = createdUser;
    }

    setBanner(userid, banner)
}