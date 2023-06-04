import Mock from 'mockjs';

export default [
  {
    url: /\/post\?id=/,
    type: 'post',
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
              title: '文章名称名称',
              content: '@paragraph',
              image: {
                _id: '@id',
                url: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
                createdAt: '@date()'
              },
              author: {
                _id: '@id',
                email: 'string',
                nickName: '@cname()',
                description: 'string',
                avatar: 'string',
                column: 'string',
                createdAt: '@date()'
              },
              createdAt: '@date()'
            })
          )
        }
      };
    }
  }
];

// module.exports = [getCloumn];
