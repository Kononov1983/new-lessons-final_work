const {arr, nativeNull} = require(`./01.js`)

describe('arr', () => {
    test('arr length', () => {
        expect(arr).toHaveLength(15);
    });
    test('arr contain', () => {
        expect(arr).toContainEqual({title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        description: '15X28.8 г',
        img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-31.jpg?raw=true',
        price: '48,76T',
        barcode: 'Штрихкод: 4604049097548',
        producer: 'Производитель: Нэфис',
        brand: 'Брэнд: AOS'})
    });
    test('equal', () => {
        expect(arr).not.toEqual({});
    });
    test('truphy', () => {
        expect(arr).toBeTruthy();
    });    
});

describe('nativeNull', () => {
    test('toBe', () => {
        expect(nativeNull()).toBe(null);
    });
    test('toBeNull', () => {
        expect(nativeNull()).toBeNull();
    });
    test('toBeFalse', () => {
        expect(nativeNull()).toBeFalsy();
    });
    test('toBeDefined', () => {
        expect(nativeNull()).toBeDefined();
    });
    test('toBeTruthy', () => {
        expect(nativeNull()).not.toBeTruthy();
    });
    test('toBeUndefined', () => {
        expect(nativeNull()).not.toBeUndefined();
    });
});