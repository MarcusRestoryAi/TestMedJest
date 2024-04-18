const sum = require("./sum")

//Skapa ett testgrupp
describe("Addition", () => {
    //Skapa ett test inuti blocket
    it("1+2=3", () => {
        expect(sum(1,2)).toBe(3)
    })

    it("12+34=46", () => {
        expect(sum(12,34)).toBe(46)
    })

    it("50+10=60", () => {
        expect(sum(50, 10)).toBe(60)
    })
})