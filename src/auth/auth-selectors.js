export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.email;
export const selectIsRefreshing = state => state.auth.isRefreshing;
