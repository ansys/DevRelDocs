# Information About Reactions

Table 4.4: Information about Reactions Subroutines[a]

Subroutine |  Description  
---|---  
`SUBROUTINE CKABE (ICKWRK, RCKWRK, RA, RB, RE)` |  Returns the Arrhenius coefficients of the reactions; see [Equation 3-5](../chemkin_th/pgfId-1075229.md#i71194 "Equation 3–5") .  
`SUBROUTINE CKFAL (NDIM, ICKWRK, RCKWRK, IFOP, IFLO, KFAL, FPAR)` |  Returns a set of flags indicating whether a reaction has pressure- dependent behavior and an array of parameters.  
`SUBROUTINE CKFALP (P, T, X, ICKWRK, RCKWRK, I, RKLOW, CTB, PR, FC, PCOR)` |  Returns details concerning the reaction rate constant for pressure-dependent reactions.   
`SUBROUTINE CKHRX (I, HML, ICKWRK, RCKWRK, HRXI)` |  Returns the molar heat of reaction I.  
`SUBROUTINE CKIEXC (ICKWRK, RCKWRK, IEXC, EEXC)` |  Returns a set of flags indicating whether the reactions are excitation reactions and, if so, the energy loss per event in eV.  
`SUBROUTINE CKIMOM (ICKWRK, IMOM)` |  Returns a set of flags indicating whether the reactions are electron momentum-transfer collision frequencies and, if so, the index of the species with which the electron collides.  
`SUBROUTINE CKINU (I, NDIM, ICKWRK, RCKWRK, NSPEC, KI, NU)` |  Returns a count of species in a reaction, and their indices and stoichiometric coefficients; see [Equation 3-3](../chemkin_th/pgfId-1075229.md#i44415 "Equation 3–3") .  
`SUBROUTINE CKIORD (IDIM, KDIM, ICKWRK, RCKWRK, NIORD, IORD, FORD, RORD)` |  Returns the count and indices of reactions with modified species order and the order values for the species.  
`SUBROUTINE CKIREV (IR, ICKWRK, RCKWRK, IREV, RAR, RBR, RER)` |  Returns an integer flag to indicate whether reaction IR has an explicitly assigned reverse rate constant. It also returns the reverse Arrhenius expression values for reaction IR, if it was explicitly assigned in the Gas-phase Kinetics Pre-processor. If reverse Arrhenius values were not explicitly assigned, RAR, RBR and RER will be zero.  
`SUBROUTINE CKIRNU (IDIM, NDIM, ICKWRK, RCKWRK, NIRNU, IRNU, NSPEC, KI, RNU)` |  Returns the count and indices of reactions with real stoichiometric coefficients, counts of species in the reactions, and the species indices and coefficients; see [Equation 3-3](../chemkin_th/pgfId-1075229.md#i44415 "Equation 3–3") .  
`SUBROUTINE CKITDE (ICKWRK, RCKWRK, ITDE)` |  Returns a set of flags indicating whether the reactions are non-thermal, and if so, returns the index of the species on which the reaction depends.  
`SUBROUTINE CKITR (ICKWRK, RCKWRK, ITHB, IREV)` |  Returns a set of flags indicating whether the reactions are reversible or whether they contain arbitrary third bodies.  
`SUBROUTINE CKIUQ (ICKWRK, RCKWRK, IQUSR)` |  Returns a set of flags indicating whether the reactions are user-modify rate-of-progress reactions, and if so, the user-modify type.  
`SUBROUTINE CKIXSM (ICKWRK, IXSM, IXSK)` |  Returns a set of flags indicating whether the reactions are ion momentum-transfer cross sections.  
`SUBROUTINE CKKUW (ICKWRK, KWUSR)` |  Returns a set of flags indicating whether the species are user-modify rate-of-production species, and if so, the user-modify type.  
`SUBROUTINE CKNU (KDIM, ICKWRK, RCKWRK, NUKI)` |  Returns the stoichiometric coefficients of the reactions; see [Equation 3-3](../chemkin_th/pgfId-1075229.md#i44415 "Equation 3–3") .  
`SUBROUTINE CKNUF (KDIM, ICKWRK, RCKWRK, NUFKI)` |  Returns the forward stoichiometric coefficients for reactions; by definition, reactants' coefficients are negative; see [Equation 3-3](../chemkin_th/pgfId-1075229.md#i44415 "Equation 3–3") . Contrast this subroutine with subroutine CKNU, which returns the net stoichiometric coefficients for a reaction.  
`SUBROUTINE CKRAEX (I, RCKWRK, RA)*` |  Get/put the Pre-exponential coefficient of the i th reaction   
`SUBROUTINE CKSYMR (I, LOUT, ICKWRK, RCKWRK, CCKWRK, LT, ISTR, KERR)*` |  Returns a character string which describes the i th reaction, and the effective length of the character string.  
`SUBROUTINE CKTHB (KDIM, ICKWRK, RCKWRK, AKI)` |  Returns matrix of enhanced third body coefficients; see [Equation 3-19](../chemkin_th/pgfId-1062725.md#i73167 "Equation 3–19") .  
`SUBROUTINE CKWL (ICKWRK, RCKWRK, WL)` |  Returns a set of flags providing information on the wave length of photon radiation.   
  
[a] Where appropriate, the description refers to an equation number in
[Chemkin Theory Manual](../chemkin_th/chemkin_th.md "Chemkin Theory Manual")
.

  

[ « 4.4. Information About Species](pgfId-1066953.md)

 [4.6. Gas Constants and Units » ](pgfId-1067123api.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:38-04:00

