import prisma from "../../../services/prismaClient.service";

// This function will get the role data
export const getRole = async (rolename: string) => {

    // Getting the role from the database
    const role = await prisma.role.findUnique({
        where: {
            name: rolename
        }
    });

    return role;
}

// This function will create a new role
export const createRole = async (rolename: string, roleicon: string) => {

    // Creating a new role
    const role = await prisma.role.create({
        data: {
            name: rolename,
            icon: roleicon
        }
    });
    return role;
}