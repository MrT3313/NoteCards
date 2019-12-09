
const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
};

export default onRedirectCallback