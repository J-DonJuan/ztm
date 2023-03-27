class Player {
    constructor (name, position){
        this.name = name;
        this.position = position;
    }

    runForTen() {
        console.log(`${this.name} is a ${this.position} and he just ran for 10 yards!`)
    }
}

const john = new Player("John", "Running Back");