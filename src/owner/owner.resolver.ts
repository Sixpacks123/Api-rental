import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './owner.entity';
import { CreateOwnerInput } from './inputs/create-owner.input';
import { UpdateOwnerInput } from './inputs/update-owner.input';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation(() => Owner)
  createOwner(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput) {
    return this.ownerService.create(createOwnerInput);
  }

  @Query(() => [Owner], { name: 'findAllOwners' })
  findAll() {
    return this.ownerService.findAll();
  }

  @Query(() => Owner, { name: 'findOwnerById', nullable: true })
  findOne(@Args('id') id: number) {
    return this.ownerService.findOne(id);
  }

  @Mutation(() => Owner)
  updateOwner(@Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput) {
    return this.ownerService.update(updateOwnerInput.id, updateOwnerInput);
  }

  @Mutation(() => Owner)
  removeOwner(@Args('id') id: number) {
    return this.ownerService.remove(id);
  }
}
