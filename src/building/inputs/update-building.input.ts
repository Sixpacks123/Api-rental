import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateBuildingInput } from './create-building.input';

@InputType()
export class UpdateBuildingInput extends PartialType(CreateBuildingInput) {
  @Field(() => Int)
  id: number;
}
