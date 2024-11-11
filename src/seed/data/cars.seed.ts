import { Car } from '../../cars/interfaces/car.interface';

import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Fiesta',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Focus',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Yaris',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Accord',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Supra',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'NSX',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'GT',
  },
];