import * as Canvas from '../../../../assets/canvasjs-2.3.1/canvasjs.min.js';
export class CodModStrategy {

    constructor(){}


    protected inputString: string;
    public GraphType: string;
    public generateGraph(): { x: number, y: number }[]{return null};

    public setInputString(input: string){
        this.inputString = input;
    }

    public getChart(): any {
        return new Canvas.Chart('chartContainer', {
            title: {
              text: 'Graph'
            },
            axisX: {
              lineThickness: 1
            },
            data: [
                {
                    type: this.GraphType,
                    dataPoints: this.generateGraph()
                }
           ]
         });
    }
}
