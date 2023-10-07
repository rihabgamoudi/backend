import { Injectable } from '@nestjs/common';
import { CreateProjetDto } from './dto/create-projet.dto';
import { UpdateProjetDto } from './dto/update-projet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Projet } from './entities/projet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjetService {
  constructor(
    @InjectRepository(Projet)
    private readonly projetRepository:Repository<Projet>
  ){}
  create(body: CreateProjetDto) {
    return 'This action adds a new projet';
  }

 async findAll() {
    return await this.projetRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} projet`;
  }

  update(id: number, updateProjetDto: UpdateProjetDto) {
    return `This action updates a #${id} projet`;
  }

  remove(id: number) {
    return `This action removes a #${id} projet`;
  }
}
