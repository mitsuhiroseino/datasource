import { EventedConfig, EventedEventHandlers } from '@visue/core/EventedBase';
import { EventInfo } from '@visue/core/events';
import { Reader, ReaderConfig } from '../../readers';
import { Writer, WriterConfig } from '../../writers';
import { CreateOptions, DataSourceConfig, DeleteOptions, ReadOptions, UpdateOptions } from '../types';
import { DATA_SOURCE_EVENTS_BASE } from './constants';

/**
 * イベントハンドラー
 */
export type DataSourceEventHandlersBase<D = any> = EventedEventHandlers & {
  [DATA_SOURCE_EVENTS_BASE.beforeread]?: (event: EventInfo<any>) => void;
  [DATA_SOURCE_EVENTS_BASE.read]?: (event: EventInfo<any>) => void;
  [DATA_SOURCE_EVENTS_BASE.afterread]?: (event: EventInfo<{ data: D }>) => void;
  [DATA_SOURCE_EVENTS_BASE.readerror]?: (event: EventInfo<{ error: any }>) => void;
};

/**
 * createメソッドのオプション
 */
export type CreateOptionsBase = CreateOptions;

/**
 * readメソッドのオプション
 */
export type ReadOptionsBase = ReadOptions;

/**
 * updateメソッドのオプション
 */
export type UpdateOptionsBase = UpdateOptions;

/**
 * deleteメソッドのオプション
 */
export type DeleteOptionsBase = DeleteOptions;

/**
 * コンフィグ
 */
export type DataSourceConfigBase<
  D = any,
  H extends DataSourceEventHandlersBase<D> = DataSourceEventHandlersBase<D>,
> = EventedConfig<H> &
  DataSourceConfig &
  CreateOptionsBase &
  ReadOptionsBase &
  UpdateOptionsBase &
  DeleteOptionsBase & {
    /**
     * リソースを取得する際に変換が必要な場合に指定する
     */
    reader?: string | ReaderConfig | Reader;

    /**
     * リソースを保存する際に変換が必要な場合に指定する
     */
    writer?: string | WriterConfig | Writer;
  };
