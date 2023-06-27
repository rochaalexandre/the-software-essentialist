import {TimeValidator} from "./index";

describe('military time validator', () => {

    it.each(["22:00 - 23:12","01:12 - 14:32" ])
    ('knows that "%s" is valid military time range ', (param) => {
        expect(TimeValidator.validateRange(param)).toBeTruthy()
    });

    it('knows that "25:00 - 12:23" is not a valid military time range ', () => {
        expect(TimeValidator.validateRange("25:00 - 12:23")).toBeFalsy()
    });

})
