import data from '../../data/courses.json';

const numItems = data.length;

describe('Number test', () => {
    test('Number of items = 12', () => {
        expect(numItems).toBe(12);
    });
    
    test('Number of items to be greater than 12', () => {
        expect(numItems).toBeGreaterThanOrEqual(12);
    });
})



const dataTest = data[0].title;

describe('String tests', () => {
    test('There is a JS in this title', () => {
        expect(dataTest).toMatch(/JS/);
    });
    
    test('Title contains React', () => {
        expect(dataTest).toContain('React');
    });
})

const data2 = ['React Native', 'React']

describe('Array tests', () => {
    test('The list of courses contains React Native and React', () => {
        expect(data2).toEqual(expect.arrayContaining(data2));
    });
    
    test('First course to have a property title and a value of 31,266', () => {
        expect(data[0]).toHaveProperty('title', '31,266');
    });
})




