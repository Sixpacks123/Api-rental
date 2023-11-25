import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OptionService } from './option.service';
import { Option } from './option.entity';
import { CreateOptionInput } from './inputs/create-option.input';
import { UpdateOptionInput } from './inputs/update-option.input';

@Resolver(() => Option)
export class OptionResolver {
  constructor(private readonly optionService: OptionService) {}

  @Mutation(() => Option)
  createOption(@Args('createOptionInput') createOptionInput: CreateOptionInput) {
    return this.optionService.create(createOptionInput);
  }

  @Query(() => [Option], { name: 'findAllOptions' })
  findAll() {
    return this.optionService.findAll();
  }

  @Query(() => Option, { name: 'findOptionById', nullable: true })
  findOne(@Args('id') id: number) {
    return this.optionService.findOne(id);
  }

  @Mutation(() => Option)
  updateOption(
    @Args('updateOptionInput') updateOptionInput: UpdateOptionInput,
  ) {
    return this.optionService.update(updateOptionInput.id, updateOptionInput);
  }

  @Mutation(() => Option)
  removeOption(@Args('id') id: number) {
    return this.optionService.remove(id);
  }
}
