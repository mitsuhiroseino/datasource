import { Destructible } from '@visue/core/DestructibleBase';
import { EventHandlers, Observable } from '@visue/core/events';
import { Identifiable, IdentifiableConfig } from '@visue/utils';

/**
 * createメソッドのオプション
 */
export type CreateOptions = {};

/**
 * readメソッドのオプション
 */
export type ReadOptions = {};

/**
 * updateメソッドのオプション
 */
export type UpdateOptions = {};

/**
 * deleteメソッドのオプション
 */
export type DeleteOptions = {};

/**
 * コンフィグ
 */
export type DataSourceConfig = IdentifiableConfig & CreateOptions & ReadOptions & UpdateOptions & DeleteOptions;

/**
 * リソース
 */
export interface DataSource<D = any, H = EventHandlers> extends Observable<H>, Identifiable, Destructible {
  /**
   * DataSourceのインスタンスであるか
   */
  readonly isDataSource: true;

  /**
   * リソースを保存する
   * @param options
   */
  create(data: D, options?: CreateOptions): Promise<any>;

  /**
   * リソースを読み込む
   * @param options
   */
  read(options?: ReadOptions): Promise<D | null>;

  /**
   * リソースを更新する
   * @param options
   */
  update(data: D, options?: UpdateOptions): Promise<any>;

  /**
   * リソースを削除する
   * @param options
   */
  delete(options?: DeleteOptions): Promise<any>;
}
