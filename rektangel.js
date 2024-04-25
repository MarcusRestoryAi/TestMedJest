class Rektangel {
    constructor(length, width) {

        if (width > length) {
            this.length = width
            this.width = length

            return
        }

        this.length = length
        this.width = width
    }

    setSize(length, width) {
        this.length = length
        this.width = width
    }

    getArea() {
        return this.length * this.width
    }

    isSquare() {
        return this.length != this.width
    }
}

module.exports = Rektangel