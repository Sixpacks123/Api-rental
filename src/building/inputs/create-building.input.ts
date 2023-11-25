import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateBuildingInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field(() => Int)
  syndicId: number;

}
