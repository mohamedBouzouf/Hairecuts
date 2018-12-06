

export function PostData(type, userData) {
    let BaseURL = 'https://api.maerera';

    return new Promise((resolve, reject) => (


        fetch(BaseURL + type, {
            method: 'Post',
            body: JSON.stringify(userData)
        }).then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            })

    ));
}
