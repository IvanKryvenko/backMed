import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { ResearchModule } from './research/research.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ArticleModule, UserModule, ResearchModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
