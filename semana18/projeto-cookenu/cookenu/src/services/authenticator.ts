import * as jwt from "jsonwebtoken";
import { config } from "dotenv"

config()

export type authenticationData = {
   id: string
};

export function generateToken(payload: authenticationData): string {

   return jwt.sign(
      payload,
      process.env.JWT_KEY!,
      {
         expiresIn: "12h"
      });
}

export function getTokenData(token: string): authenticationData {

   const result: authenticationData = jwt.verify(
      token,
      process.env.JWT_KEY!
   ) as authenticationData;

   return result;
}

export const getData = (token: string): authenticationData => {
  const {id} = jwt.verify(token, process.env.JWT_KEY as string) as any
  return {
    id
  }
}