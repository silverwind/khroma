
/* UTILS */

const Utils = {

  checkRange ( number: number, lower: number, upper: number ): void {

    if ( number >= lower && number <= upper ) return;

    throw new Error ( `Value ${number} must be between ${lower} and ${upper}` );

  },

  clamp ( number: number, lower: number, upper: number ): number {

    return Math.min ( upper, Math.max ( lower, number ) );

  },

  padStart ( str: string, char: string, length: number ) {

    if ( str.length >= length ) return str;

    return `${char.repeat ( length - str.length )}${str}`.slice ( - length );

  },

  roundDec ( number: number, decimals: number ): number {

    return Math.round ( number * 10 ** decimals ) / 10 ** decimals;

  },

  /*
   * ==== Units ====
   * CSS has a number of different types of units that our library easily converts between.
   * Here is how we have defined them:
   * 
   * | Name | Short for   | Range |
   * | ---- | ----------- | ----- |
   * | per  | percent     | 0~100 |
   * | dec  | decimal     | 0~255 |
   * | frac | fraction    | 0~1   |
   * | hex  | hexadecimal | 00~FF |
   */

  per2dec ( per: number | string ): number {
    
    return typeof per === 'number' ? 
        Math.round ( 255 * per / 100 ) : 
        Math.round ( 255 * parseFloat ( per ) / 100 );

  },

  per2frac ( per: number | string ): number {

    return typeof per === 'number' ? 
        per / 100 : 
        parseFloat ( per ) / 100;

  },

  per2hex ( per: number,  ): string {
    
    return Utils.dec2hex ( Utils.per2dec ( per ) );
    
  },
  
  frac2dec ( frac: number ): number {

    return Math.round ( 255 * frac );

  },

  frac2per ( frac: number ): number {

    return 100 * frac;

  },

  frac2deg ( frac: number ): number {

    return Math.round ( 360 * frac );

  },

  frac2hex ( frac: number ): string {

    return Utils.padStart ( ( Math.round ( frac * 255 ) ).toString(16), '0', 2 );

  },

  dec2per ( dec: number ): number {

    return ( dec / 255 * 100 );

  },

  dec2frac ( dec: number ): number {

    return ( dec / 255 );

  },

  dec2hex ( dec: number, padding: number = 2 ): string {

    return Utils.padStart ( Math.round ( dec ).toString ( 16 ), '0', padding );

  },

  hex2per ( hex: string ): number {

    return Utils.dec2per ( Utils.hex2dec ( hex ) );

  },

  hex2dec ( hex: string ): number {

    return parseInt ( hex, 16 );

  },

  deg2frac ( deg: number | string ) {

    return typeof deg === 'number' ? 
        Math.abs ( deg % 360 / 360 ) : 
        Math.abs ( parseFloat ( deg ) % 360 / 360 );

  },

  grad2frac ( grad: number | string ) {

    return Number ( grad ) / 400;

  },

  rad2frac ( rad: number | string ) {

    return Number ( rad ) / ( 2 * Math.PI );

  },

  turn2frac ( turn: number | string ) {

    return Number ( turn );

  },
  
  hex2frac ( hex: string ): number {

    return parseInt ( hex, 16 ) / 255;

  }

};

/* EXPORT */

export default Utils;
