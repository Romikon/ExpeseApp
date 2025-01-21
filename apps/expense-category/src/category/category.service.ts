import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCategoryDTO, CategoryFromRabbitMQDTO, PaginationDTO, UpdateCategoryDTO, GetCategoryDTO } from '../dto/dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryReposetory: Repository<Category>
  ) {}

  getCategories(limit: PaginationDTO): Promise<GetCategoryDTO[]> {
    const { firstObjectId, lastObjectId } = limit
    if (typeof(firstObjectId) !== 'undefined' && typeof(lastObjectId) !== 'undefined'){
      
      return this.categoryReposetory.find({ skip: (firstObjectId - 1) * lastObjectId, take: lastObjectId });
    }

    return this.categoryReposetory.find()
  }

  createCategoryFromRabbitMQ(data: CategoryFromRabbitMQDTO): Promise<CreateCategoryDTO> {
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

  createCategory(newCategory: CreateCategoryDTO): Promise<CreateCategoryDTO> {
    const { name, type, description } = newCategory
    const transaction = this.categoryReposetory.create({ name, type, description })

    return this.categoryReposetory.save(transaction)
  }

  async updateCategory(id: number, updateCategory: UpdateCategoryDTO): Promise<UpdateCategoryDTO> {
    const ifCategoryExist = await this.categoryReposetory.findOne({ where: { id }})

    if (ifCategoryExist)
      return this.categoryReposetory.save(updateCategory)

    return ifCategoryExist
  }

  deleteCategory(id: number): Promise<DeleteResult>{
    return this.categoryReposetory.delete(id);
  }
}
