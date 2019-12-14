function StringToBoolConverter(boolInput){
    var returnval = false; 
    if (boolInput == "True"){
        returnval = true;
    } else if (boolInput == "False"){
        returnval = false;
    }
    return returnval;
}

class ElementResult {
    
    constructor(){

    this.fire = 0;
    this.water = 0;
    this.earth = 0;
    this.air = 0;
    this.metal = 0;
    this.lightning = 0;
    this.ice = 0;
    this.lightningshadow = 0;
    this.shadow = 0;
    this.sound = 0;
    this.lava = 0;
    this.psionics = 0;
    this.gravity = 0;
    this.plant = 0;
    this.glass = 0;
    this.magnetism = 0;
    this.plasma = 0;
    this.blood = 0;
    this.dust = 0;
    this.pvoid = 0;
    this.spirit = 0;
        
    }

    elemPlusOne(element) {
        this.element = element++;
    }

    elemPlusThree(element){
        this.element = element + 3;
    }
}
