async function myFunc() {
    // return 'hello';

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hallo'), 1000)
    })

        const error = false;

        if (!error) {
            const res = await promise;
            return res;
        } else {
            await Promise.reject(new Error('Something went wrong'))
        }

        // const res = await promise
        // return res
    }

    myFunc()
        .then(res => console.log(res))
        .catch(err=> console.log(err))

// async await using fetch
