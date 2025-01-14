import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CategoryDTO, CategoryFromRabbitMQDTO, PaginationDTO } from '../dto/dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryReposetory: Repository<Category>
  ) {}

  getCategories(limit: PaginationDTO): Promise<CategoryDTO[]> {
    const { firstObjectId, lastObjectId } = limit
    if (typeof(firstObjectId) !== 'undefined' && typeof(lastObjectId) !== 'undefined'){
      
      return this.categoryReposetory.find({ skip: (firstObjectId - 1) * lastObjectId, take: lastObjectId });
    }

    return this.categoryReposetory.find()
  }

  createCategoryFromRabbitMQ(data: CategoryFromRabbitMQDTO): Promise<CategoryDTO> {
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

  createCategory(newCategory: CategoryDTO): Promise<CategoryDTO> {
    const { name, type, description } = newCategory
    const transaction = this.categoryReposetory.create({ name, type, description })

    return this.categoryReposetory.save(transaction)
  }

  async updateCategory(id: number, updateCategory: CategoryDTO): Promise<CategoryDTO> {
    const { name, type, description } = updateCategory
    await this.categoryReposetory.update(id, {name, type, description})

    return this.categoryReposetory.findOne({ where: { id: id }})
  }

  deleteCategory(id: number){
    return this.categoryReposetory.delete(id);
  }
}
