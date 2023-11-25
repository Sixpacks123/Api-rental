import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateCommonFacilityInput } from './create-common-facility.input';

@InputType()
export class UpdateCommonFacilityInput extends PartialType(
  CreateCommonFacilityInput,
) {
  @Field(() => Int)
  id: number;
}
