import { CodModStrategy } from './CodModStrategy';
import { NonReturnToZero } from './impl/NonReturnToZero';
import { NonReturnToZeroLevelBipolar } from './impl/NonReturnToZeroLevelBipolar';
import { NonReturnToZeroInverted } from './impl/NonReturnToZeroInverted';
import { AlternateMarkInversion } from './impl/AlternateMarkInversion';
import { ManchesterBipolar } from 'src/app/services/strategies/codMod/impl/ManchesterBipolar';
import { DiferentialManchester } from 'src/app/services/strategies/codMod/impl/DiferentialManchester';
import { Pseudoternary } from './impl/Pseudoternary';
import { AmplitudeShiftKeying } from './impl/AmplitudeShiftKeying';

export let stratList: {[key: string]: CodModStrategy } = {
    'NRZ': new NonReturnToZero(),
    'NRZ-L':new NonReturnToZeroLevelBipolar(),
    'NRZ-I':new NonReturnToZeroInverted(),
    'AMI': new AlternateMarkInversion(),
    'Pseudoternary':new Pseudoternary(),
    'Manchester Bipolar':new ManchesterBipolar(),
    'Diferential Manchester Bipolar': new DiferentialManchester(),
    'ASK': new AmplitudeShiftKeying(),
    'FSK': null,
    'PSK': null
}
