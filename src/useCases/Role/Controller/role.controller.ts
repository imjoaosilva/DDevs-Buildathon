import { createRole, getRole } from "../Repository/role.repository"

// This method will create and get the role data
export const create = async (name: string, icons: string) => {

    // Getting the role from the database
    const getrole = await getRole(name);

    // If the role exists, return false
    if(getrole) return false

    const role = await createRole(name, icons);
    return role;
}

// This method will get the role data
export const get = async (name: string) => {
    
    // Getting the role from the database
    const role = await getRole(name);

    return role;
}

