import { CodModStrategy } from '../CodModStrategy';

export class NonReturnToZero extends CodModStrategy {

    constructor(){
        super();
        this.GraphType = "stepLine"
    }

    public generateGraph(): { x: number; y: number; }[] {

        let final : { x: number; y: number; }[] = [];
        for (let i = 0; i <= this.inputString.length; i++){
            let value: string|number = this.inputString.charAt(i);
            value = value == '1' ? 5 : 0;
            final.push({ x: i, y: Number(value) });
        }
        return final;
    }
}
