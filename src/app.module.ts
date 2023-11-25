import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApartmentModule } from './apartment/apartment.module';
import { BuildingModule } from './building/building.module';
import { CommonFacilityModule } from './common-facility/common-facility.module';
import { OwnerModule } from './owner/owner.module';
import { SyndicModule } from './syndic/syndic.module';
import { TenantModule } from './tenant/tenant.module';
import { OptionModule } from "./option/option.module";
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      installSubscriptionHandlers: true, // Activer les abonnements
      // to generate schema from @ObjectType() class
      autoSchemaFile: true,
    }),
    ApartmentModule,
    BuildingModule,
    CommonFacilityModule,
    OptionModule,
    OwnerModule,
    SyndicModule,
    TenantModule,
  ],
})
export class AppModule {}
