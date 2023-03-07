import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name:string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let sumMass: number = 0
        for(let i = 0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        return sumMass;
    }
    currentMassKg(): number {
        let currentMass: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;
    }
    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }
    
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}