import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, ControlValueAccessor, RadioControlValueAccessor, AbstractControl } from '@angular/forms';
import { SimulationStrategyService } from './services/simulation-strategyService/SimulationStrategy.service';
import { CodModStrategy } from './services/strategies/codMod/CodModStrategy';
import { Chart } from 'canvasjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'codification-modulation';
  //TO-DO: add form validations
  form = new FormGroup(
    {
      input: new FormControl(),
      graphType: new FormControl(),
    }
  )

  constructor(private simulationStrategyService: SimulationStrategyService){}

  ngOnInit(): void {

  }

  startSimulation(){
    const stratName = this.form.get('graphType').value;
    const inputString = this.form.get('input').value;
    const strat = this.simulationStrategyService.getStrategyForName(stratName);
    strat.setInputString(inputString);
    const chart: Chart = strat.getChart();
    chart.render();
  }

  getAvaliableStrategies(){
    return this.simulationStrategyService.getAvaliableStrategies();
  }
}
