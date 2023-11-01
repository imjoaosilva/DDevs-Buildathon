import prisma from "../../../services/prismaClient.service";

// This function will create a new user
export const createUser = async (userid: string) => {

    // Creating a new user
    const user = await prisma.user.create({
        data: {
            userid,
        },
        include: {
            roles: true
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
        },
        include: {
            roles: true
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

export const setRole = async (userid: string, role: string) => {

    // Getting the role from the database
    const getrole = await prisma.role.findUnique({
        where: {
            name: role
        }
    });   

    // If the role doesn't exist, return false
    if(!getrole) return false;

    // Setting the role
    await prisma.user.update({
        where: {
            userid
        },
        data: {
            roles: {
                connect: {
                    id: getrole.id
                }
            }
        }
    });

    return true

}