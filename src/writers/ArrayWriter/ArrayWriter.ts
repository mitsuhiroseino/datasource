import { AnyObject } from '@visue/utils';
import mapFrom from '@visue/utils/array/mapFrom';
import WriterBase from '../WriterBase';
import { ArrayWriteOptions, ArrayWriterConfig } from './types';

/**
 * 配列用のライター
 */
class ArrayWriter extends WriterBase<any, ArrayWriteOptions, ArrayWriterConfig> {
  /**
   * indexと項目名のマッピング
   */
  private _names: { [name: string]: number };

  constructor(config: ArrayWriterConfig) {
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

  protected _write(data: any, config: ArrayWriterConfig): any[][] {
    return mapFrom(data, this._writeItem.bind(this));
  }

  /**
   * 1要素分のデータを出力する
   * @param item
   * @returns
   */
  private _writeItem(item: AnyObject): any[] {
    let result: any[] = [];
    for (const name in this._names) {
      const index = this._names[name];
      result[index] = item[name];
    }
    return result;
  }
}
export default ArrayWriter;
