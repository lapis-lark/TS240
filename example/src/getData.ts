async function getData(url: string): Promise<void> {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    } 
    catch(e: unknown) {
        if (typeof e === 'string') {
            console.log(e);
        } else if (e instanceof Error) {
            console.log('its an error!', e);
        } else {
            throw new Error('unknown error! le panic!');
        }
    }
}

