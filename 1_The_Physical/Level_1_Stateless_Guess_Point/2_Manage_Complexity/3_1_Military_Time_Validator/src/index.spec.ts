import {TimeValidator} from "./index";

describe('military time validator', () => {

    it('knows that "01:12 - 14:32" is valid military time range ', () => {
        expect(TimeValidator.validateRange("01:12 - 14:32")).toBeTruthy()
    });

    it('knows that "25:00 - 12:23" is not a valid military time range ', () => {
        expect(TimeValidator.validateRange("25:00 - 12:23")).toBeFalsy()
    });

})
