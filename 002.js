
class Area {
    
    constructor(comprimento, largura) {
        this.id = Area.aumentarId()  //
        this.comprimento = comprimento
        this.largura = largura
    }

    get area() {
       return this.CalcularArea()
    }

    CalcularArea() {
        return this.largura * this.comprimento
    }

    static aumentarId() {
        if (!this.id) {
            this.id = 1
        }
        else {
            this.id += 1
        }
        return this.id
    }

}

const area1 = new Area(3, 4)
const area2 = new Area(5, 8)
const area3 = new Area(9, 11)
const area4 = new Area(7, 3.5)



console.log('area1: ', area1)
console.log('area1: ', area1.area)
console.log('area2: ', area2)
console.log('area2: ', area2.area)
console.log('area3: ', area3)
console.log('area3: ', area3.area)
console.log('area4: ', area4)
console.log('area4: ', area4.area)

console.log('---------------------------------------------')









console.log('---------------------------------------------')

















