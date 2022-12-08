export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.email;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const getErrorR = state => state.auth.errorR;
export const getErrorL = state => state.auth.errorL;
