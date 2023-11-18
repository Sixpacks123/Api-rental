import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

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

  ],
})
export class AppModule {}
