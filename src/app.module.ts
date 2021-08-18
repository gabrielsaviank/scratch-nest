import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

// First Module
@Module({
    controllers: [AppController]
})

export class AppModule {

};