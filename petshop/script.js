var AnimalType;
(function (AnimalType) {
    AnimalType["DOG"] = "DOG";
    AnimalType["CAT"] = "CAT";
    AnimalType["PARROT"] = "PARROT";
})(AnimalType || (AnimalType = {}));
var CatBreeds;
(function (CatBreeds) {
    CatBreeds["PERSIAN"] = "Persain";
    CatBreeds["MAINE"] = "Maine";
    CatBreeds["MUNCHKIN"] = "Munchkin";
})(CatBreeds || (CatBreeds = {}));
var DogBreeds;
(function (DogBreeds) {
    DogBreeds["GERMAN_SHEPARD"] = "German Shepard";
    DogBreeds["BULL_DOG"] = "Bull Dog";
    DogBreeds["POODLE"] = "Poodle";
    DogBreeds["LABRADOR_RETIREVER"] = "Labrador retriever";
})(DogBreeds || (DogBreeds = {}));
var ParrotBreeds;
(function (ParrotBreeds) {
    ParrotBreeds["GREY_HEADED_LOVEBIRD"] = "Grey headed love birds";
    ParrotBreeds["ASHENFALLOW_COCKATIEL"] = "Ashenfallow Cockatiel";
    ParrotBreeds["ADMPIED_COCKATIEL"] = "ADMpied Cockatiel";
})(ParrotBreeds || (ParrotBreeds = {}));
var GenderType;
(function (GenderType) {
    GenderType["MALE"] = "Male";
    GenderType["FEMALE"] = "Female";
    GenderType["OTHER"] = "Other";
})(GenderType || (GenderType = {}));
var Petshop = /** @class */ (function () {
    function Petshop(pets) {
        this.enquiryList = [];
        this.pets = pets;
    }
    Petshop.prototype.addNewPetForAdoption = function (pet) {
        this.pets.push(pet);
    };
    Petshop.prototype.getPetsAvailability = function () {
        return this.pets.map(function (pet) {
            if (pet.isAvailable) {
                return pet;
            }
        }).filter(function (pet) { return pet !== undefined; });
    };
    Petshop.prototype.createEnquiryRequestForPets = function (enquiryData) {
        var enquiry = new Enquiry(enquiryData.breed, enquiryData.gender, enquiryData.typeOfAnimal, enquiryData.isVaccinated);
        var enquiredPets = [];
        this.pets.forEach(function (pet) {
            if (pet.gender === enquiryData.gender && pet.breed === enquiryData.breed && pet.typeOfAnimal === enquiryData.typeOfAnimal) {
                enquiredPets.push(pet);
            }
        });
        var request = { enquiry: enquiry, data: enquiredPets };
        this.enquiryList.push(request);
        return enquiredPets;
    };
    Petshop.prototype.getEnquiryWithResponses = function () {
        return this.enquiryList;
    };
    Petshop.prototype.getAvaibalePetsWithEnquiries = function () {
        this.enquiryList.map(function (enquiryData) { return enquiryData.isAvailable = enquiryData.data.some(function (pet) { return pet.isAvailable; }); });
        return this.enquiryList;
    };
    Petshop.prototype.getDifferentKindsOfPetAvailability = function () {
        var dogCount = 0;
        var catCount = 0;
        var parrotCount = 0;
        this.pets.forEach(function (pet) {
            switch (pet.typeOfAnimal) {
                case AnimalType.DOG:
                    dogCount++;
                case AnimalType.PARROT:
                    parrotCount++;
                case AnimalType.CAT:
                    catCount++;
            }
        });
        return { dog: dogCount, cat: catCount, parrot: parrotCount };
    };
    return Petshop;
}());
var Pet = /** @class */ (function () {
    function Pet(name, age, history, breed, gender, typeOfAnimal, isAvailable) {
        this.isAvailable = true;
        this.name = name;
        this.age = age;
        this.history = history;
        this.breed = breed;
        this.gender = gender;
        this.typeOfAnimal = typeOfAnimal;
        this.isAvailable = isAvailable;
    }
    return Pet;
}());
var Enquiry = /** @class */ (function () {
    function Enquiry(breed, gender, typeOfAnimal, isVaccinated) {
        this.breed = breed;
        this.gender = gender;
        this.typeOfAnimal = typeOfAnimal;
        this.isVaccinated = isVaccinated;
    }
    return Enquiry;
}());
var petHistory = {
    birthDate: new Date(),
    location: 'london',
    description: 'Happy, loves Toys, Hyper Active'
};
var petsList = [{
        name: 'TOM',
        age: 1,
        history: petHistory,
        breed: DogBreeds.BULL_DOG,
        gender: GenderType.MALE,
        typeOfAnimal: AnimalType.DOG,
        isAvailable: true
    },
    {
        name: 'TOMMY',
        age: 2,
        history: petHistory,
        breed: CatBreeds.PERSIAN,
        gender: GenderType.FEMALE,
        typeOfAnimal: AnimalType.CAT,
        isAvailable: false
    },
    {
        name: 'THOMAS',
        age: 3,
        history: petHistory,
        breed: ParrotBreeds.ADMPIED_COCKATIEL,
        gender: GenderType.FEMALE,
        typeOfAnimal: AnimalType.PARROT,
        isAvailable: true
    },
    {
        name: 'THOMAS',
        age: 3,
        history: petHistory,
        breed: ParrotBreeds.ASHENFALLOW_COCKATIEL,
        gender: GenderType.MALE,
        typeOfAnimal: AnimalType.PARROT,
        isAvailable: true
    },
    {
        name: 'THOMAS',
        age: 3,
        history: petHistory,
        breed: DogBreeds.GERMAN_SHEPARD,
        gender: GenderType.FEMALE,
        typeOfAnimal: AnimalType.DOG,
        isAvailable: true
    },
    {
        name: 'DOGGY',
        age: 3,
        history: petHistory,
        breed: DogBreeds.LABRADOR_RETIREVER,
        gender: GenderType.FEMALE,
        typeOfAnimal: AnimalType.DOG,
        isAvailable: true
    },
    {
        name: 'THOMAS',
        age: 3,
        history: petHistory,
        breed: ParrotBreeds.ADMPIED_COCKATIEL,
        gender: GenderType.FEMALE,
        typeOfAnimal: AnimalType.PARROT,
        isAvailable: true
    },
    {
        name: 'THOMAS',
        age: 3,
        history: petHistory,
        breed: ParrotBreeds.GREY_HEADED_LOVEBIRD,
        gender: GenderType.FEMALE,
        typeOfAnimal: AnimalType.PARROT,
        isAvailable: false
    }];
var petshop = new Petshop(petsList);
petshop.addNewPetForAdoption({
    name: 'CATTY',
    age: 1,
    history: petHistory,
    gender: GenderType.FEMALE,
    breed: CatBreeds.PERSIAN,
    typeOfAnimal: AnimalType.CAT,
    isAvailable: false
});
console.log(petshop.getPetsAvailability());
var enquiryData = {
    breed: CatBreeds.PERSIAN,
    gender: GenderType.FEMALE,
    typeOfAnimal: AnimalType.CAT,
    isVaccinated: true
};
console.log(petshop.createEnquiryRequestForPets(enquiryData));
console.log(petshop.getEnquiryWithResponses());
console.log(petshop.getAvaibalePetsWithEnquiries());
console.log(petshop.getDifferentKindsOfPetAvailability());
