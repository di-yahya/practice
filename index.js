class Cuboid  {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    get_volume() {
        return this.length * this.width * this.height
    }

    get_surface_area() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }

}

const c = new Cuboid(5,3,4)

