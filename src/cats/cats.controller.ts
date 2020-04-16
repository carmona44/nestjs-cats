import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return await this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param() params ): Promise<Cat> {
        return this.catsService.findOne(params.id);
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() catDto: CreateCatDto): Promise<Cat> {
        return this.catsService.updateOne(id, catDto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Promise<Cat> {
        return this.catsService.deleteOne(id);
    }
}
