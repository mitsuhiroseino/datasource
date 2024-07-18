import ConfigurableBase from '@visue/core/ConfigurableBase';
import asArray from '@visue/utils/array/asArray';
import assignIdentifier from '@visue/utils/identifier/assignIdentifier';
import cloneDeep from 'lodash/cloneDeep';
import { Reader } from '../types';
import { ReadOptionsBase, ReaderConfigBase } from './types';

/**
 * リーダー
 */
abstract class ReaderBase<
    D = any,
    O extends ReadOptionsBase = ReadOptionsBase,
    C extends ReaderConfigBase = ReaderConfigBase,
  >
  extends ConfigurableBase<C>
  implements Reader<D, O>
{
  readonly isReader = true;

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 識別名
   */
  readonly $idName?: string;

  constructor(config?: C) {
    super(config);
    assignIdentifier(this, this.config);
  }

  read<R = any>(data: D, options?: O): R {
    let result: R | undefined = undefined;
    const config = this._withConfig(options);
    try {
      result = this._read(data, config);
    } catch (e) {}
    if (result === undefined) {
      // 読み込めなかった場合
      const { defaultValueFn, defaultValue } = config;
      let result;
      if (defaultValueFn) {
        // デフォルト値を作って返す
        result = defaultValueFn(data, config);
      } else if (defaultValue !== undefined) {
        // デフォルト値を返す
        result = cloneDeep(defaultValue);
      } else {
        // エラー
        throw new Error(`${data} is incorrect data.`);
      }
    }
    const resultArray = asArray(result);
    return (config.array ? resultArray : resultArray[0] || {}) as R;
  }

  /**
   * 種別毎のデータ読み込み処理
   * @param data
   * @param config
   */
  protected abstract _read(data: D, config: C): any;
}
export default ReaderBase;
