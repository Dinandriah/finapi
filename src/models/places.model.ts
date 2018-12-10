import {Entity, model, property} from '@loopback/repository';

@model()
export class Places extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  date?: string;

  @property({
    type: 'string',
  })
  img?: string;

  @property({
    type: 'string',
  })
  adventure?: string;

  constructor(data?: Partial<Places>) {
    super(data);
  }
}
