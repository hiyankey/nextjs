type ClassNames = string | { [key: string]: boolean };

export const cx = (...classnames: ClassNames[]): string => {
  return classnames
    .map((item) => {
      if (typeof item === 'string') {
        return item;
      }
      if (typeof item === 'object') {
        return Object.keys(item)
          .map((key) => (item[key] ? key : ''))
          .filter(Boolean)
          .join(' ');
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
};
