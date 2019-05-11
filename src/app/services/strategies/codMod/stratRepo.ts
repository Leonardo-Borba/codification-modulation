import { CodModStrategy } from './CodModStrategy';
import { NonReturnToZero } from './impl/NonReturnToZero';
import { NonReturnToZeroLevelBipolar } from './impl/NonReturnToZeroLevelBipolar';
import { NonReturnToZeroInverted } from './impl/NonReturnToZeroInverted';
import { AlternateMarkInversion } from './impl/AlternateMarkInversion';
import { ManchesterBipolar } from 'src/app/services/strategies/codMod/impl/ManchesterBipolar';

export let stratList: {[key: string]: CodModStrategy } = {
    'NRZ': new NonReturnToZero(),
    'NRZ-L':new NonReturnToZeroLevelBipolar(),
    'NRZI':new NonReturnToZeroInverted(),
    'AMI': new AlternateMarkInversion(),
    'Pseudoternary':null,
    'ManchesterBipolar':new ManchesterBipolar(),
    'diferentialManchesterBipolar': null,
    'ASK': null,
    'FSK': null,
    'PSK': null
}
