import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateApartmentInput } from './create-apartment.input';

@InputType()
export class UpdateApartmentInput extends PartialType(CreateApartmentInput) {
  @Field(() => Int)
  id: number;

  // Ajoutez ici des champs supplémentaires si nécessaire pour la mise à jour
}
