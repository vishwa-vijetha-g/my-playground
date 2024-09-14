import {test,expect} from '@playwright/test';

let userid;

test('GET',async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2');
    const responseJson = await response.json();
    console.log(responseJson);
    await expect(response.status()).toBe(200);
});

test('POST',async({request})=>{
    const requestJson = {
        'name': 'vishwa vijetha',
        'job': 'automation engineer'
    }
    const requestHeaders = {
        'accept':'application/json'
    }
    const response = await request.post('https://reqres.in/api/users',{data:requestJson,headers:requestHeaders});
    const responseJson = await response.json();
    userid = responseJson.id;
    console.log(responseJson);
    await expect(response.status()).toBe(201);
});

test('PUT',async({request})=>{
    const requestJson = {
        'name': 'vishwa vijetha',
        'job': 'automation engineer pro'
    }
    const requestHeaders = {
        'accept':'application/json'
    }
    const response = await request.post(`https://reqres.in/api/users/${userid}`,{data:requestJson,headers:requestHeaders});
    const responseJson = await response.json();
    console.log(responseJson);
    await expect(response.status()).toBe(201);
});

test('DELETE',async({request})=>{
    const response = await request.post(`https://reqres.in/api/users/${userid}`);
    await expect(response.status()).toBe(201);
});