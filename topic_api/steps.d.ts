/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Puppeteer, REST {} // ✅ Thêm REST ở đây
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
