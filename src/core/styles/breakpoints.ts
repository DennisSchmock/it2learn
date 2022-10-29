export enum SIZE_NAMES {
  MICRO = "micro",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XL = "xl",
  XXL = "xxl",
}

export type Breakpoints = Record<
  SIZE_NAMES,
  | number
  | {
      small: number;
      medium: number;
      large: number;
    }
>;

export const sizes: Record<SIZE_NAMES, number> = {
  [SIZE_NAMES.MICRO]: 300,
  [SIZE_NAMES.SMALL]: 600,
  [SIZE_NAMES.MEDIUM]: 900,
  [SIZE_NAMES.LARGE]: 1200,
  [SIZE_NAMES.XL]: 1500,
  [SIZE_NAMES.XXL]: 2500,
};

const breakpoints: Record<SIZE_NAMES, string> = {
  [SIZE_NAMES.MICRO]: `(max-width: ${sizes.small}px) and (min-width: ${sizes.micro}px)`,
  [SIZE_NAMES.SMALL]: `(max-width: ${sizes.medium}px) and (min-width: ${sizes.small}px)`,
  [SIZE_NAMES.MEDIUM]: `(max-width: ${sizes.large}px) and (min-width: ${sizes.medium}px)`,
  [SIZE_NAMES.LARGE]: `(max-width: ${sizes.xl}px) and (min-width: ${sizes.large}px)`,
  [SIZE_NAMES.XL]: `(max-width: ${sizes.xxl}px) and (min-width: ${sizes.xl}px)`,
  [SIZE_NAMES.XXL]: `(min-width: ${sizes.xxl}px)`,
};

export default breakpoints;
