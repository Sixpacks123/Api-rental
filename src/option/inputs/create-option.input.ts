import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateOptionInput {
  @Field()
  description: string;

  @Field(() => Int)
  apartmentId: number;
}
