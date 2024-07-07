import { WriteOptionsBase, WriterConfigBase } from '../WriterBase';

/**
 * writeメソッドのオプション
 */
export type ObjectWriteOptions = WriteOptionsBase;

/**
 * コンフィグ
 */
export type ObjectWriterConfig = WriterConfigBase & ObjectWriteOptions;
