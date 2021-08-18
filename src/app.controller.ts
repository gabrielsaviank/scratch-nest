import { Controller, Get } from "@nestjs/common";

// First Decorator
@Controller()
export class AppController {
    @Get()
    getRootRoute(){
        return "hi there";
    };

    getByeThere(){
        
    }
};