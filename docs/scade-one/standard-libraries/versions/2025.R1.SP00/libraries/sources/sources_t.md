# Sources::T

Flow generators whose periodicity is expressed with a period and a sample time \(module `Sources::T`\).

|Operator Name|Description|
|-------------|-----------|
|[Pwm](t__pwm.md)|The flow of Pulse-Width Modulation is 1 during the first part of the period and 0 during the second one for every period. The length of the part is defined by the duty cycle, from 0% to 100% of the period.|
|[Ramp](t__ramp.md)|The flow varies linearly from 0 to 1 for a number of cycles and then remains at 1.|
|[Ramps](t__ramps.md)|The flow is the sequence of an array of ramps. Each ramp is defined by a number of cycles, an amplitude, and an offset.|
|[Sawtooth](t__sawtooth.md)|The flow varies linearly from 0 to 1 at every period.|
|[Sequence](t__sequence.md)|The flow is a sequence of ramps. Each ramp is defined by a duration, a start and end value. The end value of a ramp is the start value for the next one.|
|[Sine](t__sine.md)|The flow is a sinusoidal waveform with an optional delay, with a sample time.|
|[Square](t__square.md)|The flow is 0 the first half of the interval and 1 the second half for every number of cycles.|
|[Step](t__step.md)|The flow is 0 for a duration and then remains at 1.|
|[Triangular](t__triangular.md)|The flow varies linearly from 0 to 1 and then back to 0 at every period.|


**Parent topic:**[Sources](../../libraries/sources/sources.md)

