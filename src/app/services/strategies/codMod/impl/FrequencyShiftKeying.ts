import { CodModStrategy } from '../CodModStrategy';

export class FrequencyShiftKeying extends CodModStrategy {

    constructor() {
        super();
        this.GraphType = "spline"
    }

    public generateGraph(): { x: number; y: number; }[] {
        let final: { x: number; y: number; }[] = [];
        let startAt = 5;

        for (let index = 0; index < this.inputString.length; index++) {
            let thisItem = this.inputString.charAt(index);
            if (thisItem === '1') {
                for (let n = 0; n < 1; n += 0.5) {
                    final.push({ x: index + n, y: 0 })
                    final.push({ x: index + n + 0.125, y: startAt })
                    final.push({ x: index + n + 0.25, y: 0 })
                    final.push({ x: index + n + 0.375, y: startAt * -1 })
                    final.push({ x: index + n + 0.5, y: 0 })
                }
            } else {
                final.push({ x: index, y: 0 })
                final.push({ x: index + 0.25, y: startAt })
                final.push({ x: index + 0.5, y: 0 })
                final.push({ x: index + 0.75, y: startAt * -1 })
                final.push({ x: index + 1, y: 0 })
            }
        }

        return final;
    }
}
