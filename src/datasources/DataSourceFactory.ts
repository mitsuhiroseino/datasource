import EasyFactory from '@visue/factory/easy/EasyFactory';
import AnyDataSource from './AnyDataSource';
import DATA_SOURCE_TYPES from './DATA_SOURCE_TYPES';
import MemoryDataSource from './MemoryDataSource';
import { DataSource } from './types';

const DataSourceFactory = new EasyFactory<DataSource>({
  category: 'datasource',
  products: [
    { type: DATA_SOURCE_TYPES.ANY, Class: AnyDataSource },
    { type: DATA_SOURCE_TYPES.MEMORY, Class: MemoryDataSource },
  ],
});
export default DataSourceFactory;
