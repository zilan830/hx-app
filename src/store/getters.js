const getters = {
    direction: state => state.router.direction,
    routeIndex: state => state.router.routeIndex,
    isLoading: state => state.apis.isLoading,
    user: state => state.apis.user
};

export default getters;