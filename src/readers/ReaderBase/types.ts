import { ConfigurableConfigBase } from '@visue/core/base/ConfigurableBase';
import { ReadOptions, ReaderConfig } from '../types';

/**
 * readメソッドのオプション
 */
export type ReadOptionsBase = ReadOptions;

/**
 * Readerのコンフィグ
 */
export type ReaderConfigBase<
  I = any,
  C extends ReaderConfigBase<I, any> = ReaderConfigBase<I, any>,
> = ConfigurableConfigBase & ReaderConfig<I, C>;
