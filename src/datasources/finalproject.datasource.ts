import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './finalproject.datasource.json'

export class FinalprojectDataSource extends juggler.DataSource {
  static dataSourceName = 'finalproject';

  constructor(
    @inject('datasources.config.finalproject', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
