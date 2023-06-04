// 用户信息
const userInfo = {
  loginName: 'admin',
  token: 'ZHNVc2VyOi9sb2dpblVzZXIvYWRtaW4vMjc5OTE1N2YtN2QzMC00NGE2LTk1ODMtNzkyZDA4ZjY0YzJl',
  userId: '1',
  userName: '管理员'
};

/**
 * 登录
 */
const login = {
  url: /\/user\/login/,
  type: 'post',
  response: ({ body }) => {
    const result = {
      code: 200,
      msg: '',
      data: null
    };
    const { email, password } = JSON.parse(body);
    if (email && password !== '888888') {
      result.code = 'error';
      result.msg = '账户名或密码错误（888888）';
    } else {
      result.code = 'complete';
      result.data = userInfo;
    }
    return result;
  }
};

/**
 * 退出登录
 */
const logout = {
  url: /\/sso\/logout/,
  type: 'get',
  response: () => {
    const result = {
      code: 200,
      data: 'testetst'
    };
    return result;
  }
};
export default [login, logout];
