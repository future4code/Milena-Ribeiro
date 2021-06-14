// import { connection } from "./connection";

// export const createUser = async (
//     id: string,
//     email: string,
//     name: string,
//     password: string,
// 	role: string //opcional criar ENUM
//   ): Promise<void> => {
//     try {
//       await connection('User_Arq')
//         .insert({
//           id,
//           email,
//           name,
//           password,
// 					role
//         })
//         .into(User_Arq);
//     } catch (error) {
//       throw new Error(error.sqlMessage || error.message);
//     }
//   }