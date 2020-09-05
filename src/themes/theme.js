import light from './light';

const matrixes = { light };

export const getStylesByTheme = theme => {
    const matrix = matrixes[theme];
    return {
        titleColor: matrix.colors.color_02,
        titleColorHover: matrix.colors.color_03,
    };
};