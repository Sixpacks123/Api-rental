import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TenantService } from './tenant.service';
import { Tenant } from './tenant.entity';
import { CreateTenantInput } from './inputs/create-tenant.input';
import { UpdateTenantInput } from './inputs/update-tenant.input';

@Resolver(() => Tenant)
export class TenantResolver {
  constructor(private readonly tenantService: TenantService) {}

  @Mutation(() => Tenant)
  createTenant(@Args('createTenantInput') createTenantInput: CreateTenantInput) {
    return this.tenantService.create(createTenantInput);
  }

  @Query(() => [Tenant], { name: 'findAllTenants' })
  findAll() {
    return this.tenantService.findAll();
  }

  @Query(() => Tenant, { name: 'findTenantById', nullable: true })
  findOne(@Args('id') id: number) {
    return this.tenantService.findOne(id);
  }

  @Mutation(() => Tenant)
  updateTenant(@Args('updateTenantInput') updateTenantInput: UpdateTenantInput) {
    return this.tenantService.update(updateTenantInput.id, updateTenantInput);
  }

  @Mutation(() => Tenant)
  removeTenant(@Args('id') id: number) {
    return this.tenantService.remove(id);
  }
}
