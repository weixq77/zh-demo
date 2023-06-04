// mock数据初始化
import Mock from 'mockjs';
import { MockParams } from './mockType';
// 设置延长时间
Mock.setup({
  timeout: '500'
});

// 获取所有的文件
const mockFile: any = require.context('./modules', false, /\.js$/);
let mocks: any[] = [];

mockFile.keys().forEach((key: string) => {
  const el: any = mockFile(key).default[0];
  mocks = mocks.concat(el);
});

mocks.forEach((v: MockParams) => {
  Mock.mock(v.url, v.type, v.response);
});
