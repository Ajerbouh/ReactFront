import {store} from '../index';

    const URL = 'wss://srrj6.sse.codesandbox.io/';
    let ws = new WebSocket(URL);

    ws.onopen = () => {
        console.log('connected')
    }

    ws.onmessage = data => {

            try{
                const action = JSON.parse(data.data);
                store.dispatch(action)
            }
            catch (e) {
                console.warn(e)
            };
    };


    export default ws

