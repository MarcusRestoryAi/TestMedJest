const Rektangel = require("./rektangel")

describe("Rektangel", () => {

    let rektangel

    //Körs före varje test
    beforeEach(() => {
        rektangel = new Rektangel(10, 5)
    })

    it("Kontrollera att rektangel har rätt värden", () => {
        expect(rektangel.length).toBe(10)
        expect(rektangel.width).toBe(5)
    })

    it("Kontrollera att rektangel inte blandar ihop värden", () => {
        expect(rektangel.length).not.toBe(5)
        expect(rektangel.width).not.toBe(10)
    })

    it("Kan ändra värden i rektangel 1", () => {
        rektangel.setSize(20, 15)
        expect(rektangel.length).toBe(20)
        expect(rektangel.width).toBe(15)
    })

    it("Kan ändra värden i rektangel 2", () => {
        rektangel.setSize(30, 20)
        expect(rektangel.length).toBe(30)
        expect(rektangel.width).toBe(20)
    })

    it("Få area av rektangel vid start", () => {
        //Area är 50 vid start
        expect(rektangel.getArea()).toBe(50)
    })

    it("Få area av rektangel efter ändring", () => {
        rektangel.setSize(5,3)
        expect(rektangel.getArea()).toBe(15)
    })

    it("Är Rektangel en Kvadrat vid start", () => {
        expect(rektangel.isSquare()).toBeFalsy()
        expect(rektangel.isSquare()).not.toBeTruthy()
    })

    it("Är Rektangel en Kvadrat efter ändring", () => {
        rektangel.setSize(12, 12)

        expect(rektangel.isSquare()).toBeTruthy()
        expect(rektangel.isSquare()).not.toBeFalsy()
    })

    it("Om Bredden är längre än längden", () => {
        rektangel = new Rektangel(5, 10)
        expect(rektangel.length).toBe(10)
        expect(rektangel.width).toBe(5)
    })
})