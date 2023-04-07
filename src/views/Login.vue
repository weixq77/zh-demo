<template>
  <div class="container">
    <validate-form @form-submit="onSubmitForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput v-model="emailVal" type="email" :rules="emailRules" ref="inputRef" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <ValidateInput v-model="pwdVal" type="password" :rules="pwdRules" />
      </div>
      <template #submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import ValidateInput, { IRuleProp } from '@/components/Form/ValidateInput.vue';
  import ValidateForm from '@/components/Form/ValidateForm.vue';

  export default defineComponent({
    name: 'Home',
    components: {
      ValidateInput,
      ValidateForm
    },
    setup(props) {
      const router = useRouter();
      const store = useStore();

      const inputRef = ref<any>(null);
      const emailVal = ref('');
      const emailRules: IRuleProp[] = [
        { type: 'required', message: '邮箱不能为空' },
        { type: 'email', message: '邮箱不正确' }
      ];

      const pwdVal = ref('');
      const pwdRules: IRuleProp[] = [{ type: 'required', message: '密码不能为空' }];

      const onSubmitForm = (result: boolean) => {
        if (result) {
          store.commit('login');
          router.push('/');
        }
      };

      return {
        emailRules,
        emailVal,
        pwdRules,
        pwdVal,
        onSubmitForm,
        inputRef
      };
    }
  });
</script>
