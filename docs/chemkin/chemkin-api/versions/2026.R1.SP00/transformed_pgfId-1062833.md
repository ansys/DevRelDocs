# Diffusion Coefficients

Table 6.4: Diffusion Coefficients Subroutines

Subroutine| Description  
---|---  
`SUBROUTINE MCSDIF (P, T, KDIM, RMCWRK, DJK)` | This subroutine computes the binary diffusion coefficients given the pressure and temperature.  
`SUBROUTINE MCADIF (P, T, X, RMCWRK, D)`| This subroutine computes the
mixture-averaged diffusion coefficients given the pressure, temperature, and
species mole fractions.  
`SUBROUTINE MCMDIF (P, T, X, KDIM, IMCWRK, RMCWRK, D)` | This subroutine computes the ordinary multicomponent diffusion coefficients given the pressure, temperature, and mole fractions.   
`SUBROUTINE MCCDEX (K, KDIM, RCKWRK, COFDIF)` | Gets or puts values of the fitting coefficients for the polynomial fits to species binary diffusion coefficients.  
  
  

[ « 6.4. Conductivity](pgfId-1062795.md)

 [6.6. Thermal Diffusion » ](pgfId-1021042.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:40-04:00

