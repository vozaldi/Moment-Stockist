import * as CONFIG from '../config.json';
import * as CONFIG_PROD from '../config.prod.json';

type ConfigType = typeof CONFIG & typeof CONFIG_PROD;

/* Development or Production */
export const isDev = process.env.NODE_ENV === 'development';

/**
 * Get value from config.json
 * 
 * @param {string} key Config key
 * @returns mixed
 */
export const appConfig = (key: keyof ConfigType): any | null => {
  // Dev mode use CONFIG
  const result = (isDev ? CONFIG[key] : (
    // Get from CONFIG_PROD with fallback of CONFIG
    CONFIG_PROD[key as keyof typeof CONFIG_PROD] || CONFIG[key]
  ));

  return undefined === typeof result ? null : result;
};

export const isExperiment = (key: string | string[]): boolean => {
  const keys = 'string' === typeof key ? [key] : key;
  const experiments: string[] = appConfig('experiments' as any) || [];

  return !!keys.find((item) => experiments.indexOf(item) >= 0);
};
