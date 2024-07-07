import { EventedEvents } from '@visue/core/base/EventedBase';

/**
 * イベント
 */
export const DataSourceEventsBase = {
  ...EventedEvents,
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
