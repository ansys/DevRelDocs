# Example for a Multi-Temperature Plasma

The application of Gas-phase Kinetics to non-equilibrium plasma systems
requires that the kinetics coefficients can be specified independently of the
problem or application. For example, some assumption must be made a priori
about the electron-energy distribution function (`EEDF`) when specifying
electron-impact kinetics. In reality the `EEDF` will depend on the reactor
conditions, such as the local electric field magnitude or the degree of
dissociation of a molecular gas. These conditions are problem-dependent, such
that including these effects requires coupling between the kinetics-rate
determination and the `EEDF` determination. While we foresee a need in future
Gas-phase Kinetics development for treatment of fundamental reaction cross-
section data, there are many systems where application of problem-independent
kinetics in plasma modeling is reasonable. Such applications include plasma
conditions where the `EEDF` is nearly Maxwellian, such as near-thermal
atmospheric-pressure plasma jets, or very low-pressure, high-electron-density
systems for microelectronics processing.

The input file to the Gas-phase Kinetics Pre-processor for a chlorine-plasma
excitation process is shown in [Example 1.3: Sample Plasma Reaction Mechanism
as Read by the Gas-phase Kinetics Pre-processor](pgfId-1017885.md#i94426
"Example 1.3: Sample Plasma Reaction Mechanism as Read by the Gas-phase
Kinetics Pre-processor") . As with the previous hydrogen-oxidation example,
the file first specifies the elements and species that appear in the mechanism
and then describes the reaction mechanism. Here, electrons must be specified
both as an element and as a species. The elemental composition of a
unipositive ion is that of the corresponding neutral minus one electron. This
information is given in the species thermodynamic data and will be described
further in the next section. As in the thermal system, three Arrhenius
coefficients are used by default to describe reaction rates for electron-
impact kinetics. The auxiliary keyword '`TDEP` ' on a line following the
reaction statement indicates that the reaction rate is a function of the
temperature of the species specified in the slashes following the `TDEP`
keyword.

As shown in [Example 1.3: Sample Plasma Reaction Mechanism as Read by the Gas-
phase Kinetics Pre-processor](pgfId-1017885.md#i94426 "Example 1.3: Sample
Plasma Reaction Mechanism as Read by the Gas-phase Kinetics Pre-processor") ,
most of the plasma reactions require some auxiliary information beyond the
Arrhenius coefficients to distinguish the reaction description from the
default thermal reactions. `TDEP` is one example of an auxiliary keyword that
specifies the temperature dependence of the reaction. `EXCI` is used typically
to indicate an excitation reaction. Such "reactions" are often included to
allow calculation of inelastic energy loss rates for electrons, without
requiring the user to include all excited states as new species in the
reaction mechanism. The auxiliary information following the keyword `EXCI`
represents the energy-loss per collision in electron volts. The keyword `DUP`
is included to allow multiple occurrences of reaction statements that have
different rate coefficients or different auxiliary information, but otherwise
appear identical. This is frequently necessary in the specification of
multiple excitation reactions from the same ground-state species. The use of
auxiliary keywords is described in greater detail in the [Chemkin Input
Manual](../chemkin_in/chemkin_in.md "Chemkin Input Manual") Input Manual.

Another important aspect of the plasma reactions shown in [Example 1.3: Sample
Plasma Reaction Mechanism as Read by the Gas-phase Kinetics Pre-
processor](pgfId-1017885.md#i94426 "Example 1.3: Sample Plasma Reaction
Mechanism as Read by the Gas-phase Kinetics Pre-processor") is that they are
all specified as irreversible reactions. This is in contrast to thermal
reactions, which are usually reversible and reverse rates can be calculated
directly from species thermodynamic properties. In the case of electron
kinetics, the interactions between electrons and neutral species can be
intrinsically irreversible. While detailed balancing may be appropriate for
near-thermal plasmas, the use of Ansys Chemkin thermodynamics is not
appropriate for determining reverse rates. In such cases, the user should
explicitly supply reverse kinetic parameters, or specify a reverse path as an
additional irreversible reaction.

Example 1.3: Sample Plasma Reaction Mechanism as Read by the Gas-phase
Kinetics Pre-processor

    
    
    ELEMENTS E CL END
    SPECIES  E CL+ CL2+ CL- CL* CL CL2 END
    REACTIONS  KELVIN  MOLECULES
    ! reaction rates from Maxwellian EEDF
      E + CL2  => E + CL2       2.5141E-02  -1.4443E+00   1.6650E+04
        TDEP/E/      !vibrational excitation
        EXCI/ 0.07/
        DUP
      E + CL2  => CL- + CL      5.8901E-09  -2.5619E-01   1.5834E+04
        TDEP/E/      !dissociative attachment
      E + CL2  => 2CL + E       1.5356E-06  -3.4642E-01   7.0850E+04
        TDEP/E/      !dissociation
      E + CL2  => E + CL2       6.3477E-06  -5.3987E-01   1.3920E+05
        TDEP/E/      !electronic excitation
        EXCI/ 9.25/
        DUP
      E + CL2  => CL2+ + 2E     1.1227E-04  -6.0067E-01   1.8070E+05
        TDEP/E/      !ionization
      E + CL-  => CL + 2E       3.1197E-06  -2.8757E-01   7.2058E+04
        TDEP/E/      !detachment
      E + CL  =>  E + CL*       1.2363E-05  -6.1356E-01   1.3297E+05
        TDEP/E/      !4s excitation
      E + CL  =>  E + CL        1.2363E-05  -6.1356E-01   1.3297E+05
        TDEP/E/      !4s excitation energy loss
        EXCI/ 9.55/
        DUP
      E + CL  =>  E + CL        9.4444E-05  -7.3093E-01   1.5413E+05
        TDEP/E/      !3d excitation
        EXCI/11.65/
        DUP
      E + CL  =>  CL+ + 2E      2.3736E-04  -7.0894E-01   1.8374E+05
        TDEP/E/      !ionization
      E + CL*  => CL+ + 2E      2.6471E-05  -4.3906E-01   6.3670E+04
        TDEP/E/      !Cl* ionization
      CL- + CL2+    => CL + CL2        5.00E-08  0.0         0
      CL- + CL+     => 2CL             5.00E-08  0.0         0
    END

  

Consider a simple form of the electron conservation equation for a closed
system:

![](graphics/pgfId-1017950.svg)| (1-2)  
---|---  
  
where ![](graphics/eq70293795-5452-9866-0474-453739521730.svg) is the electron
molar concentration and
![](graphics/eq84267563-8249-6958-8288-169867362915.svg) the electron molar
production rate. The representation of this equation begins with Gas-phase
Kinetics subroutine calls:

Example 1.4: Gas-phase Kinetics Subroutine

    
    
    CALL CKINIT(LENIWK, LENRWK, LENCWK, LINKCK, LOUT, ICKWRK, RCKWRK, CCKWRK, IFLAG)
    CALL CKINDX(ICKWRK, RCKWRK, MM, KK, II, NFIT)
    CALL PKINDX(ICKWRK, KEL, KKION)
    CALL CKKTFL(ICKWRK, KTFL)
    CALL CKWC(T, C, ICKWRK, RCKWRK, WDOT)

  

As in the hydrogen-oxidation example, the first call is to the initialization
subroutine `CKINIT`. `CKINDX` provides general chemistry indices, while
`PKINDX` provides plasma-specific index information. In this case, we call
`PKINDX` to get `KEL`, the location in the species array of the electron. In
other words, there is no requirement for the species '`E` ' to be in any
particular order in the mechanism species list. `KKION` is the number of
positive and negative ions in the chemistry mechanism. The call to `CKKTFL`
initializes the species temperature flag array in the Gas-phase Kinetics
workspace. Without this call, it is assumed that all species share a common
temperature, which is always the first entry in the temperature array passed
to Gas-phase Kinetics in all subsequent calls. `KTFL` is a user-defined vector
that defines the locations in the temperature array that correspond to each
species temperature. This allows the application to define a different number
of temperatures in the system than the total number of species. For example,
in a two-temperature plasma, where `T(1)` is the gas temperature and `T(2)` is
the electron temperature, the user sets `KTFL(KEL) = 2`, and all other entries
are set to '`1` '. Finally, in the call to `CKWC`, `T` is the temperature
array, and `C` is the vector of species molar concentrations. The output
variable, `WDOT`, is the
![](graphics/eq22231585-5692-0452-7401-330238388594.svg) vector, where
![](graphics/eq66094508-0315-9064-8010-069988328246.svg) is the `KEL`th entry.

* * *

Note:  This API does not support user-written programs or subroutines.
Developing user programs should therefore be considered only by advanced users
with appropriate programming skills.

* * *

[ « 1.4.1. Example: Hydrogen Oxidation](marker-1017775.md)

 [1.5. Structure and Use of the Surface Kinetics Utilities »
](pgfId-1017373.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:37-04:00

