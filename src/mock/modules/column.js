import Mock from 'mockjs';

export default [
  {
    url: /\/columns/,
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          count: 0,
          pageSize: 0,
          currentPage: 0,
          list: new Array(9).fill({}).map(v =>
            Mock.mock({
              _id: '@id',
              title: '专栏名称名称',
              description: '@paragraph',
              avatar: {
                _id: '@id',
                url: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
                createdAt: '@date()'
              },
              author: '@cname()',
              createdAt: '@date()'
            })
          )
        }
      };
    }
  }
];
