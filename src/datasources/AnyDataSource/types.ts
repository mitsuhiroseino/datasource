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
export type AnyDataSourceEventHandlers<D = any> = DataSourceEventHandlersBase<D>;

/**
 * loadメソッドのオプション
 */
export type AnyLoadOptions = ReadOptionsBase;

/**
 * saveメソッドのオプション
 */
export type AnySaveOptions = CreateOptionsBase;

/**
 * removeメソッドのオプション
 */
export type AnyRemoveOptions = DeleteOptionsBase;

/**
 * コンフィグ
 */
export type AnyDataSourceConfig<D = any> = DataSourceConfigBase<D, AnyDataSourceEventHandlers<D>> &
  AnyLoadOptions &
  AnySaveOptions &
  AnyRemoveOptions & {
    /**
     * リソースの保存処理
     * @param data
     * @param config
     * @returns
     */
    create: (data: D, config: AnyDataSourceConfig<D>) => Promise<any>;

    /**
     * リソースの読み込み処理
     * @param config
     * @returns
     */
    read: (config: AnyDataSourceConfig<D>) => Promise<D>;

    /**
     * リソースの更新処理
     * @param data
     * @param config
     * @returns
     */
    update: (data: D, config: AnyDataSourceConfig<D>) => Promise<any>;

    /**
     * リソースの削除処理
     * @param config
     * @returns
     */
    delete: (config: AnyDataSourceConfig<D>) => Promise<any>;
  };
