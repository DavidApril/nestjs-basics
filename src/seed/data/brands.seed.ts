import { Brand } from '../../brands/entities/brand.entity';

import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Ford',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Nissan',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'BMW',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Mercedes-Benz',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Volkswagen',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Audi',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Hyundai',
    createdAt: new Date().getTime(),
  },

];