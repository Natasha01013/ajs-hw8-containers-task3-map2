export class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy'],
        ]);

        this.userSettings = new Map();
    }

    set(key, value) {
        if (this.defaultSettings.has(key)) {
            this.userSettings.set(key, value);
        } else {
            throw new Error(`Invalid setting: ${key}`);
        }
    }

    get settings() {
        const finalSettings = new Map(this.defaultSettings);
        this.userSettings.forEach((value, key) => {
            finalSettings.set(key, value);
        });
        return finalSettings;
    }
}