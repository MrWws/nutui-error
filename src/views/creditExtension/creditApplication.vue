<template>
  <nut-navbar :left-show="true" title="长银消费金融" @on-click-back="back" />
  <nut-form :model-value="formData" ref="ruleForm">
    <nut-form-item label="姓名" prop="personName" required :rules="[{ required: true, message: '请填写姓名' }]">
      <input class="nut-input-text" @blur="customBlurValidate('name')" v-model="formData.personName" placeholder="请输入姓名" type="text" />
    </nut-form-item>
    <nut-form-item
      label="身份证号"
      prop="personId"
      required
    >
      <input class="nut-input-text" v-model="formData.personId" placeholder="请输入18位身份证号" type="text" />
    </nut-form-item>
    <nut-form-item
      label="文件名"
      prop="contractName"
      required
    >
      <input class="nut-input-text" v-model="formData.contractName" placeholder="请输入文件名" type="text" />
    </nut-form-item>
    <nut-form-item
      label="文件地址"
      prop="contractUrl"
      required
    >
      <input class="nut-input-text" v-model="formData.contractUrl" placeholder="请输入文件地址" type="text" />
    </nut-form-item>
    <nut-form-item
      v-show="$route.path === '/creditApplication'"
      label=" 选择产品"
      prop="loanProdId"
      required
    >
      <nut-radiogroup v-model="formData.loanProdId">
        <nut-radio label="1000">1000长银贷</nut-radio>
        <nut-radio label="1001">1001消费贷</nut-radio>
        <nut-radio label="1002">1002金融贷</nut-radio>
      </nut-radiogroup>
    </nut-form-item>
    <nut-cell>
      <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit">查询</nut-button>
      <nut-button size="small" @click="reset">重置提示状态</nut-button>
    </nut-cell>
  </nut-form>
</template>
<script lang="ts">
  import router from '/@/router';
  import { ref, reactive } from 'vue';
  import { userCreditInfoStore } from '/@/store/modules/credit';
  // import { userStore } from '/@/store/modules/user';

  export default {
    setup() {
      // const userstore = userStore();
      // const store = userCreditInfoStore();
      const formData = reactive({
        personName: '',
        personId: '',
        contractName: '',
        contractUrl: '',
        loanProdId: 0,
      });

    

      return { formData };
    },
  };
</script>
