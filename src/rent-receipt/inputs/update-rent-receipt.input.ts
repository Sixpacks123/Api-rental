import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateRentReceiptInput } from './create-rent-receipt.input';

@InputType()
export class UpdateRentReceiptInput extends PartialType(
  CreateRentReceiptInput,
) {
  @Field(() => Int)
  id: number;
}
