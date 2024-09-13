import {test,expect} from '@playwright/test';

test('Handle Frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allFrames = await page.frames();
    console.log(allFrames.length);

    // const frame1a = await page.frameLocator('frame[src=\'frame_1.html\']');
    // await frame1a.locator('input[name=\'mytext1\']').fill('Hello ');
    
    const frame1b = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1b.getByRole('textbox').fill('World!');

    
    await page.waitForTimeout(5000);
});