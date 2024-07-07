import WriterBase from '../WriterBase';
import { JsonWriteOptions, JsonWriterConfig } from './types';

/**
 * JSON用のライター
 */
class JsonWriter extends WriterBase<any, JsonWriteOptions, JsonWriterConfig> {
  protected _write(data: any, config: JsonWriterConfig): string {
    return JSON.stringify(data, config.replacer, config.space);
  }
}
export default JsonWriter;
