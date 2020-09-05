import { createSelector } from 'reselect';
export { getStyles } from '../../themes/selectors';

export const getApp = state => state.app;

export const getIsLoading = createSelector(
    getApp,
    app => app.isLoading,
);

export const getIndex = createSelector(
    getApp,
    app => app.index,
);

export const getUsers = createSelector(
    getApp,
    app => app.users,
);