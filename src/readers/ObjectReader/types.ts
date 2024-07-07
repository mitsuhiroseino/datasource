import { ReadOptionsBase, ReaderConfigBase } from '../ReaderBase';

/**
 * readメソッドのオプション
 */
export type ObjectReadOptions = ReadOptionsBase;

/**
 * ObjectReaderのコンフィグ
 */
export type ObjectReaderConfig = ReaderConfigBase & ObjectReadOptions;
