import { EVENTED_EVENTS } from '@visue/core/EventedBase';

/**
 * イベント
 */
export const DATA_SOURCE_EVENTS_BASE = {
  ...EVENTED_EVENTS,
  beforeread: 'beforeread',
  read: 'read',
  afterread: 'afterread',
  readerror: 'readerror',
  beforecreate: 'beforecreate',
  create: 'create',
  aftercreate: 'aftercreate',
  createerror: 'createerror',
  beforeupdate: 'beforeupdate',
  update: 'update',
  afterupdate: 'afterupdate',
  updateerror: 'updateerror',
  beforedelete: 'beforedelete',
  delete: 'delete',
  afterdelete: 'afterdelete',
  deleteerror: 'deleteerror',
} as const;
