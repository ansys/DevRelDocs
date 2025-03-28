# Initialization

Table 4.1: Initialization Subroutines

Subroutine |  Description  
---|---  
`SUBROUTINE CKINDX (ICKWRK, RCKWRK, MM, KK, II, NFIT)*` |  Returns a group of indices defining the size of the particular reaction mechanism.   
`SUBROUTINE CKINIT (LENICK, LENRCK, LENCCK, LINC, LOUT, ICKWRK, RCKWRK, CCKWRK, IFLAG)**` |  Reads the linkfile and creates the internal work arrays ICKWRK, RCKWRK and CCKWRK. CKINIT must be called before any other Gas-phase Kinetics subroutine can be used, as the work arrays must be available as their input.  
`SUBROUTINE CKKTFL (ICKWRK, KTFL)` |  Allows the user to assign a location in the temperature array to use for each gas-phase species.  
`SUBROUTINE CKLEN (LINC, LOUT, LENI, LENR, LENC, IFLAG)` |  Returns the lengths required for work arrays.  
`SUBROUTINE CKLEN2 (LINC, LOUT, LI, LR, LC, MM, KK, II, MAXSP, MAXTP, MAXTB, MAXORD, KKI, IFLAG)` |  Returns the lengths required for work arrays, as well as mechanism size information for memory allocation.  
`SUBROUTINE CKPNT (LSAVE, LOUT, NPOINT, VERS, PREC, LENI, LENR, LENC, KERR)` |  Reads from a file information about a Gas-phase Kinetics linkfile, and pointers for work arrays.  
`SUBROUTINE CKREWR (LINC, LOUT, ICKWRK, RCKWRK, CCKWRK, IFLAG)` |  Rewrites a new linkfile from the data stored in ICKWRK, RCKWRK and CCKWRK.  
`SUBROUTINE CKSAVE (LOUT, LSAVE, ICKWRK, RCKWRK, CCKWRK)` |  Writes to a binary file information about a Gas-phase Kinetics linkfile, pointers for the Gas-phase Kinetics Subroutine Library, and Gas-phase Kinetics work arrays.  
`SUBROUTINE PKINDX (ICKWRK, KELECT, KKION)` |  Returns plasma indices for the particular reaction mechanism.  
  
  

[ « 4.1. Mnemonics](pgfId-1066782.md)

 [4.3. Information About Elements » ](pgfId-1066901.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:38-04:00

