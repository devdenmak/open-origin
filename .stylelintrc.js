const prettierConfig = require('./.prettierrc.js')

module.exports = {
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': [true, prettierConfig],
    'selector-class-pattern': null,
    'block-no-empty': null,
    'value-keyword-case': null,
    'selector-no-vendor-prefix': null,
    'order/order': [
      'declarations',
      // Медиаусловия
      {
        type: 'at-rule',
        name: 'media',
      },
      // Псевдоселекторы и псевдоэлементы
      {
        type: 'rule',
        selector: '^&:\\w+$',
      },
      // Сторонние вложенные селекторы
      {
        type: 'rule',
        selector: '^\\.[-_a-zA-Z0-9]+',
      },
      // Элементы блока
      {
        type: 'rule',
        selector: '^&__[-a-z0-9]+',
      },
      // Модификаторы блока
      {
        type: 'rule',
        selector: '^&--[-a-z0-9]+',
      },
    ],
    'order/properties-order': [
      [
        {
          properties: [
            'content',
            'box-sizing',
            'display',
            'flex',
            'flex-wrap',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'order',
            'grid',
            'grid-area',
            'grid-auto-*',
            'grid-column',
            'grid-column-*',
            'grid-gap',
            'grid-row',
            'grid-row-*',
            'grid-template',
            'grid-template-*',
            'position',
            'z-index',
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-*',
            'border',
            'border-*',
            'padding',
            'padding-*',
            'overflow',
            'overflow-*',
          ],
        },
        {
          properties: [
            'transform',
            'transform-*',
            'backface-visibility',
            'perspective',
            'perspective-origin',
            'transition',
            'transition-*',
            'animation',
            'animation-*',
          ],
        },
      ],
      {
        severity: 'warning',
      },
    ],
  },
}
