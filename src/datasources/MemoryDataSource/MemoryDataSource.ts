import DataSourceBase from '../DataSourceBase';
import { MemoryDataSourceConfig, MemoryDataSourceEventHandlers } from './types';

/**
 * メモリー上にデータを持つデータソース
 * 保持したデータは永続化されない
 */
class MemoryDataSource<D = any> extends DataSourceBase<D, MemoryDataSourceEventHandlers, MemoryDataSourceConfig<D>> {
  /**
   * メモリーに保持したデータ
   */
  private _data: D | null = null;

  protected _create(data: D, config: MemoryDataSourceConfig<D>): Promise<any> {
    this._data = data;
    return Promise.resolve(data);
  }

  protected _read(config: MemoryDataSourceConfig<D>): Promise<D | null> {
    return Promise.resolve(this._data);
  }

  protected _update(data: D, config: MemoryDataSourceConfig<D>): Promise<any> {
    this._data = data;
    return Promise.resolve(data);
  }

  protected _delete(config: MemoryDataSourceConfig<D>): Promise<any> {
    this._data = null;
    return Promise.resolve(null);
  }
}
export default MemoryDataSource;
