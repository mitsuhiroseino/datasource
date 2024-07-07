import { ReadOptionsBase, ReaderConfigBase } from '../ReaderBase';

/**
 * readメソッドのオプション
 */
export type ArrayReadOptions = ReadOptionsBase & {
  /**
   * 配列の各要素とフィールド名のマッピング
   */
  names: { [name: string]: number } | string[];
};

/**
 * コンフィグ
 */
export type ArrayReaderConfig = ReaderConfigBase & ArrayReadOptions;
