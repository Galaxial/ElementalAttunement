
Survey
    .StylesManager
    .applyTheme("darkblue");

var json = {
    title: "In the world of Empty the City, powerful manipulators of the elements are bound through the intricacies of their personality. Take the test to find yours.",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "q01",
                    title: "When mentally exhausted, the best way to recover is to spend time with others, instead of being alone",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q02",
                    title: "I don’t mind being in front of a crowd",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q03",
                    title: "I like (or at least care about) influencing others",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q04",
                    title: "My passions require the participation of other people.",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q05",
                    title: "Quiet time is extremely important to me",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q06",
                    title: "I value being able to fit into many different kinds of groups",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q07",
                    title: "My passions tend to involve creating things or learning how to do things",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q08",
                    title: "I would rather work on many little projects rather than one big one",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q09",
                    title: "The most important thing is the journey, not the destination",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q10",
                    title: "When moving to a new place, my first instinct is to get out to explore isntead of settling in",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                }
                
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "q11",
                    title: "Doing something outside of your comfort zone should be seen as a growth opportunity, not an unneccessary risk that must be carefully evaluated",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q12",
                    title: "I like telling stories about my life to people.",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q13",
                    title: "I strongly value knowing how things work.",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q14",
                    title: "You were working on a project, but lost interest in it. Nobody cares if you finish it or not – its just for you, so finishing it doesnt matter. You should just move on without completing it.",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q15",
                    title: "I stay focused under stress",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q16",
                    title: "When creating something, I find the most satisfaction in creating the aesthetics more than I feel satisfied working on the functionality and efficiency",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q17",
                    title: "I prioritize understanding myself more than understanding those around me",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q18",
                    title: "I could explain my moral code in detail and without pausing to anybody who asked",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q19",
                    title: "I feel that I concern myself with understanding my thoughts and emotions in the moment, as opposed to simply letting feeling complete their natural course as intended",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                },
                {
                    type: "radiogroup",
                    name: "q20",
                    title: "I seek approval from myself before I seek approval from my peers/others",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "False"
                }
                
            ]
        },
        

        
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>" +
                    "<p id='qoutput'></p>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
    

    if (result.getValue('q01') == null){
        console.log("Ignore me");
    }
    console.log(result.getValue('q01'));
    console.log(result.getValue('q02'));
    
    function StringToBoolConverter(boolInput){
        var returnval = false; 
        if (boolInput == "True"){
            returnval = true;
        } else if (boolInput == "False"){
            returnval = false;
        }
        return returnval;
    }

    this.fire = 0;
    this.water = 0;
    this.earth = 0;
    this.air = 0;
    this.metal = 0;
    this.lightning = 0;
    this.ice = 0;
    this.light = 0;
    this.shadow = 0;
    this.sound = 0;
    this.lava = 0;
    this.psionics = 0;
    this.gravity = 0;
    this.plant = 0;
    this.acid = 0;
    this.glass = 0;
    this.magnetism = 0;
    this.plasma = 0;
    this.blood = 0;
    this.dust = 0;
    this.pvoid = 0;
    this.spirit = 0;

    //Q01
    if (result.getValue('q01') != null){
        if (StringToBoolConverter(result.getValue('q01'))){
            //True
            this.fire++;
            this.metal++;
            this.ice++;
            this.shadow++;
            this.sound++;
            this.lava++;
            this.plant++;
            this.acid++;
            this.dust++;
            this.pvoid++;
        } else {
            //False
            
            this.water++;
            this.earth++;
            this.air++;
            this.lightning = this.lightning + 3;
            this.light++;
            this.psionics++;
            this.gravity++;
            this.glass++;
            this.magnetism ;
            this.plasma++;
            this.blood++;
            this.spirit++;
        }
    }
    
    //Q02
    if (result.getValue('q02') != null){
        if (StringToBoolConverter(result.getValue('q02'))){
            //True
            
            this.water++;
            this.earth++;
            this.air++;
            this.light++;
            this.sound++;
            this.psionics++;
            this.gravity++;
            this.glass++;
            this.magnetism++;
            this.plasma++;
            this.blood++;
        } else {
            //False
            this.fire++;
            this.metal++;
            this.lightning++;
            this.ice++;
            this.shadow++;
            this.lava++;
            this.plant++;
            this.acid++;
            this.dust++;
            this.pvoid++;
            this.spirit++;
        }
    }

    //Q03
    if (result.getValue('q03') != null){
        if (StringToBoolConverter(result.getValue('q03'))){
            //True
            
            this.water = this.water + 3;
            this.air++;
            this.metal++;
            this.light = this.light + 3;
            this.psionics = this.psionics + 3;
            this.gravity++;
            this.acid++;
            this.glass++;
            this.plasma++;
        } else {
            //False
            this.fire++;
            this.earth++;
            this.lightning++;
            this.ice++;
            this.shadow++;
            this.sound++;
            this.lava++;
            this.plant++;
            this.magnetism++;
            this.blood++;
            this.dust++;
            this.pvoid++;
            this.spirit++;
        }
    }

    //Q04
    if (result.getValue('q04') != null){
        if (StringToBoolConverter(result.getValue('q04'))){
            //True
            
            this.water++;
            this.air++;
            this.metal++;
            this.lightning++;
            this.light++;
            this.sound++;
            this.psionics++;
            this.gravity++;
            this.plant++;
            this.glass++;
            this.blood = this.blood + 3;
            this.dust++;
            this.spirit++;
        } else {
            //False
            this.fire++;
            this.earth++;
            this.ice++;
            this.shadow++;
            this.lava++;
            this.acid++;
            this.magnetism++;
            this.plasma++;
            this.dust++;
            this.pvoid++;
            this.spirit++;
        }
    }

    //Q05
    if (result.getValue('q05') != null){
        if (StringToBoolConverter(result.getValue('q05'))){
            //True
            this.fire++;
            this.earth++;
            this.ice = this.ice + 3;
            this.shadow = this.shadow + 3;
            this.sound++;
            this.lava++;
            this.plant++;
            this.plasma++;
            this.dust++;
            this.pvoid++;
            this.spirit++;
        } else {
            //False
            this.water++;
            this.air++;
            this.metal++;
            this.lightning++;
            this.light++;
            this.psionics++;
            this.gravity++;
            this.acid++;
            this.glass++;
            this.magnetism++;
            this.blood++;
        }
    }

    //Q06
    if (result.getValue('q06') != null){
        if (StringToBoolConverter(result.getValue('q06'))){
            //True
            this.water = this.water + 3;
            this.air++;
            this.metal++;
            this.lightning++;
            this.light++;
            this.sound++;
            this.psionics++;
            this.gravity++;
            this.glass++;
            this.magnetism++;
            this.dust++;
            this.spirit++;
        } else {
            //False
            this.fire++;
            this.earth++;
            this.ice++;
            this.shadow++;
            this.lava++;
            this.plant++;
            this.acid++;
            this.plasma++;
            this.blood++;
            this.pvoid = this.pvoid + 3;
        }
    }

    //Q07
    if (result.getValue('q07') != null){
        if (StringToBoolConverter(result.getValue('q07'))){
            //True
            this.fire++;
            this.water++;
            this.earth++;
            this.air++;
            this.metal++;
            this.lightning++;
            this.ice++;
            this.light++;
            this.shadow++;
            this.sound++;
            this.lava++;
            this.psionics++;
            this.gravity++;
            this.plant++;
            this.acid++;
            this.glass++;
            this.magnetism++;
            this.plasma++;
            this.blood++;
            this.dust++;
            this.pvoid++;
            this.spirit++;
        } else {
            //False
            this.fire++;
            this.water++;
            this.earth++;
            this.air++;
            this.metal++;
            this.lightning++;
            this.ice++;
            this.light++;
            this.shadow++;
            this.sound++;
            this.lava++;
            this.psionics++;
            this.gravity++;
            this.plant++;
            this.acid++;
            this.glass++;
            this.magnetism++;
            this.plasma++;
            this.blood++;
            this.dust++;
            this.pvoid++;
            this.spirit++;
        }
    }
    //Q08
    if (result.getValue('q08') != null){
        if (StringToBoolConverter(result.getValue('q08'))){
            //True
            this.fire = this.fire + 3;
            this.metal++;
            this.ice++;
            this.shadow++;
            this.acid++;
            this.glass = this.glass + 3;
            this.plasma = this.plasma + 3;
        } else {
            //False
            this.water++;
            this.earth++;
            this.air++;
            this.lightning = this.lightning + 3;
            this.light++;
            this.sound++;
            this.lava++;
            this.psionics++;
            this.gravity++;
            this.plant++;
            this.magnetism++;
            this.blood++;
            this.dust++;
            this.pvoid++;
            this.spirit = this.spirit + 3;
        }
    }
    //Q09
    if (result.getValue('q09') != null){
        if (StringToBoolConverter(result.getValue('q09'))){
            //True
            this.fire = this.fire + 3;
            this.air++;
            this.metal++;
            this.sound++;
            this.plant++;
            this.magnetism++;
            this.dust++;
            this.spirit++;
        } else {
            //False
            this.water++;
            this.earth++;
            this.lightning++;
            this.ice++;
            this.light++;
            this.shadow++;
            this.lava++;
            this.psionics++;
            this.gravity++;
            this.acid++;
            this.glass++;
            this.plasma = this.plasma + 3;
            this.blood++;
            this.pvoid++;
        }
    }
    //Q10
    if (result.getValue('q10') != null){
        if (StringToBoolConverter(result.getValue('q10'))){
            //True
            this.fire = this.fire + 3;
            this.water++;
            this.air = this.air + 3;
            this.lightning++;
            this.sound++;
            this.psionics++;
            this.plant++;
            this.glass++;
            this.magnetism++;
            this.dust++;
            this.spirit++;
        } else {
            //False
            this.earth++;
            this.metal++;
            this.ice++;
            this.light++;
            this.shadow++;
            this.lava++;
            this.gravity = this.gravity + 3;
            this.acid++;
            this.plasma++;
            this.blood = this.blood + 3;
            this.pvoid++;
        }
    }

    this.goToUrl = "https://emptythecity.com";
    var maxScore = Math.max(this.fire,
        this.water,
        this.earth,
        this.air,
        this.metal,
        this.lightning,
        this.ice,
        this.light,
        this.shadow,
        this.sound,
        this.lava,
        this.psionics,
        this.gravity,
        this.plant,
        this.acid,
        this.glass,
        this.magnetism,
        this.plasma,
        this.blood,
        this.dust,
        this.pvoid,
        this.spirit);

    switch (maxScore){
        case this.water:
            this.goToUrl = "indexWater.html";
            break;
            
        case this.earth:
            this.goToUrl = "indexEarth.html";
            break;
        case this.air: 
            this.goToUrl = "indexAir.html";
            break;
            case this.metal: 
            this.goToUrl = "indexMetal.html";
            break;
            case this.lightning: 
            this.goToUrl = "indexLightning.html";
            break;
            case this.ice: 
            this.goToUrl = "indexIce.html";
            break;
            case this.light: 
            this.goToUrl = "indexLight.html";
            break;
            case this.shadow: 
            this.goToUrl = "indexShadow.html";
            break;
            case this.sound: 
            this.goToUrl = "indexSound.html";
            break;
            case this.lava: 
            this.goToUrl = "indexLava.html";
            break;
            case this.psionics: 
            this.goToUrl = "indexPsionics.html";
            break;
            case this.gravity: 
            this.goToUrl = "indexGravity.html";
            break;
            case this.plant: 
            this.goToUrl = "indexPlant.html";
            break;
            case this.acid: 
            this.goToUrl = "indexAcid.html";
            break;
            case this.glass: 
            this.goToUrl = "indexGlass.html";
            break;
            case this.magnetism: 
            this.goToUrl = "indexMagnetism.html";
            break;
            case this.plasma: 
            this.goToUrl = "indexPlasma.html";
            break;
            case this.blood: 
            this.goToUrl = "indexBlood.html";
            break;
            case this.dust: 
            this.goToUrl = "indexDust.html";
            break;
            case this.pvoid: 
            this.goToUrl = "indexVoid.html";
            break;
            case this.spirit: 
            this.goToUrl = "indexSpirit.html";
            break;
    }
        console.log(this.fire);
        console.log(this.water);
        console.log(this.earth);
        console.log(this.air);
        console.log(this.metal);
        console.log(this.lightning);
        console.log(this.ice);
        console.log(this.light);
        console.log(this.shadow);
        console.log(this.sound);
        console.log(this.lava);
        console.log(this.psionics);
        console.log(this.gravity);
        console.log(this.plant);
        console.log(this.acid);
        console.log(this.glass);
        console.log(this.magnetism);
        console.log(this.plasma);
        console.log(this.blood);
        console.log(this.dust);
        console.log(this.pvoid);
        console.log(this.spirit);

        document.location = this.goToUrl;
    });

$("#surveyElement").Survey({ model: survey });

