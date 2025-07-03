module.exports = {
  content: [
    "./index.html",
    "./complete-classes.html"
  ],
  theme: {
    extend: {
      // Расширяем все возможные значения
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '28': '7rem',
        '29': '7.25rem',
        '31': '7.75rem',
        '33': '8.25rem',
        '35': '8.75rem',
        '37': '9.25rem',
        '39': '9.75rem',
        '68': '17rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '124': '31rem',
        '128': '32rem'
      },
      colors: {
        'gray-25': '#fcfcfc',
        'gray-75': '#f7f7f7',
        'gray-150': '#eeeeee',
        'gray-250': '#e4e4e4',
        'gray-350': '#c7c7c7',
        'gray-450': '#9d9d9d',
        'gray-550': '#737373',
        'gray-650': '#525252',
        'gray-750': '#404040',
        'gray-850': '#262626',
        'gray-950': '#0a0a0a'
      }
    }
  },
  plugins: [],
  // Включаем ВСЕ возможные классы через safelist
  safelist: [
    // Все варианты с важными префиксами
    {pattern: /^(sm|md|lg|xl|2xl):/, variants: ['hover', 'focus', 'active', 'disabled']},
    {pattern: /^(hover|focus|active|disabled):/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    {pattern: /^(group-hover|group-focus):/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    {pattern: /^(first|last|odd|even):/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все утилиты spacing (margin, padding)
    {pattern: /^[mp][trblxy]?-/, variants: ['hover', 'focus', 'sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все размеры
    {pattern: /^[wh]-/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    {pattern: /^(min|max)-[wh]-/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все цвета
    {pattern: /^(text|bg|border|ring|shadow)-/, variants: ['hover', 'focus', 'active', 'sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все flexbox и grid
    {pattern: /^(flex|grid|col|row)-/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    {pattern: /^(items|justify|content|self|place)-/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    {pattern: /^gap-/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все typography
    {pattern: /^(text|font|leading|tracking|decoration)-/, variants: ['hover', 'focus', 'sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все borders и rounds
    {pattern: /^(border|rounded)-/, variants: ['hover', 'focus', 'sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все position и z-index
    {pattern: /^(top|right|bottom|left|inset)-/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    {pattern: /^z-/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все transform и animation
    {pattern: /^(transform|rotate|scale|translate|skew)-/, variants: ['hover', 'focus', 'active', 'sm', 'md', 'lg', 'xl', '2xl']},
    {pattern: /^animate-/, variants: ['hover', 'focus', 'sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все transition
    {pattern: /^(transition|duration|ease)-/, variants: ['hover', 'focus', 'sm', 'md', 'lg', 'xl', '2xl']},
    
    // Все остальные утилиты
    {pattern: /^(opacity|shadow|blur|brightness|contrast|grayscale|hue|invert|saturate|sepia)-/, variants: ['hover', 'focus', 'sm', 'md', 'lg', 'xl', '2xl']},
    {pattern: /^(cursor|select|pointer|resize)-/, variants: ['hover', 'focus', 'sm', 'md', 'lg', 'xl', '2xl']},
    {pattern: /^(overflow|whitespace|break|content)-/, variants: ['sm', 'md', 'lg', 'xl', '2xl']},
    
    // Важные классы отдельно
    'container', 'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table',
    'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group',
    'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid',
    'contents', 'list-item', 'hidden', 'static', 'fixed', 'absolute', 'relative', 'sticky'
  ]
}
