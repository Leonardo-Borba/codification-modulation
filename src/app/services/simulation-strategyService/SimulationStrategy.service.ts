import { Injectable } from '@angular/core';
import { stratList } from "../strategies/codMod/stratRepo";

@Injectable({
  providedIn: 'root'
})
export class SimulationStrategyService {

  constructor() { }

  getAvaliableStrategies(){
    return Object.keys(stratList);
  }

  getStrategyForName(stratName : string){
    return stratList[stratName];
  }

}
