import WriterBase from '../WriterBase';
import { ObjectWriteOptions, ObjectWriterConfig } from './types';

/**
 * オブジェクト用のライター
 */
class ObjectWriter extends WriterBase<any, ObjectWriteOptions, ObjectWriterConfig> {
  protected _write(data: any, config: ObjectWriterConfig): any {
    return data;
  }
}
export default ObjectWriter;
