import {
  CreateOptionsBase,
  DataSourceConfigBase,
  DataSourceEventHandlersBase,
  DeleteOptionsBase,
  ReadOptionsBase,
} from '../DataSourceBase';

/**
 * イベントハンドラー
 */
export type MemoryDataSourceEventHandlers<D = any> = DataSourceEventHandlersBase<D>;

/**
 * loadメソッドのオプション
 */
export type MemoryLoadOptions = ReadOptionsBase;

/**
 * saveメソッドのオプション
 */
export type MemorySaveOptions = CreateOptionsBase;

/**
 * removeメソッドのオプション
 */
export type MemoryRemoveOptions = DeleteOptionsBase;

/**
 * コンフィグ
 */
export type MemoryDataSourceConfig<D = any> = DataSourceConfigBase<D, MemoryDataSourceEventHandlers<D>> &
  MemoryLoadOptions &
  MemorySaveOptions &
  MemoryRemoveOptions;
