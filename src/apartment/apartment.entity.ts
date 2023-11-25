import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Building } from '../building/building.entity';
import { Owner } from '../owner/owner.entity';
import { Tenant } from '../tenant/tenant.entity';
import { Option } from '../option/option.entity';

@ObjectType()
export class Apartment {
  @Field(() => Int)
  id: number;

  @Field()
  type: string;

  @Field(() => Building)
  building: Building;

  @Field(() => Owner)
  owner: Owner;

  @Field()
  capacity: number;

  @Field(() => [Tenant], { nullable: 'itemsAndList' })
  tenants: Tenant[];

  @Field(() => [Option], { nullable: 'itemsAndList' })
  options: Option[];
}
