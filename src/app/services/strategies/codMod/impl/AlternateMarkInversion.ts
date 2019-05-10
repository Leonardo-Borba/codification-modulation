import { CodModStrategy } from '../CodModStrategy';

export class AlternateMarkInversion extends CodModStrategy {

    constructor(){
        super();
        this.GraphType = "stepLine"
    }

    public generateGraph(): { x: number; y: number; }[] {
        let final: { x: number; y: number; }[] = [];
        let lastOne = -5;
        for (let index = 0; index < this.inputString.length; index++) {
            let thisItem = this.inputString.charAt(index);
            if (thisItem === '0') {
                final.push(
                    {
                        x: index,
                        y: 0
                    }
                )
            } else {
                lastOne = lastOne * -1;
                final.push({
                    x: index,
                    y: lastOne
                })
            }
        }

        return final;
    }
}
