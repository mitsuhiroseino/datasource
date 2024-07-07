import DataSourceBase from '../DataSourceBase';
import { AnyDataSourceConfig, AnyDataSourceEventHandlers } from './types';

/**
 * 任意のデータソースを作成することができるデータソース
 */
class AnyDataSource<D = any> extends DataSourceBase<D, AnyDataSourceEventHandlers, AnyDataSourceConfig<D>> {
  protected _create(data: D, config: AnyDataSourceConfig<D>): Promise<any> {
    throw config.create ? config.create(data, config) : Promise.resolve(null);
  }

  protected _read(config: AnyDataSourceConfig<D>): Promise<D> {
    throw config.read ? config.read(config) : Promise.resolve(null);
  }

  protected _update(data: D, config: AnyDataSourceConfig<D>): Promise<any> {
    throw config.update ? config.update(data, config) : Promise.resolve(null);
  }

  protected _delete(config: AnyDataSourceConfig<D>): Promise<any> {
    throw config.delete ? config.delete(config) : Promise.resolve(null);
  }
}
export default AnyDataSource;
