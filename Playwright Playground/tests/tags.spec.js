import {test,expect} from '@playwright/test';

test('Test 1 @sanity',async()=>{
    console.log('this is test 1.');
});

test('Test 2 @sanity',async()=>{
    console.log('this is test 2.');
});

test('Test 3 @regression',async()=>{
    console.log('this is test 3.');
});

test('Test 4 @regression',async()=>{
    console.log('this is test 4.');
});

test('Test 5 @sanity @regression',async()=>{
    console.log('this is test 5.');
});