import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ApartmentService } from './apartment.service';
import { Apartment } from './apartment.entity';
import { CreateApartmentInput } from './inputs/create-apartment.input';
import { UpdateApartmentInput } from './inputs/update-apartment.input';

@Resolver(() => Apartment)
export class ApartmentResolver {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Mutation(() => Apartment)
  createApartment(@Args('createApartmentInput') createApartmentInput: CreateApartmentInput) {
    return this.apartmentService.create(createApartmentInput);
  }

  @Query(() => [Apartment], { name: 'findAllApartments' })
  findAll() {
    return this.apartmentService.findAll();
  }

  @Query(() => Apartment, { name: 'findApartmentById', nullable: true })
  findOne(@Args('id') id: number) {
    return this.apartmentService.findOne(id);
  }

  @Mutation(() => Apartment)
  updateApartment(@Args('updateApartmentInput') updateApartmentInput: UpdateApartmentInput) {
    return this.apartmentService.update(
      updateApartmentInput.id,
      updateApartmentInput,
    );
  }

  @Mutation(() => Apartment)
  removeApartment(@Args('id') id: number) {
    return this.apartmentService.remove(id);
  }
}
