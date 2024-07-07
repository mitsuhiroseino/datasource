import { ConfigurableConfigBase } from '@visue/core/base/ConfigurableBase';
import { WriteOptions, WriterConfig } from '../types';

/**
 * writeメソッドのオプション
 */
export type WriteOptionsBase = WriteOptions;

/**
 * コンフィグ
 */
export type WriterConfigBase = ConfigurableConfigBase & WriterConfig & WriteOptionsBase;
