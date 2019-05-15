import { CodModStrategy } from '../CodModStrategy';

export class NonReturnToZeroInverted extends CodModStrategy{
    constructor(){
        super();
        this.GraphType = "stepLine"
    }

    public generateGraph(): { x: number; y: number; }[] {
        let final: { x: number; y: number; }[] = [];
        let first = this.inputString[0];
        let lastEntry: number = first === '0' ? -5 : 5;
        final.push({
            x: 0 , y: lastEntry
        });
        console.log(final)
        for (let index = 1; index <= this.inputString.length; index++) {
            let thisEntry = this.inputString.charAt(index) === '1' ? lastEntry * -1 : lastEntry
            final.push(
                {
                    x: index,
                    y: thisEntry
                }
            )
            lastEntry = thisEntry;
        }
        return final;
    }
}
