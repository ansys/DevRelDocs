# MCMDIF

    
    
    MCMDIF    MCMDIF    MCMDIF    MCMDIF    MCMDIF    MCMDIF    MCMDIF    
              **********************************************
                        **************************
                                  ******
    
    SUBROUTINE MCMDIF (P, T, X, KDIM, IMCWRK, RMCWRK, D)
    Returns the ordinary multicomponent diffusion coefficients,
    given pressure, temperature, and mole fractions.
    
    INPUT
    P         - Real scalar, pressure.
                   cgs units, dynes/cm**2
    T         - Real scalar, temperature.
                   cgs units, K
    X(*)      - Real array, mole fractions of the mixture;
                dimension at least KK, the total species count.
    KDIM      - Integer scalar, actual first dimension of D(KDIM,KK);
                KDIM must be at least KK, the total species count.
    IMCWRK(*) - Integer workspace array; dimension at least LENIMC.
    RMCWRK(*) - Real    workspace array; dimension at least LENRMC.
    
    OUTPUT
    D(*,*)    - Real matrix, ordinary multicomponent diffusion
                coefficients;
                dimension at least KK, the total species count, for
                both the first and second dimensions.
                   cgs units, cm**2/s

[ « 9.10. MCMCDT](pgfId-1070627.md)

 [9.12. MCPNT » ](pgfId-1070695.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:42-04:00

