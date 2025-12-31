# Example: Hydrogen Oxidation

The input file to the Gas-phase Kinetics Pre-processor for a hydrogen-
oxidation process is shown in [Example 1.1: Sample Reaction Mechanism as Read
by the Gas-phase Kinetics Pre-processor](marker-1017775.md#i62305 "Example
1.1: Sample Reaction Mechanism as Read by the Gas-phase Kinetics Pre-
processor") . First, the file specifies the elements and species that appear
in the mechanism, and then includes the reaction mechanism description. The
input is essentially format free. The elements and species names need only be
separated by blank spaces, but may also be separated by tabs or blank lines.
In the REACTIONS section, the character string that describes the reaction
appears on the left and is followed by the three Arrhenius coefficients (pre-
exponential factor, temperature exponent, and activation energy). Enhanced
third body efficiencies for selected species are specified in the line
following that for several reactions that contain an arbitrary third body,
`M`. Exclamation marks signify the beginning of comments and the remainder of
the line is ignored.

Example 1.1: Sample Reaction Mechanism as Read by the Gas-phase Kinetics Pre-
processor

    
    
    ELEMENTS  H O N END
    SPECIES   H2 H O2 O OH HO2 H2O2 H2O N N2 NO END
    REACTIONS
       H2+O2=2OH                  0.170E+14   0.00     47780
       OH+H2=H20+H                0.117E+10   1.30      3626   !D-L&W
       O+OH=O2+H                  0.400E+15  -0.50         0   !JAM 1986
       O+H2=OH+H                  0.506E+05   2.67      6290   !KLEMM ET AL., 1986
       H+O2+M=HO2+M               0.361E+18  -0.72         0   !DIXON-LEWIS
          H2O/18.6/ H2/2.86/ N2/1.26/
       OH+HO2=H2O+O2              0.750E+13   0.00         0   !D-L
       H+HO2=2OH                  0.140E+15   0.00      1073   !D-L
       O+HO2=O2+OH                0.140E+14   0.00      1073   !D-L
       2OH=O+H2O                  0.600E+09   1.30         0   !COHEN-WEST
       H+H+M=H2+M                 0.100E+19  -1.00         0   !D-L
          H2O/0.0/ H2/0.0/
       H+H+H2=H2+H2               0.920E+17  -0.60         0
       H+H+H2O=H2+H2O             0.600E+20  -1.25         0
       H+OH+M=H2O+M               0.160E+23  -2.00         0   !D-L
          H2O/5/
       H+O+M=OH+M                 0.620E+17  -0.60         0   !D-L
          H2O/5/
       O+O+M=O2+M                 0.189E+14   0.00     -1788   !NBS
       H+HO2=H2+O2                0.125E+14   0.00         0   !D-L
       HO2+HO2=H2O2+O2            0.200E+13   0.00         0
       H2O2+M=OH+OH+M             0.130E+18   0.00     45500
       H2O2+H=HO2+H2              0.160E+13   0.00      3800
       H2O2+OH=H2O+HO2            0.100E+14   0.00      1800
       O+N2=NO+N                  0.140E+15   0.00     75800
       N+O2=NO+O                  0.640E+10   1.00      6280
       OH+N=NO+H                  0.400E+14   0.00         0
    END

  

Assume the governing equation we wish to study is the energy conservation
equation for a constant-pressure environment:

![image](./graphics/pgfId-1017826.svg)| (1-1)  
---|---  
  
where ![image](./graphics/eq46866867-7696-0694-4316-160670959464.svg) is the
temperature, ![image](./graphics/eq03997499-9721-2657-4837-302200179031.svg) the mass
density, ![image](./graphics/eq63147088-2251-7922-1261-201208011563.svg) the mean
specific heat, ![image](./graphics/eq13044458-1852-7664-2739-935200283902.svg) the
molar species enthalpies, and
![image](./graphics/eq81120276-6457-6675-0451-615086917044.svg) the species molar
production rates. The representation of this equation begins with Gas-phase
Kinetics subroutine calls (the output variables are underlined to help
distinguish them):

Example 1.2: Gas-phase Kinetics subroutine call

    
    
    CALL CKINIT(LENIWK, LENRWK, LENCWK, LINKCK, LOUT, ICKWRK, RCKWRK, CCKWRK, IFLAG)
    CALL CKINDX(ICKWRK, RCKWRK, MM, KK, II, NFIT)
    CALL CKRHOY(P, T, Y, ICKWRK, RCKWRK, RHO)
    CALL CKCPBS(T, Y, ICKWRK, RCKWRK, CPB)
    CALL CKHML (T, ICKWRK, RCKWRK, HML)
    CALL CKWYP (P, T, Y, ICKWRK, RCKWRK, WDOT)

  

The complete details for these calls are explained in later sections of this
manual; the objective here is to illustrate the relative simplicity of writing
an Ansys Chemkin application. Briefly, the first call is to the initialization
subroutine `CKINIT`, which reads the Linking File created by the Pre-processor
and fills the three work arrays. `LENIWK`, `LENRWK` and `LENCWK` are
dimensions provided by the user for the data arrays `ICKWRK`, `RCKWRK`, and
`CCKWRK`. `IFLAG` is an error flag that is returned with a zero value if no
errors occur. `LINKCK` is the logical file unit number of the Linking File,
chem.asc, and `LOUT` is the logical file number for printed diagnostic and
error messages. The call to `CKINDX` provides index information about the
reaction mechanism: `MM` is the number of elements contained in the species,
`KK` is the number of gas-phase species, `II` is the number of reactions, and
`NFIT` is the number of coefficients in the thermodynamic fits. In the
remaining calls, `P`, `T`, and `Y` are the pressure, temperature, and vector
of species mass fractions, respectively. The output variables correspond to
the various terms for describing the equation, that is,
![image](./graphics/eq36566803-6667-6571-7922-127283430023.svg),
![image](./graphics/eq22108436-4521-9416-6238-010525748851.svg),
![image](./graphics/eq16410964-9849-7019-0098-502088480680.svg), and
![image](./graphics/eq23187667-5429-7985-3164-448329329190.svg).

The FORTRAN representation of the governing equation, given by combining the
results of the above subroutine calls, is simply

Figure 1.2: FORTRAN representation of an energy equation

    
    
        SUM=0.0
        DO 100 K=1,KK
           SUM = SUM + HML(K)*WDOT(K)
    100 CONTINUE
        DTDT = -SUM/(RHO*CPB)

  

One can see from this example that relatively little programming effort is
required to form a conservation equation for an arbitrary reaction mechanism.

[ « 1.4. Structure and Use of Gas-phase Kinetics
Utilities](pgfId-1040829.md)

 [1.4.2. Example for a Multi-Temperature Plasma » ](pgfId-1017885.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:37-04:00

