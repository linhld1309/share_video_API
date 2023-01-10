import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthLoginService {
  async login(userId: string, email: string) {
    return { userId: userId, email: email }
  }
}
