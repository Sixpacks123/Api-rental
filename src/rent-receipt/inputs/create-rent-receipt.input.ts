import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateRentReceiptInput {
  @Field()
  issueDate: Date;

  @Field({ nullable: true })
  paymentDate?: Date;

  @Field(() => [Date], { nullable: true })
  reminderDates?: Date[];

  @Field()
  paymentStatus: string;

  @Field(() => Int)
  tenantId: number;

  @Field(() => Int)
  ownerId: number;
}
