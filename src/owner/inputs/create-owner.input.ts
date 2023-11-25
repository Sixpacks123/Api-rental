import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  @Field()
  name: string;

  @Field()
  accountNumber: string;

  @Field()
  vatSubject: boolean;
}
