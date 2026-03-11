export type ISODateString = string & { readonly __brand: 'ISODate' };

export const toISODate = (s: string): ISODateString => s as ISODateString;
