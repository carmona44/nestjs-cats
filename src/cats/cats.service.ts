import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {

    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find();
    }

    async findOne(id: string): Promise<Cat> {
        return this.catModel.findById(id);
    }

    async updateOne(id: string, cat: CreateCatDto): Promise<Cat>{
        return this.catModel.findByIdAndUpdate(id, cat, {new: true});
    }

    async deleteOne(id: string): Promise<Cat>{
        return this.catModel.findByIdAndRemove(id);
    }
}
