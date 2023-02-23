export const setHiddenOverFlow = (state: Boolean, element: HTMLElement | null) => {
    
  if (element !== null && state) {
    return (element.style.overflow = 'hidden');
  } else if (element !== null && !state) {
    return (element.style.overflow = '');
  }
};
