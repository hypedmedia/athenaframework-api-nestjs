import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";

export type AuthenticationDocument = Authentication & Document;

@Schema({ collection: "athena-api", autoCreate: true })
export class Authentication {
    @Prop({ type: SchemaTypes.String }) 
    username: string;

    @Prop({ type: SchemaTypes.String })
    password: string;
}
export const AuthenticationSchema = SchemaFactory.createForClass(Authentication);
