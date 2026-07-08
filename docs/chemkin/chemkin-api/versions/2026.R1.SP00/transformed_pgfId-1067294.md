# Equations of State and Mole-Mass Conversions

Table 4.6: Equations of State and Mole-Mass Conversions Subroutines[a]

Subroutine |  Description  
---|---  
`SUBROUTINE CKMMWC (C, ICKWRK, RCKWRK, WTM)` |  Returns the mean molecular weight of the gas mixture given molar concentrations; see [Equation 2-9](../chemkin_th/i92220.md#i29051 "Equation 2–9") .  
`SUBROUTINE CKMMWX (X, ICKWRK, RCKWRK, WTM)` |  Returns the mean molecular weight of the gas mixture given mole fractions; see [Equation 2-8](../chemkin_th/i92220.md#i28883 "Equation 2–8") .  
`SUBROUTINE CKMMWY (Y, ICKWRK, RCKWRK, WTM)` |  Returns the mean molecular weight of the gas mixture given mass fractions; see [Equation 2-7](../chemkin_th/i92220.md#i88404 "Equation 2–7") .  
`SUBROUTINE CKPC (T, C, ICKWRK, RCKWRK, P)` |  Returns the pressure of the gas mixture given temperature(s) and molar concentrations; see [Equation 2-5](../chemkin_th/i92220.md#i83323 "Equation 2–5") .  
`SUBROUTINE CKPX (RHO, T, X, ICKWRK, RCKWRK, P)` |  Returns the pressure of the gas mixture given mass density, temperature(s) and mole fractions; see [Equation 2-5](../chemkin_th/i92220.md#i83323 "Equation 2–5") .  
`SUBROUTINE CKPY (RHO, T, Y, ICKWRK, RCKWRK, P)` |  Returns the pressure of the gas mixture given mass density, temperature(s) and mass fractions; see [Equation 2-5](../chemkin_th/i92220.md#i83323 "Equation 2–5") .  
`SUBROUTINE CKRHOC (P, T, C, ICKWRK, RCKWRK, RHO)` |  Returns the mass density of the gas mixture given pressure, temperature(s) and molar concentrations; see [Equation 2-6](../chemkin_th/i92220.md#i39928 "Equation 2–6") .  
`SUBROUTINE CKRHOX (P, T, X, ICKWRK, RCKWRK, RHO)` |  Returns the mass density of the gas mixture given pressure, temperature(s) and mole fractions; see [Equation 2-6](../chemkin_th/i92220.md#i39928 "Equation 2–6") .  
`SUBROUTINE CKRHOY (P, T, Y, ICKWRK, RCKWRK, RHO)` |  Returns the mass density of the gas mixture given pressure, temperature(s) and mass fractions; see [Equation 2-6](../chemkin_th/i92220.md#i39928 "Equation 2–6") .  
`SUBROUTINE CKCTX (C, ICKWRK, RCKWRK, X)` |  Returns the mole fractions given molar concentrations; see [Equation 2-17](../chemkin_th/pgfId-1075332.md#i85573 "Equation 2–17") .  
`SUBROUTINE CKCTY (C, ICKWRK, RCKWRK, Y)` |  Returns the mass fractions given molar concentrations; see [Equation 2-16](../chemkin_th/pgfId-1075325.md#i95737 "Equation 2–16") .  
`SUBROUTINE CKXTCP (P, T, X, ICKWRK, RCKWRK, C)` |  Returns the molar concentrations given pressure, temperature(s) and mole fractions; see [Equation 2-14](../chemkin_th/pgfId-1075313.md#i34169 "Equation 2–14") .  
`SUBROUTINE CKXTCR (RHO, T, X, ICKWRK, RCKWRK, C)` |  Returns the molar concentrations given mass density, temperature(s), and mole fractions; see [Equation 2-15](../chemkin_th/pgfId-1075313.md#i95185 "Equation 2–15") .  
`SUBROUTINE CKXTY (X, ICKWRK, RCKWRK, Y)` |  Returns the mass fractions given mole fractions; see [Equation 2-13](../chemkin_th/pgfId-1075306.md#i49933 "Equation 2–13") .  
`SUBROUTINE CKYTCP (P, T, Y, ICKWRK, RCKWRK, C)` |  Returns the molar concentrations given pressure, temperature(s) and mass fractions; see [Equation 2-11](../chemkin_th/pgfId-1075294.md#i73590 "Equation 2–11") .  
`SUBROUTINE CKYTCR (RHO,T, Y, ICKWRK, RCKWRK, C)` |  Returns the molar concentrations given mass density, temperature(s) sand mass fractions; see [Equation 2-12](../chemkin_th/pgfId-1075294.md#i82753 "Equation 2–12") .  
`SUBROUTINE CKYTX (Y, ICKWRK, RCKWRK, X)` |  Returns the mole fractions given mass fractions; see [Equation 2-10](../chemkin_th/pgfId-1075287.md#i29580 "Equation 2–10") .   
  
[a] Where appropriate, the description refers to an equation number in
[Chemkin Theory Manual](../chemkin_th/chemkin_th.md "Chemkin Theory Manual")
.

  

[ « 4.6. Gas Constants and Units](pgfId-1067123api.md)

 [4.8. Thermodynamic Properties (Nondimensional) » ](pgfId-1067361.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:38-04:00

