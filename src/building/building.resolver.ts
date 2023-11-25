import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BuildingService } from './building.service';
import { Building } from './building.entity';
import { CreateBuildingInput } from './inputs/create-building.input';
import { UpdateBuildingInput } from './inputs/update-building.input';
import { BuildingStatistics } from "./inputs/building.stats";


@Resolver(() => Building)
export class BuildingResolver {
  constructor(private readonly buildingService: BuildingService) {}

  @Mutation(() => Building)
  createBuilding(
    @Args('createBuildingInput') createBuildingInput: CreateBuildingInput,
  ) {
    return this.buildingService.create(createBuildingInput);
  }

  @Query(() => [Building], { name: 'findAllBuildings' })
  findAll() {
    return this.buildingService.findAll();
  }

  @Query(() => Building, { name: 'findBuildingById', nullable: true })
  findOne(@Args('id') id: number) {
    return this.buildingService.findOne(id);
  }

  @Mutation(() => Building)
  updateBuilding(
    @Args('updateBuildingInput') updateBuildingInput: UpdateBuildingInput,
  ) {
    return this.buildingService.update(
      updateBuildingInput.id,
      updateBuildingInput,
    );
  }

  @Mutation(() => Building)
  removeBuilding(@Args('id') id: number) {
    return this.buildingService.remove(id);
  }

  @Query(() => BuildingStatistics)
  async buildingStatistics(@Args('buildingId') buildingId: number) {
    return this.buildingService.buildingStatistics(buildingId);
  }
}
