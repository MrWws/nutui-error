import { getCreditApplicationResults, getCreditQueryResults } from '/@/api';
import { defineStore } from 'pinia';
// import router from '@/router'

// const router = useRouter()
// 用户授信仓库
export const userCreditInfoStore = defineStore({
  id: 'userCreditInfo',
  state: () => {
    return {
      info: {},
    };
  },
  actions: {
    userCreditInfo(params) {
      return new Promise((resolve, reject) => {
        getCreditApplicationResults(params)
          .then((res) => {
            this.info = res.data.value.data;
            console.log(res);
            console.log(this.info);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    userCreditQueryInfo(params) {
      return new Promise((resolve, reject) => {
        getCreditQueryResults(params)
          .then((res) => {
            // this.info2 = res.data.data会很卡，控制台不断输出警告
            this.info = res.data.value.data;
            console.log(res);
            console.log(this.info);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },

  persist: true,
});
