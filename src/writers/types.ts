import { Identifiable, IdentifiableConfig } from '@visue/utils';

/**
 * writeメソッドのオプション
 */
export type WriteOptions = {};

/**
 * コンフィグ
 */
export type WriterConfig = IdentifiableConfig &
  WriteOptions & {
    /**
     * 出力は配列形式
     */
    array?: boolean;
  };

/**
 * ライターのインターフェイス
 */
export interface Writer<D = any, O extends WriteOptions = WriteOptions> extends Identifiable {
  /**
   * dataを出力用に変換する
   */
  write<R = any>(data: D, options?: O): R;
}
