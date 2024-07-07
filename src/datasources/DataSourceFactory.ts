import EasyFactory from '@visue/factory/easy/EasyFactory';
import AnyDataSource from './AnyDataSource';
import MemoryDataSource from './MemoryDataSource';
import { DATA_SOURCE_TYPES } from './constants';
import { DataSource } from './types';

const DataSourceFactory = new EasyFactory<DataSource>({
  category: 'datasource',
  products: [
    { type: DATA_SOURCE_TYPES.ANY, Class: AnyDataSource },
    { type: DATA_SOURCE_TYPES.MEMORY, Class: MemoryDataSource },
  ],
});
export default DataSourceFactory;
