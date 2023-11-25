import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSyndicInput {
  @Field()
  name: string;

  @Field()
  contactInfo: string;

}
