
enum AnimalType {
    DOG = "DOG",
    CAT = "CAT",
    PARROT = "PARROT",
}

enum CatBreeds  {
    PERSIAN = "Persain",
    MAINE = "Maine",
    MUNCHKIN = "Munchkin"
} 

enum DogBreeds {
    GERMAN_SHEPARD = "German Shepard",
    BULL_DOG = "Bull Dog",
    POODLE = "Poodle",
    LABRADOR_RETIREVER = "Labrador retriever"
}

enum ParrotBreeds {
    GREY_HEADED_LOVEBIRD = "Grey headed love birds",
    ASHENFALLOW_COCKATIEL = "Ashenfallow Cockatiel",
    ADMPIED_COCKATIEL = "ADMpied Cockatiel"
}

enum GenderType {
    MALE = "Male",
    FEMALE = "Female",
    OTHER = "Other",
}

interface EnquiryRequest {
    breed: CatBreeds | DogBreeds | ParrotBreeds,
    gender: GenderType,
    typeOfAnimal: AnimalType,
    isVaccinated: boolean,
}

interface EnquiryResponse {
    enquiry: Enquiry,
    data: Array<Pet>,
    isAvailable?: Boolean, 
}

class Petshop {
    private pets: Array<Pet>;
    private enquiryList: Array<EnquiryResponse> = [];

    constructor(pets:Array<Pet>) {
        this.pets = pets;
    }

    public addNewPetForAdoption(pet: Pet): void{
        this.pets.push(pet);
    }

    public getPetsAvailability(): Array<Pet> {
        return this.pets.filter((pet) => pet.isAvailable);
    }

    public createEnquiryRequestForPets(enquiryData: EnquiryRequest): Array<Pet> {
        let enquiry = new Enquiry(enquiryData.breed,enquiryData.gender,enquiryData.typeOfAnimal,enquiryData.isVaccinated);
        let enquiredPets = [];
        this.pets.forEach((pet) => {
            if(pet.gender === enquiryData.gender && pet.breed === enquiryData.breed && pet.typeOfAnimal === enquiryData.typeOfAnimal) {
                enquiredPets.push(pet);
            }
        })
        let request = {enquiry: enquiry, data:enquiredPets};
        this.enquiryList.push(request);
        return enquiredPets;
    }

    public getEnquiryWithResponses(): Array<EnquiryResponse> {
        return this.enquiryList;
    }

    public getAvaibalePetsWithEnquiries(): Array<EnquiryResponse> {
       this.enquiryList.map((enquiryData) => enquiryData.isAvailable =  enquiryData.data.some((pet) => pet.isAvailable));
       return this.enquiryList;
    }

    public getDifferentKindsOfPetAvailability(): Object {
        let dogCount = 0;
        let catCount = 0;
        let parrotCount = 0;
        this.pets.forEach((pet) => {
           switch (pet.typeOfAnimal) {
               case AnimalType.DOG:
                    dogCount++;
               case AnimalType.PARROT:
                    parrotCount++;
               case AnimalType.CAT:
                   catCount++;
           }
        })
       return {dog : dogCount, cat: catCount, parrot: parrotCount};
    }
}

class Pet {
      name: String;
      age: Number;
      history: HistoryOfPets;
      breed: DogBreeds | CatBreeds | ParrotBreeds;
      gender: GenderType;
      typeOfAnimal: AnimalType;
      isAvailable: boolean = true;

      constructor(name: String, age: Number, history: HistoryOfPets, breed: DogBreeds | CatBreeds | ParrotBreeds, gender: GenderType, typeOfAnimal: AnimalType, isAvailable?: boolean) {
        this.name = name;
        this.age = age;
        this.history = history;
        this.breed = breed;
        this.gender = gender;
        this.typeOfAnimal = typeOfAnimal;
        this.isAvailable = isAvailable;
      }
}

class Enquiry {
    private breed: DogBreeds | CatBreeds | ParrotBreeds;
    private gender: GenderType;
    private typeOfAnimal: AnimalType.DOG | AnimalType.CAT | AnimalType.PARROT;
    private isVaccinated: boolean;

    constructor(breed: DogBreeds | CatBreeds | ParrotBreeds, gender:GenderType, typeOfAnimal: AnimalType,isVaccinated?: boolean) {
        this.breed = breed;
        this.gender = gender;
        this.typeOfAnimal = typeOfAnimal;
        this.isVaccinated = isVaccinated;
    }
}

interface HistoryOfPets {
    birthDate: Date;
    location: String;
    description?: String;
    
}

let petHistory =  {
    birthDate: new Date(),
    location: 'london',
    description: 'Happy, loves Toys, Hyper Active',
}

let petsList = [{
    name: 'TOM',
    age: 1,
    history: petHistory,
    breed: DogBreeds.BULL_DOG,
    gender: GenderType.MALE,
    typeOfAnimal: AnimalType.DOG,
    isAvailable: true,
},
{
    name: 'TOMMY',
    age: 2,
    history: petHistory,
    breed: CatBreeds.PERSIAN,
    gender: GenderType.FEMALE,
    typeOfAnimal: AnimalType.CAT,
    isAvailable: false,
},
{
    name: 'THOMAS',
    age: 3,
    history: petHistory,
    breed: ParrotBreeds.ADMPIED_COCKATIEL,
    gender: GenderType.FEMALE,
    typeOfAnimal: AnimalType.PARROT,
    isAvailable: true,
},
{
    name: 'THOMAS',
    age: 3,
    history: petHistory,
    breed: ParrotBreeds.ASHENFALLOW_COCKATIEL,
    gender: GenderType.MALE,
    typeOfAnimal: AnimalType.PARROT,
    isAvailable: true,
},
{
    name: 'THOMAS',
    age: 3,
    history: petHistory,
    breed: DogBreeds.GERMAN_SHEPARD,
    gender: GenderType.FEMALE,
    typeOfAnimal: AnimalType.DOG,
    isAvailable: true,
},
{
    name: 'DOGGY',
    age: 3,
    history: petHistory,
    breed: DogBreeds.LABRADOR_RETIREVER,
    gender: GenderType.FEMALE,
    typeOfAnimal: AnimalType.DOG,
    isAvailable: true,
},
{
    name: 'THOMAS',
    age: 3,
    history: petHistory,
    breed: ParrotBreeds.ADMPIED_COCKATIEL,
    gender: GenderType.FEMALE,
    typeOfAnimal: AnimalType.PARROT,
    isAvailable: true,
},
{
    name: 'THOMAS',
    age: 3,
    history: petHistory,
    breed: ParrotBreeds.GREY_HEADED_LOVEBIRD,
    gender: GenderType.FEMALE,
    typeOfAnimal: AnimalType.PARROT,
    isAvailable: false,
}]

let petshop = new Petshop(petsList);

petshop.addNewPetForAdoption({
    name: 'CATTY',
    age: 1,
    history: petHistory,
    gender: GenderType.FEMALE,
    breed: CatBreeds.PERSIAN,
    typeOfAnimal: AnimalType.CAT,
    isAvailable: false,
})

console.log(petshop.getPetsAvailability());

let enquiryData = {
    breed: CatBreeds.PERSIAN,
    gender: GenderType.FEMALE,
    typeOfAnimal: AnimalType.CAT,
    isVaccinated: true,
}

console.log(petshop.createEnquiryRequestForPets(enquiryData));
console.log(petshop.getEnquiryWithResponses());
console.log(petshop.getAvaibalePetsWithEnquiries());
console.log(petshop.getDifferentKindsOfPetAvailability());