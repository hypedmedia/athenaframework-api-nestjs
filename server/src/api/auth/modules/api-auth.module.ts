import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { BasicStrategy } from "../strategy/api-auth.strategy";

@Module({
    imports: [PassportModule, ConfigModule],
    providers: [BasicStrategy],
    exports: [],
})
export class AuthModule {}