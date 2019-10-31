import {store} from '../index';

    const URL = 'ws://172.16.64.11:8080';
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

