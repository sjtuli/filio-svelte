export const NO_MOTION_PREFERENCE_QUERY =
  '(prefers-reduced-motion: no-preference)';
export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const DEBOUNCE_TIME = 100;

export interface IDesktop {
  isDesktop: boolean;
}
