import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Apartment } from "../apartment/apartment.entity";
import { RentReceipt } from "../rent-receipt/rent-receipt.entity";


@ObjectType()
export class Tenant {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Apartment)
  apartment: Apartment;

  @Field()
  isMainTenant: boolean;

  @Field(() => [RentReceipt]) // Ajoutez la relation avec RentReceipt
  rentReceipts: RentReceipt[]; // Utilisez le bon nom de champ en fonction de votre modèle de données
}
