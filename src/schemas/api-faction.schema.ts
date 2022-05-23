import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";
import { COLLECTIONS } from "src/config";

export type FactionDocument = Faction & Document; 
@Schema({ collection: COLLECTIONS.factions, autoCreate: false })
export class Faction {
    @Prop({ type: SchemaTypes.ObjectId })
    _id: string;

    @Prop({ type: SchemaTypes.Number })
    bank: number;

    @Prop({ type: SchemaTypes.Boolean })
    canDisband: boolean;

    @Prop({ type: SchemaTypes.String })
    name: string;

    @Prop({ type: SchemaTypes.Mixed })
    members: Object;

    @Prop({ type: SchemaTypes.Array })
    ranks: Array<{}>;

    @Prop({ type: SchemaTypes.Array })
    vehicles: Array<{}>;

    @Prop({ type: SchemaTypes.Array })
    storage: Array<{}>;

    @Prop({ type: SchemaTypes.Mixed })
    actions: Object;

    @Prop({ type: SchemaTypes.Mixed })
    tickActions: Array<{}>;

    @Prop({ type: SchemaTypes.Mixed })
    settings: { vehicles: any };
}
export const FactionSchema = SchemaFactory.createForClass(Faction);