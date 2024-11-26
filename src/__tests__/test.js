import {Settings} from "../settings.js";

test('checking settings method', () => {
    const setting = new Settings([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy'],
    ]);
    setting.set('theme', 'gray');
    setting.set('music', 'rock');
    setting.set('difficulty', 'hard');

    let newSettings = new Map([
        ['theme', 'gray'],
        ['music', 'rock'],
        ['difficulty', 'hard'],
    ]);

    expect(setting.settings).toEqual(newSettings);
})

test('checking settings method witn eror', () => {
    const setting = new Settings([]);
    // setting.set('theme', 'gray');
    // setting.set('music', 'rock');
    // setting.set('difficulty', 'hard');

    // let newSettings = new Map([
    //     ['theme', 'gray'],
    //     ['music', 'rock'],
    //     ['difficulty', 'hard'],
    // ]);

    expect(() => setting.set('invalidSetting', 'value')).toThrow('Invalid setting: invalidSetting');
});