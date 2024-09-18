import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt(
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        'defineProps': 'readonly',
        'defineEmits': 'readonly',
        'defineExpose': 'readonly',
        'withDefaults': 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    }
  }
)
