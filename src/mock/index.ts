export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

// 专栏列表
export const DetailData: ColumnProps[] = [
  {
    id: 1,
    title: '这是一个专栏标题这是一个专栏标题',
    avatar: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
    description: '这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述'
  },
  {
    id: 2,
    title: '这是一个专栏标题这是一个专栏标题这是一个标题',
    avatar: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
    description: '这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述'
  },
  {
    id: 3,
    title: '这是一个专栏标题这是一个专栏标题这是一个标题',
    avatar: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
    description: '这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述'
  },
  {
    id: 4,
    title: '这是一个专栏标题这是一个专栏标题这是一个标题',
    // avatar: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
    description: '这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述'
  },
  {
    id: 5,
    title: '这是一个专栏标题这是一个专栏标题这是一个标题',
    // avatar: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
    description: '这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述这是一个专栏描述'
  }
];

export interface PostProps {
  id: number;
  title: string;
  image?: string;
  content: string;
  columnId: number;
  createdAt: string;
}

// 专栏文章详情列表
export const PropsData: PostProps[] = [
  {
    id: 1,
    title: '这是一篇文章这是一篇文章这是一篇文章',
    content: '这是文章内容这是文章内容这是文章内容',
    image: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
    createdAt: '2023-04-05',
    columnId: 1
  },
  {
    id: 2,
    title: '这是一篇文章这是一篇文章这是一篇文章',
    content: '这是文章内容这是文章内容这是文章内容',
    image: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
    createdAt: '2023-04-05',
    columnId: 2
  },
  {
    id: 3,
    title: '这是一篇文章这是一篇文章这是一篇文章',
    content: '这是文章内容这是文章内容这是文章内容',
    // image: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
    createdAt: '2023-04-05',
    columnId: 1
  },
  {
    id: 4,
    title: '这是一篇文章这是一篇文章这是一篇文章',
    content: '这是文章内容这是文章内容这是文章内容',
    // image: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5546.jpg',
    createdAt: '2023-04-05',
    columnId: 3
  }
];
