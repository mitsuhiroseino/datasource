import EventedBase from '@visue/core/EventedBase';
import { Reader, ReaderFactory } from '../../readers';
import { Writer, WriterFactory } from '../../writers';
import { CreateOptions, DataSource, DeleteOptions, ReadOptions, UpdateOptions } from '../types';
import { DATA_SOURCE_EVENTS_BASE } from './constants';
import { DataSourceConfigBase, DataSourceEventHandlersBase } from './types';

/**
 * データソースの抽象クラス
 */
abstract class DataSourceBase<
    D = any,
    H extends DataSourceEventHandlersBase<D> = DataSourceEventHandlersBase<D>,
    C extends DataSourceConfigBase<D, H> = DataSourceConfigBase<D, H>,
  >
  extends EventedBase<H, C>
  implements DataSource<D, H>
{
  readonly isDataSource = true;

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 識別名
   */
  readonly $idName?: string;

  /**
   * read時に取得したデータを変換するreader
   */
  protected _reader?: Reader;

  /**
   * create,update時に渡されたデータを変換するwriter
   */
  protected _writer?: Writer;

  constructor(config?: C) {
    super(config);
    const { reader, writer } = this.config;
    if (reader) {
      this._reader = ReaderFactory.get(reader);
    }
    if (writer) {
      this._writer = WriterFactory.get(writer);
    }
  }

  /**
   * リソースを保存する
   * @param options
   */
  create<O extends CreateOptions = CreateOptions>(outData: D, options?: O): Promise<any> {
    const me = this,
      config = me._withConfig(options);
    if (me._events.fire(DATA_SOURCE_EVENTS_BASE.beforecreate, { data: outData, config }) === false) {
      return Promise.resolve(null);
    }
    let data;
    // 渡されたデータの変換有無
    if (this._writer) {
      // 変換あり
      data = this._writer.write(outData);
    } else {
      // 変換なし
      data = outData;
    }
    me._events.fire(DATA_SOURCE_EVENTS_BASE.create, { data, config });
    return me
      ._create(data, config)
      .then((result: any) => {
        me._events.fire(DATA_SOURCE_EVENTS_BASE.aftercreate, { result, config });
        return result;
      })
      .catch((error) => {
        me._events.fire(DATA_SOURCE_EVENTS_BASE.createerror, { error, config });
        return error;
      });
  }

  /**
   * リソースを保存する
   * @param config
   */
  protected abstract _create(data: D, config: C): Promise<any>;

  /**
   * リソースを読み込む
   * @param options
   */
  read<O extends ReadOptions = ReadOptions>(options?: O): Promise<D | null> {
    const me = this,
      config = me._withConfig(options);
    if (me._events.fire(DATA_SOURCE_EVENTS_BASE.beforeread, { config }) === false) {
      return Promise.resolve(null);
    }
    me._events.fire(DATA_SOURCE_EVENTS_BASE.read, { config });
    return me
      ._read(config)
      .then((inData: any) => {
        let data: D;
        // 取得したデータの変換有無
        if (this._reader) {
          // 変換あり
          data = this._reader.read(inData);
        } else {
          // 変換なし
          data = inData;
        }
        me._events.fire(DATA_SOURCE_EVENTS_BASE.afterread, { data, config });
        return data;
      })
      .catch((error) => {
        me._events.fire(DATA_SOURCE_EVENTS_BASE.readerror, { error, config });
        return error;
      });
  }

  /**
   * リソースを読み込む
   * @param config
   */
  protected abstract _read(config: C): Promise<D | null>;

  /**
   * リソースを更新する
   * @param options
   */
  update<O extends UpdateOptions = UpdateOptions>(outData: D, options?: O): Promise<any> {
    const me = this,
      config = me._withConfig(options);
    if (me._events.fire(DATA_SOURCE_EVENTS_BASE.beforeupdate, { data: outData, config }) === false) {
      return Promise.resolve(null);
    }
    let data;
    // 渡されたデータの変換有無
    if (this._writer) {
      // 変換あり
      data = this._writer.write(outData);
    } else {
      // 変換なし
      data = outData;
    }
    me._events.fire(DATA_SOURCE_EVENTS_BASE.update, { data, config });
    return me
      ._create(data, config)
      .then((result: any) => {
        me._events.fire(DATA_SOURCE_EVENTS_BASE.afterupdate, { result, config });
        return result;
      })
      .catch((error) => {
        me._events.fire(DATA_SOURCE_EVENTS_BASE.updateerror, { error, config });
        return error;
      });
  }

  /**
   * リソースを更新する
   * @param config
   */
  protected abstract _update(data: D, config: C): Promise<any>;

  /**
   * リソースを削除する
   * @param options
   */
  delete<O extends DeleteOptions = DeleteOptions>(options?: O): Promise<any> {
    const me = this,
      config = me._withConfig(options);
    if (me._events.fire(DATA_SOURCE_EVENTS_BASE.beforedelete, { config }) === false) {
      return Promise.resolve(null);
    }
    me._events.fire(DATA_SOURCE_EVENTS_BASE.delete, { config });
    return me
      ._delete(config)
      .then((result: any) => {
        me._events.fire(DATA_SOURCE_EVENTS_BASE.afterdelete, { result, config });
        return result;
      })
      .catch((error) => {
        me._events.fire(DATA_SOURCE_EVENTS_BASE.deleteerror, { error, config });
        return error;
      });
  }

  /**
   * リソースを削除する
   * @param config
   */
  protected abstract _delete(config: C): Promise<any>;
}
export default DataSourceBase;
