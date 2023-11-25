import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommonFacilityService } from './common-facility.service';
import { CommonFacility } from './common-facility.entity';
import { CreateCommonFacilityInput } from './inputs/create-common-facility.input';
import { UpdateCommonFacilityInput } from './inputs/update-common-facility.input';

@Resolver(() => CommonFacility)
export class CommonFacilityResolver {
  constructor(private readonly commonFacilityService: CommonFacilityService) {}

  @Mutation(() => CommonFacility)
  createCommonFacility(@Args('createCommonFacilityInput') createCommonFacilityInput: CreateCommonFacilityInput) {
    return this.commonFacilityService.create(createCommonFacilityInput);
  }

  @Query(() => [CommonFacility], { name: 'findAllCommonFacilities' })
  findAll() {
    return this.commonFacilityService.findAll();
  }

  @Query(() => CommonFacility, { name: 'findCommonFacilityById', nullable: true })
  findOne(@Args('id') id: number) {
    return this.commonFacilityService.findOne(id);
  }

  @Mutation(() => CommonFacility)
  updateCommonFacility(@Args('updateCommonFacilityInput') updateCommonFacilityInput: UpdateCommonFacilityInput) {
    return this.commonFacilityService.update(updateCommonFacilityInput.id, updateCommonFacilityInput);
  }

  @Mutation(() => CommonFacility)
  removeCommonFacility(@Args('id') id: number) {
    return this.commonFacilityService.remove(id);
  }
}
