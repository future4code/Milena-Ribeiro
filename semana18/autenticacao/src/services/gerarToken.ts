import * as jwt from "jsonwebtoken";

export type AuthenticationData = {id: string}

export function gerarToken(payload: AuthenticationData): string {
  return jwt.sign(
    payload,
    process.env.JWT_KEY as string,
  {
    expiresIn: "1m"
  })
}

export function getTokenData(token: string): AuthenticationData {
  const result: AuthenticationData = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData

    return result
}