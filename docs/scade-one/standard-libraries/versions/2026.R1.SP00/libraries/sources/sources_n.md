# Sources::N

Flow generators whose periodicity is expressed in number of cycles \(module `Sources::N`\).

|Operator Name|Description|
|-------------|-----------|
|[Pwm](n__pwm.md)|The flow of Pulse-Width Modulation is 1 during the first part of the period and 0 during the second one for every number of cycles. The length of the part is defined by the duty cycle, from 0% to 100% of the period.|
|[Ramp](n__ramp.md)|The flow varies linearly from 0 to 1 for a number of cycles and then remains at 1.|
|[Ramps](n__ramps.md)|The flow is the sequence of an array of ramps. Each ramp is defined by a number of cycles, an amplitude, and an offset.|
|[Sawtooth](n__sawtooth.md)|The flow varies linearly \(by default, from 0 to 1\) for every number of cycles.|
|[Sequence](n__sequence.md)|The flow is a sequence of ramps. Each ramp is defined by a number of cycles, a start and end value. The end value of a ramp is the start value for the next one.|
|[Sine](n__sine.md)|The flow is a sinusoidal waveform with an optional delay, sampled with several cycles.|
|[Square](n__square.md)|The flow is 0 the first half of the interval and 1 the second half for every number of cycles.|
|[Step](n__step.md)|The flow is 0 for a number of cycles and then remains at 1.|
|[Triangular](n__triangular.md)|The flow varies linearly from 0 to 1 and then back to 0 for every number of cycles.|


**Parent topic:**[Sources](./sources.md)

