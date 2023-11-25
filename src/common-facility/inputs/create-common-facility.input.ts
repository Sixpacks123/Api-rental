import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCommonFacilityInput {
  @Field()
  name: string;

  @Field()
  type: string;

  @Field(() => Int)
  buildingId: number;
}
