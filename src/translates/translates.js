import en from './en';

const translates = { en };

export const getTranslatesByLocale = locale => {
    return translates[locale];
}