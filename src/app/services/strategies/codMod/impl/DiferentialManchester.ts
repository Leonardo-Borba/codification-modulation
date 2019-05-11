import { CodModStrategy } from 'src/app/services/strategies/codMod/CodModStrategy';
import { start } from 'repl';

export class DiferentialManchester extends CodModStrategy{
    constructor(){
        super();
        this.GraphType = "stepLine"
    }

    public generateGraph(): { x: number; y: number; }[] {
        let final : { x: number; y: number; }[] = [];
        let startAt = 5;
        for(let index =0; index < this.inputString.length;index++){
            let item: string = this.inputString.charAt(index);
            if(item === '0'){
                final.push({x:index, y:startAt*-1})
                final.push({x:index+0.5, y:startAt})
            }else{
                final.push({x:index, y:startAt})
                final.push({x:index+0.5, y:startAt*-1})
                startAt*=-1
            }
        }
        return final
    }

}