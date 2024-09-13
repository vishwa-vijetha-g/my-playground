import {test,expect} from '@playwright/test';

test.beforeAll('Before All',async()=>{
    console.log('this is before all.')
})

test.afterAll('After All',async()=>{
    console.log('this is after all.')
})

test.beforeEach('Before Each',async()=>{
    console.log('this is before each.')
})

test.afterEach('After Each',async()=>{
    console.log('this is after each.')
})


test.describe('Test Group 1', async()=>{

    test('Test 1',async()=>{
        console.log('this is test 1.');
    });
    
    test('Test 2',async()=>{
        console.log('this is test 2.');
    });

})


test.describe('Test Group 2', async()=>{

    test('Test 3',async()=>{
        console.log('this is test 3.');
    });
    
    test('Test 4',async()=>{
        console.log('this is test 4.');
    });
    
})