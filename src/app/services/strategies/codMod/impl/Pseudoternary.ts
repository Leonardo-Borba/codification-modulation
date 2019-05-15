import { CodModStrategy } from '../CodModStrategy';

export class Pseudoternary extends CodModStrategy {

    constructor(){
        super();
        this.GraphType = "stepLine"
    }

    public generateGraph(): { x: number; y: number; }[] {
        let final: { x: number; y: number; }[] = [];
        let lastZero = -5;
        for (let index = 0; index <= this.inputString.length; index++) {
            let thisItem = this.inputString.charAt(index);
            if (thisItem === '1') {
                final.push(
                    {
                        x: index,
                        y: 0
                    }
                )
            } else {
                lastZero = lastZero * -1;
                final.push({
                    x: index,
                    y: lastZero
                })
            }
        }

        return final;
    }
}
