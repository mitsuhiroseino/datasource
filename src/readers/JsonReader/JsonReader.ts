import ReaderBase from '../ReaderBase';
import { JsonReadOptions, JsonReaderConfig } from './types';

/**
 * JSONのリーダー
 */
class JsonReader extends ReaderBase<string, JsonReadOptions, JsonReaderConfig> {
  protected _read(data: string, config: JsonReaderConfig): any {
    return JSON.parse(data, config.reviver);
  }
}
export default JsonReader;
