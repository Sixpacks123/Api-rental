import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RentReceiptService } from './rent-receipt.service';
import { RentReceipt } from './rent-receipt.entity';
import { CreateRentReceiptInput } from './inputs/create-rent-receipt.input';
import { UpdateRentReceiptInput } from './inputs/update-rent-receipt.input';

@Resolver(() => RentReceipt)
export class RentReceiptResolver {
  constructor(private readonly rentReceiptService: RentReceiptService) {}

  @Mutation(() => RentReceipt)
  createRentReceipt(@Args('createRentReceiptInput') createRentReceiptInput: CreateRentReceiptInput) {
    return this.rentReceiptService.create(createRentReceiptInput);
  }

  @Query(() => [RentReceipt], { name: 'findAllRentReceipts' })
  findAll() {
    return this.rentReceiptService.findAll();
  }

  @Query(() => RentReceipt, { name: 'findRentReceiptById', nullable: true })
  findOne(@Args('id') id: number) {
    return this.rentReceiptService.findOne(id);
  }

  @Mutation(() => RentReceipt)
  updateRentReceipt(
    @Args('updateRentReceiptInput')
    updateRentReceiptInput: UpdateRentReceiptInput,
  ) {
    return this.rentReceiptService.update(
      updateRentReceiptInput.id,
      updateRentReceiptInput,
    );
  }

  @Mutation(() => RentReceipt)
  removeRentReceipt(@Args('id') id: number) {
    return this.rentReceiptService.remove(id);
  }
}
