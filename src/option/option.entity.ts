import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Apartment } from '../apartment/apartment.entity';

@ObjectType()
export class Option {
  @Field(() => Int)
  id: number;

  @Field()
  description: string;

  @Field(() => Apartment)
  apartment: Apartment;

  // Ajoutez d'autres champs et relations selon vos besoins
}
