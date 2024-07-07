import ReaderBase from '../ReaderBase';
import { ArrayReadOptions, ArrayReaderConfig } from './types';

/**
 * 配列のリーダー
 */
class ArrayReader<I extends any[] = any[]> extends ReaderBase<I, ArrayReadOptions, ArrayReaderConfig> {
  /**
   * indexと項目名のマッピング
   */
  private _names: { [name: string]: number };

  constructor(config: ArrayReaderConfig) {
    super(config);
    const { names } = this.config;
    if (Array.isArray(names)) {
      // namesが配列の場合はオブジェクト形式に変換
      this._names = names.reduce((result, name, index) => {
        if (name != null) {
          result[name] = index;
        }
        return result;
      }, {});
    } else {
      this._names = names;
    }
  }

  protected _read(data: any, config: ArrayReaderConfig): any {
    let items;
    if (!data) {
      return [];
    }
    if (!data.length || Array.isArray(data[0])) {
      // 0件または配列配下の要素も配列の場合は複数件のデータ
      items = data;
    } else {
      // フラットな配列の場合は1行分でデータ
      items = [data];
    }
    return items.map((item) => this._readItem(item));
  }

  /**
   * 1要素分のデータを読み込む
   * @param item
   * @returns
   */
  private _readItem(item: any[]): any {
    const length = item.length;
    let result = {};
    for (const name in this._names) {
      const index = this._names[name];
      if (name != null && index < length) {
        result[name] = item[index];
      }
    }
    return result;
  }
}
export default ArrayReader;
