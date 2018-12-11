import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Places} from '../models';
import {PlacesRepository} from '../repositories';

export class PlaceController {
  constructor(
    @repository(PlacesRepository)
    public placesRepository : PlacesRepository,
  ) {}

  @post('/places', {
    responses: {
      '200': {
        description: 'Places model instance',
        content: {'application/json': {schema: {'x-ts-type': Places}}},
      },
    },
  })
  async create(@requestBody() places: Places): Promise<Places> {
    return await this.placesRepository.create(places);
  }

  @get('/places/count', {
    responses: {
      '200': {
        description: 'Places model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Places)) where?: Where,
  ): Promise<Count> {
    return await this.placesRepository.count(where);
  }

  @get('/places', {
    responses: {
      '200': {
        description: 'Array of Places model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Places}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Places)) filter?: Filter,
  ): Promise<Places[]> {
    return await this.placesRepository.find(filter);
  }

  @patch('/places', {
    responses: {
      '200': {
        description: 'Places PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() places: Places,
    @param.query.object('where', getWhereSchemaFor(Places)) where?: Where,
  ): Promise<Count> {
    return await this.placesRepository.updateAll(places, where);
  }

  @get('/places/{_id}', {
    responses: {
      '200': {
        description: 'Places model instance',
        content: {'application/json': {schema: {'x-ts-type': Places}}},
      },
    },
  })
  async findById(@param.path.string('_id') _id: string): Promise<Places> {
    return await this.placesRepository.findById(_id);
  }

  @patch('/places/{_id}', {
    responses: {
      '204': {
        description: 'Places PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('_id') _id: string,
    @requestBody() places: Places,
  ): Promise<void> {
    await this.placesRepository.updateById(_id, places);
  }

  @del('/places/{_id}', {
    responses: {
      '204': {
        description: 'Places DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('_id') _id: string): Promise<void> {
    await this.placesRepository.deleteById(_id);
  }
}
