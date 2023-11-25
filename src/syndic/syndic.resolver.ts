import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SyndicService } from './syndic.service';
import { Syndic } from './syndic.entity';
import { CreateSyndicInput } from './inputs/create-syndic.input';
import { UpdateSyndicInput } from './inputs/update-syndic.input';

@Resolver(() => Syndic)
export class SyndicResolver {
  constructor(private readonly syndicService: SyndicService) {}

  @Mutation(() => Syndic)
  createSyndic(@Args('createSyndicInput') createSyndicInput: CreateSyndicInput) {
    return this.syndicService.create(createSyndicInput);
  }

  @Query(() => [Syndic], { name: 'findAllSyndics' })
  findAll() {
    return this.syndicService.findAll();
  }

  @Query(() => Syndic, { name: 'findSyndicById', nullable: true })
  findOne(@Args('id') id: number) {
    return this.syndicService.findOne(id);
  }

  @Mutation(() => Syndic)
  updateSyndic(@Args('updateSyndicInput') updateSyndicInput: UpdateSyndicInput) {
    return this.syndicService.update(updateSyndicInput.id, updateSyndicInput);
  }

  @Mutation(() => Syndic)
  removeSyndic(@Args('id') id: number) {
    return this.syndicService.remove(id);
  }
}
