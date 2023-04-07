<template>
  <div class="validate-input-container input-group pb-3">
    <input
      v-if="tag === 'input'"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      v-bind="$attrs"
      @blur="validateInput"
      @input="updateValue"
    />
    <textarea
      v-else-if="tag === 'textarea'"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      v-bind="$attrs"
      @blur="validateInput"
      @input="updateValue"
    />
    <div v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, reactive, onMounted } from 'vue';
  import { emitter } from './ValidateForm.vue';

  const emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;

  export interface IRuleProp {
    type: 'required' | 'email';
    message: string;
  }
  export type RulesProp = IRuleProp[];
  export type TagProp = 'input' | 'textarea';

  export default defineComponent({
    name: 'ValidateInput',
    inheritAttrs: false,
    props: {
      rules: Array as PropType<IRuleProp[]>,
      modelValue: String,
      tag: {
        type: String as PropType<TagProp>,
        default: 'input'
      }
    },
    setup(props, context) {
      const inputRef = reactive({
        val: props.modelValue || '',
        error: false,
        message: ''
      });

      const updateValue = (e: KeyboardEvent) => {
        const targetValue = (e.target as HTMLInputElement).value;
        inputRef.val = targetValue;
        context.emit('update:modelValue', targetValue);
      };

      const validateInput = () => {
        if (props.rules) {
          const allPassed = props.rules.every(rule => {
            let passed = true;
            inputRef.message = rule.message;
            switch (rule.type) {
              case 'required':
                passed = inputRef.val.trim() !== '';
                break;
              case 'email':
                passed = emailReg.test(inputRef.val);
                break;
              default:
                break;
            }
            return passed;
          });
          inputRef.error = !allPassed;
          return allPassed;
        }
        return true;
      };

      onMounted(() => {
        emitter.emit('form-item-created', validateInput);
      });

      return {
        inputRef,
        updateValue,
        validateInput
      };
    }
  });
</script>

<style lang="less" scoped></style>
