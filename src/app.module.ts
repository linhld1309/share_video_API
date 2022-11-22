import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { FirebaseModule } from "@/libs/firebase/firebase.module";
import { AuthModule } from "@/modules/auth/auth.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true
    }),
    FirebaseModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
