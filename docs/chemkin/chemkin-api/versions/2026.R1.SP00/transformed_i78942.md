# Chemical Production Rates

Table 4.12: Chemical Production Rates Subroutines[a]

Subroutine |  Description  
---|---  
`SUBROUTINE CKCDC (T, C, ICKWRK, RCKWRK, CDOT, DDOT)` |  Returns the molar creation and destruction rates of the species given temperature(s) and molar concentrations; see [Equation 3-51](../chemkin_th/i11616.md#i39748 "Equation 3–51") .   
`SUBROUTINE CKDOT (RKF, RKR, ICKWRK, RCKWRK, CDOT, DDOT)` |  Returns the molar creation and destruction rates of the species given reactions' rates of progress.  
`SUBROUTINE CKCDXP (P, T, X, ICKWRK, RCKWRK, CDOT, DDOT)` |  Returns the molar creation and destruction rates of the species given pressure, temperature(s) and mole fractions; see [Equation 3-51](../chemkin_th/i11616.md#i39748 "Equation 3–51") .   
`SUBROUTINE CKCDXR (RHO, T, X, ICKWRK, RCKWRK, CDOT, DDOT)` |  Returns the molar creation and destruction rates of the species given mass density, temperature(s) and mole fractions; see [Equation 3-51](../chemkin_th/i11616.md#i39748 "Equation 3–51") .  
`SUBROUTINE CKCDYP (P, T, Y, ICKWRK, RCKWRK, CDOT, DDOT)` |  Returns the molar creation and destruction rates of the species given pressure, temperature(s) and mass fractions; see [Equation 3-51](../chemkin_th/i11616.md#i39748 "Equation 3–51") .   
`SUBROUTINE CKCDYR (RHO, T, Y, ICKWRK, RCKWRK, CDOT, DDOT)` |  Returns the molar creation and destruction rates of the species given mass density, temperature(s) and mass fractions; see [Equation 3-51](../chemkin_th/i11616.md#i39748 "Equation 3–51") .   
`SUBROUTINE CKCONT (K, Q, ICKWRK, RCKWRK, CIK)` |  Returns the contributions of the reactions to the molar production rate of a species; see [Equation 3-2](../chemkin_th/pgfId-1075229.md#i12274 "Equation 3–2") and [Equation 3-4](../chemkin_th/pgfId-1075229.md#i91749 "Equation 3–4") .  
`SUBROUTINE CKCTC (T, C, ICKWRK, RCKWRK, CDOT, TAU)` |  Returns the molar creation rates and characteristic destruction times of the species given temperature(s) and molar concentrations; see [Equation 3-54](../chemkin_th/i11616.md#i79011 "Equation 3–54") and [Equation 3-56](../chemkin_th/i11616.md#i33517 "Equation 3–56") .  
`SUBROUTINE CKCTXP (P, T, X, ICKWRK, RCKWRK, CDOT, TAU)` |  Returns the molar creation rates and characteristic destruction times of the species given pressure, temperature(s) and mole fractions; see [Equation 3-54](../chemkin_th/i11616.md#i79011 "Equation 3–54") and [Equation 3-56](../chemkin_th/i11616.md#i33517 "Equation 3–56") .   
`SUBROUTINE CKCTXR (RHO, T, X, ICKWRK, RCKWRK, CDOT, TAU)` |  Returns the molar creation rates and characteristic destruction times of the species given mass density, temperature(s) and mole fractions; see [Equation 3-54](../chemkin_th/i11616.md#i79011 "Equation 3–54") and [Equation 3-56](../chemkin_th/i11616.md#i33517 "Equation 3–56") .   
`SUBROUTINE CKCTYP (P, T, Y, ICKWRK, RCKWRK, CDOT, TAU)` |  Returns the molar creation rates and characteristic destruction times of the species given pressure, temperature(s) and mass fractions; see [Equation 3-54](../chemkin_th/i11616.md#i79011 "Equation 3–54") and [Equation 3-56](../chemkin_th/i11616.md#i33517 "Equation 3–56") .   
`SUBROUTINE CKCTYR (RHO, T, Y, ICKWRK, RCKWRK, CDOT, TAU)` |  Returns the molar creation rates and characteristic destruction times of the species given mass density, temperature(s) and mass fractions; see [Equation 3-54](../chemkin_th/i11616.md#i79011 "Equation 3–54") and [Equation 3-56](../chemkin_th/i11616.md#i33517 "Equation 3–56") .   
`SUBROUTINE CKDHXP (P, T, X, ICKWRK, RCKWRK, HDOT)` |  Returns the heat release rate of the mixture given pressure, temperature(s) and mole fractions.  
`SUBROUTINE CKDHYP (P, T, Y, ICKWRK, RCKWRK, HDOT)` |  Returns the heat release rate of the mixture given pressure, temperature(s) and mass fractions.  
`SUBROUTINE CKKFKR (P, T, X, ICKWRK, RCKWRK, FWDK, REVK)` |  Returns the forward and reverse reaction rates for reactions given pressure, temperature(s) and mole fractions.  
`SUBROUTINE CKKFRT (P, T, ICKWRK, RCKWRK, RKFT, RKRT)` |  Returns the forward and reverse reaction rates for reactions given pressure and temperature(s). This subroutine returns only the temperature-dependent part of the forward and reverse rate constants. The pressure is included in the interface so that general pressure dependence using the logarithmic interpolation is accounted for.  
`SUBROUTINE CKRCXP (P, T, X, ICKWRK, RCKWRK, RCFT, RCRT)` |  Returns the forward and reverse rate constants for all reactions given pressure, temperature and mole fractions; see [Equation 3-4](../chemkin_th/pgfId-1075229.md#i91749 "Equation 3–4") and [Equation 3-19](../chemkin_th/pgfId-1062725.md#i73167 "Equation 3–19") . Note this subroutine will calculate a value for the reverse rate constant irrespective of whether the reaction was deemed reversible in the Pre-processor file. Also note that the concentration of third bodies for third body reactions is included in the returned rate constant. The units for the rate constant will depend on the number of reactants.  
`SUBROUTINE CKRDEX (I, RCKWRK, RD)*` |  Get/put the perturbation factor of the i th reaction  
`SUBROUTINE CKWC (T, C, ICKWRK, RCKWRK, WDOT)` |  Returns the molar production rates of the species given temperature(s) and molar concentrations; see [Equation 3-2](../chemkin_th/pgfId-1075229.md#i12274 "Equation 3–2") .  
`SUBROUTINE CKWXP (P, T, X, ICKWRK, RCKWRK, WDOT)` |  Returns the molar production rates of the species given pressure, temperature(s) and mole fractions; see [Equation 3-2](../chemkin_th/pgfId-1075229.md#i12274 "Equation 3–2") .  
`SUBROUTINE CKWXR (RHO, T, X, ICKWRK, RCKWRK, WDOT)` |  Returns the molar production rates of the species given mass density, temperature(s) and mole fractions; see [Equation 3-2](../chemkin_th/pgfId-1075229.md#i12274 "Equation 3–2") .  
`SUBROUTINE CKWYP (P, T, Y, ICKWRK, RCKWRK, WDOT)` |  Returns the molar production rates of the species given pressure, temperature(s) and mass fractions; see [Equation 3-2](../chemkin_th/pgfId-1075229.md#i12274 "Equation 3–2") .  
`SUBROUTINE CKWYPK (P, T, Y, RKFT, RKRT, ICKWRK, RCKWRK, WDOT)` |  Returns the molar production rates of the species given pressure, temperature(s) and mass fractions; see [Equation 3-2](../chemkin_th/pgfId-1075229.md#i12274 "Equation 3–2") .  
`SUBROUTINE CKWYR (RHO, T, Y, ICKWRK, RCKWRK, WDOT)` |  Returns the molar production rates of the species given mass density, temperature and mass fractions; see [Equation 3-2](../chemkin_th/pgfId-1075229.md#i12274 "Equation 3–2") .  
  
[a] Where appropriate, the description refers to an equation number in
[Chemkin Theory Manual](../chemkin_th/chemkin_th.md "Chemkin Theory Manual")
.

  

[ « 4.12. Mean Thermodynamic Properties (Molar Units)](pgfId-1067658.md)

 [4.14. Equilibrium Constants and Rate of Progress Variables »
](pgfId-1068000.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:40-04:00

