# Initialization and Parameters

Table 6.1: Initialization and Parameter Subroutines

Subroutine| Description  
---|---  
`SUBROUTINE MCINIT (LINKMC, LOUT, LENIMC, LENRMC, IMCWRK, RMCWRK)`| This
subroutine serves to read the Linking File from the fitting code and to create
the internal storage and work arrays, IMCWRK(*) and RMCWRK (*). MCINIT must be
called before any other Transport subroutine is called. It must be called
after the Gas-phase Kinetics package is initialized.  
`SUBROUTINE MCPRAM (IMCWRK, RMCWRK EPS, SIG, DIP, POL, ZROT, NLIN)`| This
subroutine is called to return the arrays of molecular parameters as read from
the Transport database.  
`SUBROUTINE MCPNT (LSAVE, LOUT, NPOINT, V, P, LI, LR, IERR)` | Reads from a binary file information about a Transport linkfile, pointers for the Transport Library, and returns lengths of work arrays.  
`SUBROUTINE MCSAVE (LOUT, LSAVE, IMCWRK, RMCWRK)` | Writes to a binary file information about a Transport linkfile, pointers for the Transport library, and Transport work arrays.  
`SUBROUTINE MCREWR (LINKMC, LOUT, IMCWRK, RMCWRK, IFLAG)` | This subroutine writes a new the Transport linkfile from the data stored in the integer and real work arrays, IMCWRK(*) and RMCWRK(*).  
`SUBROUTINE MCLEN (LINKMC, LOUT, LI, LR, IFLAG)` | Returns the lengths required for work arrays.  
  
  

[ « 6.1. Mnemonics](pgfId-1062650.md)

 [6.3. Viscosity » ](pgfId-1062756.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:40-04:00

