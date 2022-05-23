import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";
import { COLLECTIONS } from "src/config";

export type StorageDocument = Storage & Document;

@Schema({ collection: COLLECTIONS.storages, autoCreate: false })
export class Storage {
    @Prop({ type: SchemaTypes.Array })
    items: Array<{}>;
}

export const StorageSchema = SchemaFactory.createForClass(Storage);