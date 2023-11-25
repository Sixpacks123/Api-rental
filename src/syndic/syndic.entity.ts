import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Syndic {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  contactInfo: string;

}
