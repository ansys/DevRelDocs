# MCAVIS

    
    
    MCAVIS    MCAVIS    MCAVIS    MCAVIS    MCAVIS    MCAVIS    MCAVIS    
              **********************************************
                        **************************
                                  ******
    
    SUBROUTINE MCAVIS (T, X, RMCWRK, VISMIX)
    Returns mixture viscosity, given temperature and species mole
    fractions.  It uses modification of the Wilke semi-empirical
    formulas.
    
    INPUT
    T         - Real scalar, temperature.
                   cgs units, K
    X(*)      - Real array, mole fractions of the mixture;
                dimension at least KK, the total species count.
    RMCWRK(*) - Real workspace array; dimension at least LENRMC.
    
    OUTPUT
    VISMIX    - Real scalar, mixture viscosity.
                   cgs units, gm/cm*s

[ « 9.3. MCATDR](pgfId-1070431.md)

 [9.5. MCCCEX » ](pgfId-1070479.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:42-04:00

