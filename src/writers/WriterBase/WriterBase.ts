import ConfigurableBase from '@visue/core/ConfigurableBase';
import asArray from '@visue/utils/array/asArray';
import assignIdentifier from '@visue/utils/identifier/assignIdentifier';
import { Writer } from '../types';
import { WriteOptionsBase, WriterConfigBase } from './types';

/**
 * writer
 */
abstract class WriterBase<
    D = any,
    O extends WriteOptionsBase = WriteOptionsBase,
    C extends WriterConfigBase = WriterConfigBase,
  >
  extends ConfigurableBase<C>
  implements Writer<D, O>
{
  readonly isWriter = true;

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

  write<R = unknown>(data: D, options?: O): R {
    const config = this._withConfig(options),
      items = asArray(data);
    return this._write(config.array ? items : items[0] || {}, config);
  }

  protected abstract _write(data: any, config: C): any;
}
export default WriterBase;
