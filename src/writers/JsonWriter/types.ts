import { JsonStringifyOptions } from '@visue/utils';
import { WriteOptionsBase, WriterConfigBase } from '../WriterBase';

/**
 * writeメソッドのオプション
 */
export type JsonWriteOptions = WriteOptionsBase & JsonStringifyOptions;

/**
 * コンフィグ
 */
export type JsonWriterConfig = WriterConfigBase & JsonWriteOptions;
