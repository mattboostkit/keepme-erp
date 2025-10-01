export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function smoothScrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
