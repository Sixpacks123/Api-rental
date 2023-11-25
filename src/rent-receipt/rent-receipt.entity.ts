import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Tenant } from "../tenant/tenant.entity";
import { Owner } from "../owner/owner.entity";


@ObjectType()
export class RentReceipt {
  @Field(() => Int)
  id: number;

  @Field()
  issueDate: Date;

  @Field({ nullable: true })
  paymentDate?: Date;

  @Field(() => [Date], { nullable: true })
  reminderDates?: Date[];

  @Field()
  paymentStatus: string;

  @Field(() => Tenant)
  tenant: Tenant;

  @Field(() => Owner)
  owner: Owner;
}
