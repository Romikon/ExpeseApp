import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCategoryDto, CategoryFromRabbitMQDto, PaginationDto, UpdateCategoryDto, GetCategoryDto } from '../dto/dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryReposetory: Repository<CategoryEntity>
  ) {}

  getCategories(pagination: PaginationDto): Promise<GetCategoryDto[]> {
    const { page, size } = pagination
    if (typeof(page) !== 'undefined' && typeof(size) !== 'undefined'){
      
      return this.categoryReposetory.find({ skip: (page - 1) * size, take: size });
    }

    return this.categoryReposetory.find()
  }

  createCategoryFromRabbitMQ(data: CategoryFromRabbitMQDto): Promise<CreateCategoryDto> {
    const { activity, type } = data
    let description
    
    if (data.type === 'income') {
      description = `An income of ${data.sum} has been received under the ${data.activity} category.`;
    } else {
      description = `An expense of ${data.sum} has been recorded under the ${data.activity} category.`;
    }
        
    const transaction = this.categoryReposetory.create({ name: activity, type, description })
    return this.categoryReposetory.save(transaction)
    
  }

  createCategory(newCategory: CreateCategoryDto): Promise<CreateCategoryDto> {
    const { name, type, description } = newCategory
    const transaction = this.categoryReposetory.create({ name, type, description })

    return this.categoryReposetory.save(transaction)
  }

  async updateCategory(id: number, updateCategory: UpdateCategoryDto): Promise<UpdateCategoryDto> {
    const categoryExist = await this.categoryReposetory.findOne({ where: { id }})
    const { name, type, description } = updateCategory;

    if (!categoryExist)
      throw new Error('Category didnt exist!')

    categoryExist.name = name;
    categoryExist.type = type;
    categoryExist.description = description;
    return this.categoryReposetory.save(categoryExist)
  }

  deleteCategory(id: number): Promise<DeleteResult>{
    return this.categoryReposetory.delete(id);
  }
}
