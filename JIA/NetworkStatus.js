import NetInfo from '@react-native-community/netinfo';

const networkStatusListener = (updateNetworkStatus) => {
  NetInfo.addEventListener(state => {
    const isConnected = state.isConnected;
    const isInternetReachable = state.isInternetReachable;
    updateNetworkStatus(isConnected, isInternetReachable);
  });
};

export default networkStatusListener;
