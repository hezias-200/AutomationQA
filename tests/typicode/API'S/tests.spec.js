const { test, expect } = require('@playwright/test');




test('Post Data @typicode', async ({ request }) => {
    const res = await request.post(`https://jsonplaceholder.typicode.com/posts`, {
        data: {
            title: 'hezi',
            body: 'erez',
            userId: 19942
        }
    });
    const data = JSON.parse((await res.body()).toString());
    console.log(data);
});

test('Get Data @typicode', async ({ request }) => {
    const res = await request.get(`https://jsonplaceholder.typicode.com/posts/1')`);
    const newData = (await res.body()).toString();
    console.log(newData+ "test");
});

