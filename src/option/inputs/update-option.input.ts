import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateOptionInput } from './create-option.input';

@InputType()
export class UpdateOptionInput extends PartialType(CreateOptionInput) {
  @Field(() => Int)
  id: number;
}
