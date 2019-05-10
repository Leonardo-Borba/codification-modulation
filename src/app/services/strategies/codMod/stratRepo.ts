import { CodModStrategy } from './CodModStrategy';
import { NonReturnToZero } from './impl/NonReturnToZero';
import { NonReturnToZeroLevelBipolar } from './impl/NonReturnToZeroLevelBipolar';
import { NonReturnToZeroInverted } from './impl/NonReturnToZeroInverted';
import { AlternateMarkInversion } from './impl/AlternateMarkInversion';

export let stratList: {[key: string]: CodModStrategy } = {
    'NRZ': new NonReturnToZero(),
    'NRZ-L':new NonReturnToZeroLevelBipolar(),
    'NRZI':new NonReturnToZeroInverted(),
    'AMI': new AlternateMarkInversion(),
    'Pseudoternary':null,
    'ManchesterBipolar':null,
    'diferentialManchesterBipolar': null,
    'ASK': null,
    'FSK': null,
    'PSK': null
}
