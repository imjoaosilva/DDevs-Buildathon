import prisma from "../../../services/prismaClient.service";

// This function will create a new user
export const createUser = async (userid: string) => {

    // Creating a new user
    const user = await prisma.user.create({
        data: {
            userid
        }
    });

    return user;
}

// This method will get the user data
export const getUser = async (userid: string) => {

    // Getting the user from the database
    const user = await prisma.user.findUnique({
        where: {
            userid
        }
    });

    return user;
}

// This method will set the banner of the user
export const setBanner = async (userid: string, banner: string) => {

    // Setting the banner
    await prisma.user.update({
        where: {
            userid
        },
        data: {
            banner
        }
    });
}   