// export enum USER_ROLES{
//    NORMAL = "NORMAL",
//    ADMIN = "ADMIN"
// }

export type user = {
   id: string
   email: string
   password: string
   name: string
   // role: USER_ROLES
}

export type recipe = {
   id: string
   title: string
   description: string
}
