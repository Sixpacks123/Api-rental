import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateSyndicInput } from './create-syndic.input';

@InputType()
export class UpdateSyndicInput extends PartialType(CreateSyndicInput) {
  @Field(() => Int)
  id: number;
}
