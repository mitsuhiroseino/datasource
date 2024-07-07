import EasyFactory from '@visue/factory/easy/EasyFactory';
import ArrayWriter from './ArrayWriter';
import JsonWriter from './JsonWriter';
import ObjectWriter from './ObjectWriter';
import { WRITER_TYPES } from './constants';
import { Writer } from './types';

const WriterFactory = new EasyFactory<Writer>({
  category: 'writer',
  products: [
    { type: WRITER_TYPES.ARRAY, Class: ArrayWriter },
    { type: WRITER_TYPES.JSON, Class: JsonWriter },
    { type: WRITER_TYPES.OBJECT, Class: ObjectWriter },
  ],
});
export default WriterFactory;
