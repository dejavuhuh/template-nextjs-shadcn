import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: true,
    react: {
      overrides: {
        'style/jsx-sort-props': ['error', {
          shorthandFirst: true,
          reservedFirst: true,
          multiline: 'last',
          callbacksLast: true,
        }],
      },
    },
  },
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
)
