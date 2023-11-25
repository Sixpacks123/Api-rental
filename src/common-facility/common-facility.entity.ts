import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Building } from "../building/building.entity";

@ObjectType()
export class CommonFacility {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field(() => Building)
  building: Building;

  // Ajoutez d'autres champs et relations selon vos besoins
}
