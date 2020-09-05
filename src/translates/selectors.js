import { createSelector } from 'reselect';

export const getTranslates = state => state.translates;

export const getLocale = createSelector(
    getTranslates,
    translates => translates.locale,
);

export const getDictionary = createSelector(
    getTranslates,
    translates => translates.dictionary,
);