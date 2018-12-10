import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Places} from '../models';
import {FinalprojectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlacesRepository extends DefaultCrudRepository<
  Places,
  typeof Places.prototype.id
> {
  constructor(
    @inject('datasources.finalproject') dataSource: FinalprojectDataSource,
  ) {
    super(Places, dataSource);
  }
}
