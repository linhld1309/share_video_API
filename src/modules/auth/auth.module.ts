import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";
import { AuthLoginService } from "./services/auth-login.service";
import { AuthSignupService } from "./services/auth-signup.service";
import { FirebaseAuthStrategy } from "./firebase-auth.strategy";

@Module({
  imports: [PassportModule],
  providers: [
    AuthSignupService,
    AuthLoginService,
    AuthResolver,
    FirebaseAuthStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
