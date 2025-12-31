# Mnemonics

There are some good rules of thumb that explain the subroutine naming
conventions. All subroutine names (with the exception of `PKINDX`) begin with
the letters `CK` so that Gas-phase Kinetics subroutines are easily recognized
and so that they are likely different from any user subroutine names. The four
remaining letters identify the purpose of the subroutine: The first one or two
usually refer to the variable that is being computed; the last letters refer
to either the input variables or the units.

State variables are denoted by `P` (pressure), `T` (temperature), `Y` ( mass
fraction), `X` ( mole fraction), and `C` ( molar concentration). Thermodynamic
properties are referred to by `CP` and `CV` (Specific heats), `H` (enthalpy),
`S` (entropy), `U` (internal energy), `G` (Gibbs free energy), and `A`
(Helmholtz free energy). The thermodynamic property subroutines may be called
to return properties in mass units, denoted by `MS` or `S` as the last
letter(s), or in molar units, denoted by `ML` or `L` as the last letter(s).
The letter `B` (for the bar as in
![image](./graphics/eq73873444-8841-3181-0623-555850045825.svg)) in a thermodynamic
property subroutine name indicates that it returns mean mixture properties.

Subroutines that return net chemical production rates have a `W` (for
![image](./graphics/eq77412692-1043-8389-0663-974839952253.svg)) following the `CK`,
and routines that return creation and destruction rates or creation rates and
destruction times have a `CD` or a `CT`, respectively, following the `CK`.
Rate-of-progress variables are denoted by `Q` and equilibrium constants by
`EQ`.

The mnemonics for the input and output variable names in the subroutine calls
are roughly the same as for the subroutine names.

In most cases the subroutines are backwards compatible with previous versions
of Chemkin. However, there are a few cases where either the functionality is
different or the call list has changed, but we have kept the same subroutine
name. These are annotated with an asterisk(s).

* * *

Note:  All routines for which the call list or functionality may have changed
from the original version of Chemkin are identified by an asterisk.
Subroutines whose call lists have changed since later versions, known as
Chemkin II, are indicated by a double asterisk.

* * *

[ « Chapter 4: Quick Reference Guide to the Gas-phase Kinetics Subroutine
Library](i13005api_quickref_gaskinetics.md)

 [4.2. Initialization » ](pgfId-1066867.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:38-04:00

