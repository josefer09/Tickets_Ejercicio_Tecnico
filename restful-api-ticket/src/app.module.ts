import { Module } from '@nestjs/common';
import { TicketsModule } from './modules/tickets/tickets.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvConfiguration, envValidationSchema } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: envValidationSchema,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        ssl: configService.get<string>('NODE_ENV') === 'prod' ? true : false,
        extra: {
          ssl: configService.get<string>('NODE_ENV') === 'prod'
          ? { rejectUnauthorized: false }
          : null,
        },
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: configService.get<string>('NODE_ENV') === 'dev' ? true : false,
      }),
      inject: [ConfigService],
    }),
    TicketsModule],
})

export class AppModule {}
