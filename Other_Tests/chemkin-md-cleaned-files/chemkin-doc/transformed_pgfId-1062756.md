# Viscosity

Table 6.2: Viscosity Subroutines

Subroutine| Description  
---|---  
`SUBROUTINE MCSVIS (T, RMCWRK, VIS)`| This subroutine computes the array of
pure species viscosities given the temperature.  
`SUBROUTINE MCAVIS (T, X, RMCWRK, VISMIX)`| This subroutine computes the
mixture viscosity given the temperature and the species mole fractions. It
uses modifications of the Wilke semi-empirical formulas.  
`SUBROUTINE MCCVEX (K, KDIM, RCKWRK, COFVIS)` | Gets or puts values of the fitting coefficients for the polynomial fits to species viscosity.  
  
  

[ « 6.2. Initialization and Parameters](pgfId-1062725api.md)

 [6.4. Conductivity » ](pgfId-1062795.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:40-04:00

