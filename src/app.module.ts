import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjetModule } from './projet/projet.module';
import { SkillsModule } from './skills/skills.module';
import { AboutModule } from './about/about.module';
import { ReferencesModule } from './references/references.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'portofilio',
      autoLoadEntities: true,
      synchronize: true,

    }),
    ProjetModule,
    SkillsModule,
    AboutModule,
    ReferencesModule,
    ContactModule,
     
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
