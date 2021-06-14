export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type userData = {
    // id: string,
    email: string,
    name: string,
    password: string,
    role: USER_ROLES
}

export type user = userData & {id: string}