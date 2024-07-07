import ReaderBase from '../ReaderBase';
import { ObjectReadOptions, ObjectReaderConfig } from './types';

/**
 * オブジェクトのリーダー
 */
class ObjectReader extends ReaderBase<any, ObjectReadOptions, ObjectReaderConfig> {
  protected _read(data: any, config: ObjectReaderConfig): any {
    return data;
  }
}
export default ObjectReader;
