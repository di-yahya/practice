class Cuboid  {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    get_length() { 
        return this.length 
    } 

    set_length(new_length) { 
        this.length = new_length
    } 

    get_width() { 
        return this.width
    } 

    set_width(new_width) { 
        this.width = new_width
    } 

    get_height() { 
        return this.height
    } 

    set_height(new_height) { 
        this.height = new_height
    } 

}

const c = new Cuboid(5,3,4)


