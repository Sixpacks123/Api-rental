import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateOwnerInput } from './create-owner.input';

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  @Field(() => Int)
  id: number;
}
