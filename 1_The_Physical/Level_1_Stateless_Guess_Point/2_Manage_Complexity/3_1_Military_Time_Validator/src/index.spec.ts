import {TimeValidator} from "./index";

describe('military time validator', () => {

    it('knows how to validate military time ranges', () => {
        expect(() => TimeValidator.validateRange()).toThrow()
    });

})
