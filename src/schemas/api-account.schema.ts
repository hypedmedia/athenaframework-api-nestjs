import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { COLLECTIONS } from 'src/config';

export type AccountDocument = Account & Document;

@Schema({ collection: COLLECTIONS.accounts, autoCreate: false })
export class Account {
    @Prop({ type: SchemaTypes.String })
    _id: string;

    @Prop({ type: SchemaTypes.Array })
    ips: Array<{}>;

    @Prop({ type: SchemaTypes.Array })
    hardware: Array<{}>;

    @Prop({ type: SchemaTypes.String })
    discord: string;

    @Prop({ type: SchemaTypes.Number })
    lastLogin: Date;

    @Prop({ type: SchemaTypes.Number })
    permissionLevel: number;

    @Prop({ type: SchemaTypes.Number })
    id: number;

    @Prop({ type: SchemaTypes.String })
    email: string;

    @Prop({ type: SchemaTypes.String })
    quickToken: string;

    @Prop({ type: SchemaTypes.String })
    quickTokenExpiration: Date;
}
export const AccountSchema = SchemaFactory.createForClass(Account);
