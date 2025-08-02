import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:3000', // ✅ Đúng port API đang chạy
      defaultHeaders: {
        'Content-Type': 'application/json'
      }
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'topic_api'
};

