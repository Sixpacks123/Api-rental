import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTenantInput {
  @Field()
  name: string;

  @Field()
  contactInfo: string;

  @Field(() => Int)
  apartmentId: number;

  @Field({ nullable: true })
  isMainTenant: boolean;
}
