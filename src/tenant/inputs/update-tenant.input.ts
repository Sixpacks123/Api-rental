import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateTenantInput } from './create-tenant.input';

@InputType()
export class UpdateTenantInput extends PartialType(CreateTenantInput) {
  @Field(() => Int)
  id: number;

}
