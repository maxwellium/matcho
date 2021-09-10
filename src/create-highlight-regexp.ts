export const createHighlightRegexp = (
  findText: string,
  stopRegexpString = '',
  flags = 'u'
) => new RegExp(
  `(${ findText
    .replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&')
    .split('')
    .join(stopRegexpString)
  })`,
  flags
);
