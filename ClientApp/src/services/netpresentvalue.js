export const getAllService = () => {
    return new Promise((resolve, reject) => {
        fetch("api/netpresentvalue", {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            resolve(data);
        });
    })
}

export const byIdService = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`api/netpresentvalue/${id}`, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            resolve(data);
        });
    })
}

export const addService = (data) => {
    return new Promise((resolve, reject) => {
        fetch("api/netpresentvalue", {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(data => {
            resolve(data);
        });
    })
}


