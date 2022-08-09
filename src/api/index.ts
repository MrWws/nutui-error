import useAxiosApi from '/@/utils/useAxiosApi';

/**
 * 账号密码登录
 * @returns UseAxiosReturn
 */
export function loginPassword() {
  return useAxiosApi(`/api/login`, {
    method: 'POST',
    data: { name: '123' },
  });
}

// 授信申请
export function getCreditApplicationResults(params) {
  return useAxiosApi('/check/apply', {
    method: 'POST',
    data: params,
  });
}
// 授信查询
export function getCreditQueryResults(params) {
  return useAxiosApi('/check/query', {
    method: 'POST',
    data: params,
  });
}