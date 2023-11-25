// building.dto.ts

import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class BuildingStatistics {
  @Field(type => Int)
  totalApartments: number;

  @Field(type => Float)
  occupancyRate: number;

  @Field(type => Int)
  totalTenants: number;

  @Field(type => Int)
  underOccupied: number;

  @Field(type => Int)
  overOccupied: number;
}
