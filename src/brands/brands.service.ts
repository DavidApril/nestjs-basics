import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'toyota',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {

    const newBrand = {
      id: uuid(),
      ...createBrandDto,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id "${id}" not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    return Object.assign(brand, updateBrandDto);
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id);
    return `This action removes a #${id} brand`;
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}