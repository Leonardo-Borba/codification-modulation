import { CodModStrategy } from 'src/app/services/strategies/codMod/CodModStrategy';

export class ManchesterBipolar extends CodModStrategy{
    constructor(){
        super();
        this.GraphType = "stepLine"
    }

    public generateGraph(): { x: number; y: number; }[] {
        let final : { x: number; y: number; }[] = [];

         for(let index = 0;index < this.inputString.length;index++){
             let item: string = this.inputString.charAt(index);
             if(item == '0'){
                final.push({x:index, y:5})
                final.push({x:index+0.5, y:-5})
            }else{
                final.push({x:index, y:-5})
                final.push({x:index+0.5, y:5})
            }
         }
        return final;
    }
}