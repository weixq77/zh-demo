<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @form-submit="onSubmitForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">文章标题</label>
        <ValidateInput
          v-model="titleVal"
          type="text"
          placeholder="请输入文章标题"
          :rules="titleRules"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">文章详情</label>
        <ValidateInput
          v-model="contentVal"
          type="text"
          tag="textarea"
          placeholder="请输入文章详情"
          rows="10"
          :rules="contentRules"
        />
      </div>
      <template #submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { GlobalDataProps, PostProps } from '../store';
  import ValidateInput, { IRuleProp } from '@/components/Form/ValidateInput.vue';
  import ValidateForm from '@/components/Form/ValidateForm.vue';

  export default defineComponent({
    name: 'CreatePost',
    components: { ValidateForm, ValidateInput },
    setup() {
      const store = useStore<GlobalDataProps>();
      const router = useRouter();

      const titleVal = ref('');
      const titleRules: IRuleProp[] = [{ type: 'required', message: '文章名称不能为空' }];

      const contentVal = ref('');
      const contentRules: IRuleProp[] = [{ type: 'required', message: '密码不能为空' }];

      const onSubmitForm = (result: boolean) => {
        if (result) {
          const { columnId } = store.state.user;
          if (columnId) {
            const newPost: PostProps = {
              _id: `${new Date().getTime()}`,
              title: titleVal.value,
              content: contentVal.value,
              columnId: columnId,
              createdAt: new Date().toLocaleString()
            };
            store.commit('createPost', newPost);
            // router.push({ name: 'column', params: { id: columnId } });
            router.push(`/column/${columnId}`);
          }
        }
      };

      return {
        titleRules,
        titleVal,
        contentRules,
        contentVal,
        onSubmitForm
      };
    }
  });
</script>

<style lang="less" scoped></style>
