# MCMCDT

    
    
    MCMCDT    MCMCDT    MCMCDT    MCMCDT    MCMCDT    MCMCDT    MCMCDT    
              **********************************************
                        **************************
                                  ******
    
    SUBROUTINE MCMCDT (P, T, X, IMCWRK, RMCWRK, ICKWRK, CKWRK,
                       DT, COND)
    Returns thermal diffusion coefficients, and mixture thermal
    conductivities, given pressure, temperature, and mole fraction.
    
    INPUT
    P         - Real scalar, pressure.
                   cgs units, dynes/cm**2
    T         - Real scalar, temperature.
                   cgs units, K
    X(*)      - Real array, mole fractions of the mixture;
                dimension at least KK, the total species count.
    
    IMCWRK(*) - Integer TRANSPORT workspace array;
                dimension at least LENIMC.
    RMCWRK(*) - Real    TRANSPORT workspace array;
                dimension at least LENRMC.
    ICKWRK(*) - Integer CHEMKIN workspace array;
                dimension at least LENICK.
    RCKWRK(*) - Real    CHEMKIN workspace array;
                dimension at least LENRCK.
    
    OUTPUT
    DT(*)     - Real array, thermal multicomponent diffusion
                coefficients;
                dimension at least KK, the total species count.
                   cgs units, gm/(cm*sec)
                    CGS UNITS - GM/(CM*SEC)
    COND      - Real scalar, mixture thermal conductivity.
                   cgs units, erg/(cm*K*s)

[ « 9.9. MCLEN](pgfId-1070605.md)

 [9.11. MCMDIF » ](pgfId-1070665.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:42-04:00

