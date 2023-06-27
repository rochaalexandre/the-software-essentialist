import {TimeValidator} from "./index";

describe('military time validator', () => {

    it.each(["22:00 - 23:12","01:12 - 14:32", "06:23 - 07:00", "00:01 - 00:02" ])
    ('knows that "%s" is valid military time range ', (param) => {
        expect(TimeValidator.validateRange(param)).toBeTruthy()
    });

    it.each(["25:00 - 12:23", "15:00 - 14:32", "00:01 - 00:00", "22:00 - 21:12", "15:30 - 25:30"])
    ('knows that %s is not a valid military time range ', (param) => {
        expect(TimeValidator.validateRange(param)).toBeFalsy()
    });

})
