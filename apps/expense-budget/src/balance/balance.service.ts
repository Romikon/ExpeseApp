import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {
  GetBalanceDto,
  CreateBalanceDto,
  UpdateBalanceDto,
} from '../dto/index';
import { BalanceEntity } from './balance.entity';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(BalanceEntity)
    private balanceRepository: Repository<BalanceEntity>,
  ) {}

  getBalance(): Promise<GetBalanceDto[]> {
    return this.balanceRepository.find();
  }

  async createBalance(
    createBalanceDto: CreateBalanceDto,
  ): Promise<CreateBalanceDto> {
    const { user_id, amount, budget_id } = createBalanceDto;

    return this.balanceRepository.save(
      this.balanceRepository.create({ user_id, amount, budget_id }),
    );
  }

  async updateBalance(
    id: number,
    updateBalanceDto: UpdateBalanceDto,
  ): Promise<UpdateBalanceDto> {
    const balanceExist = await this.balanceRepository.findOne({ where: { id } });
    const { amount } = updateBalanceDto;

    if (!balanceExist) throw new Error('Balance didnt exist!');

    balanceExist.amount = amount;
    return this.balanceRepository.save(balanceExist);
  }

  deleteBalance(budgetId: number): Promise<DeleteResult> {
    return this.balanceRepository.delete({ budget_id: budgetId });
  }
}
