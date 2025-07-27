import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'mobility',
      autoLoadEntities: true,
      synchronize: true, // à désactiver en prod !
    }),
    BookingModule,
  ],
})
export class AppModule {}
