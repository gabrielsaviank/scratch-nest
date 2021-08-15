import { Controller, Module, Get } from "@nestjs/common";

// First Decorator
@Controller()
class AppController {
    @Get()
    getRootRoute(){
        return "hi there";
    }
};