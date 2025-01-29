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

  getCategories(paginationDto: PaginationDto): Promise<GetCategoryDto[]> {
    const { page, size } = paginationDto
    //check if request contain pagination then return with pagination statement
    if (typeof(page) !== 'undefined' && typeof(size) !== 'undefined'){
      
      return this.categoryReposetory.find({ skip: (page - 1) * size, take: size });
    }

    return this.categoryReposetory.find()
  }

  createCategoryFromRabbitMQ(categoryFromRabbitMQDto: CategoryFromRabbitMQDto): Promise<CreateCategoryDto> {
    const { activity, type } = categoryFromRabbitMQDto
    let description
    
    if (categoryFromRabbitMQDto.type === 'income') {
      description = `An income of ${categoryFromRabbitMQDto.sum} has been received under the ${categoryFromRabbitMQDto.activity} category.`;
    } else {
      description = `An expense of ${categoryFromRabbitMQDto.sum} has been recorded under the ${categoryFromRabbitMQDto.activity} category.`;
    }
        
    const transaction = this.categoryReposetory.create({ name: activity, type, description })
    return this.categoryReposetory.save(transaction)
    
  }

  createCategory(createCategoryDto: CreateCategoryDto): Promise<CreateCategoryDto> {
    const { name, type, description } = createCategoryDto
    const transaction = this.categoryReposetory.create({ name, type, description })

    return this.categoryReposetory.save(transaction)
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto): Promise<UpdateCategoryDto> {
    const categoryExist = await this.categoryReposetory.findOne({ where: { id }})
    const { name, type, description } = updateCategoryDto;

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
