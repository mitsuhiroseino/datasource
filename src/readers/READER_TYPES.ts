/**
 * 種別
 */
const READER_TYPES = {
  /**
   * 配列のリーダー
   */
  ARRAY: 'array',

  /**
   * JSONのリーダー
   */
  JSON: 'json',

  /**
   * オブジェクトのリーダー
   */
  OBJECT: 'object',
} as const;
export default READER_TYPES;
