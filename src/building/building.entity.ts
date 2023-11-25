import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Syndic } from '../syndic/syndic.entity';
import { Apartment } from '../apartment/apartment.entity';
import { CommonFacility } from '../common-facility/common-facility.entity';

@ObjectType()
export class Building {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  buildingId: number;

  @Field()
  buildingName: string;

  @Field(() => Syndic)
  syndic: Syndic;

  @Field(() => [Apartment], { nullable: 'itemsAndList' })
  apartments: Apartment[];

  @Field(() => [CommonFacility], { nullable: 'itemsAndList' })
  commonFacilities: CommonFacility[];
}
