import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateApartmentInput {
  @Field()
  type: string;

  @Field(() => Int)
  buildingId: number;

  @Field(() => Int)
  ownerId: number;
  @Field()
  capacity: number;
}
