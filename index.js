class Cuboid  {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    get_volume() {
        return this.length * this.width * this.height
    }

}

const c = new Cuboid(5,3,4)

