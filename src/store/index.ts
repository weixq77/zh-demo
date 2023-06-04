import { createStore } from 'vuex';
import { genColumns, genPost } from '@/api';

// ================ 变量类型指定   start =========
interface IUserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: string;
}

interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
}

export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}

export interface PostProps {
  _id: string;
  title: string;
  excerpt?: string;
  image?: ImageProps;
  content?: string;
  columnId: string;
  createdAt: string;
}

// ================ 变量类型   end =========

//  store的变量类型指定
export interface GlobalDataProps {
  loading: boolean;
  columns: ColumnProps[];
  posts: PostProps[];
  user: IUserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    loading: false,
    columns: [],
    posts: [],
    user: { isLogin: false }
  },
  getters: {
    getColumnById: state => (id: string) => {
      return state.columns.find(c => c._id === id);
    }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'vicki', columnId: '1' };
    },
    createPost(state, newPost) {
      state.posts.push(newPost);
    },
    fetchColumn(state, rawData) {
      state.columns = rawData.data.list;
    },
    fetchPost(state, rawData) {
      state.posts = rawData.data.list;
    },
    setLoading(state, status) {
      state.loading = status;
    }
  },
  actions: {
    async fetchColumns({ commit }) {
      commit('setLoading', true);
      const res = await genColumns();
      commit('fetchColumn', res);
      commit('setLoading', false);
    },
    async fetchPosts({ commit }, data) {
      commit('setLoading', true);
      const res = await genPost(data);
      commit('fetchPost', res);
      commit('setLoading', false);
    }
  }
});

export default store;
