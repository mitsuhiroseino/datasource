import { WriteOptionsBase, WriterConfigBase } from '../WriterBase';

/**
 * writeメソッドのオプション
 */
export type ArrayWriteOptions = WriteOptionsBase;

/**
 * コンフィグ
 */
export type ArrayWriterConfig = WriterConfigBase &
  ArrayWriteOptions & {
    /**
     * 配列の各要素とフィールド名のマッピング
     */
    names: { [name: string]: number } | string[];
  };
