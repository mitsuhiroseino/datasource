import EasyFactory from '@visue/factory/easy/EasyFactory';
import ArrayReader from './ArrayReader';
import JsonReader from './JsonReader';
import ObjectReader from './ObjectReader';
import { READER_TYPES } from './constants';
import { Reader } from './types';

const ReaderFactory = new EasyFactory<Reader>({
  category: 'reader',
  products: [
    { type: READER_TYPES.ARRAY, Class: ArrayReader },
    { type: READER_TYPES.JSON, Class: JsonReader },
    { type: READER_TYPES.OBJECT, Class: ObjectReader },
  ],
});
export default ReaderFactory;
