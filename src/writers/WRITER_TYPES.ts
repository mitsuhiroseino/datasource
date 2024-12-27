/**
 * 種別
 */
const WRITER_TYPES = {
  /**
   * 配列のライター
   */
  ARRAY: 'array',

  /**
   * JSONのライター
   */
  JSON: 'json',

  /**
   * オブジェクトのライター
   */
  OBJECT: 'object',
} as const;
export default WRITER_TYPES;
