import { createStore } from 'vuex';
import { DetailData, PropsData, ColumnProps, PostProps } from '../mock';
export { ColumnProps, PostProps } from '../mock';

interface IUserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: IUserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: DetailData,
    posts: PropsData,
    user: { isLogin: false }
  },
  getters: {
    getColumnById: state => (id: number) => {
      return state.columns.find(c => c.id === id);
    },
    getPostsById: state => (cid: number) => {
      return state.posts.filter(c => c.columnId === cid);
    }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'vicki', columnId: 1 };
    },
    createPost(state, newPost) {
      state.posts.push(newPost);
    }
  },
  actions: {},
  modules: {}
});

export default store;
