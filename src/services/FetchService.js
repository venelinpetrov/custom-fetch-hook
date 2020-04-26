
export const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: Math.random() },
                { id: 2, name: Math.random() },
            ]);
        }, 2000);
        // setTimeout(() => {
        //     reject('There was an error loaing the data!');
        // }, 2000);
    });
};
