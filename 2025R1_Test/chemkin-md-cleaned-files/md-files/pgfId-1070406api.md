# MCADIF



    MCADIF    MCADIF    MCADIF    MCADIF    MCADIF    MCADIF    MCADIF    
              **********************************************
                        **************************
                                  ******

    SUBROUTINE MCADIF (P, T, X, RMCWRK, D)
    Returns mixture-averaged diffusion coefficients given pressure,
    temperature, and species mole fractions.

    INPUT
    P         - Real scalar, pressure.
                   cgs units, dynes/cm**2
    T         - Real scalar, temperature.
                   cgs units, K
    X(*)      - Real array, mole fractions of the mixture;
                dimension at least KK, the total species count.
    RMCWRK(*) - Real workspace array; dimension at least LENRMC.

    OUTPUT
    D(*)      - Real array, mixture diffusion coefficients;
                dimension at least KK, the total species count.
                   cgs units, cm**2/s

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.


Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:22:52-04:00

