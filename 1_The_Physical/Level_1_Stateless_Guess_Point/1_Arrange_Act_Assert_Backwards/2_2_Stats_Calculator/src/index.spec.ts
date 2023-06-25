import {StatsCaculator} from "./index";

describe('stats calculator', () => {
    it(' knows how to a create new stats calculator', () => {
        const calculator = new StatsCaculator();
        expect(calculator).toBeDefined();
    })

    it('create new stats calculator instance', () => {
        const calculator = new StatsCaculator();
        expect(calculator).toBeDefined();
    })

})