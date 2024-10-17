# MCLEN

    
    
    MCLEN     MCLEN     MCLEN     MCLEN     MCLEN     MCLEN     MCLEN     
              **********************************************
                        **************************
                                  ******
    
    SUBROUTINE MCLEN (LINKMC, LOUT, LI, LR, IFLAG)
    Returns the lengths required for work arrays.
    
    INPUT
    LINKMC   - Integer scalar, input file unit for the linkfile.
    LOUT     - Integer scalar, formatted output file unit.
    
    OUTPUT
    LI       - Integer scalar, minimum length required for the
               integer work array.
    LR       - Integer scalar, minimum length required for the
               real work array.
    IFLAG    - Integer scalar, indicates successful reading of
               linkfile; IFLAG>0 indicates error type.

[ « 9.8. MCINIT](pgfId-1070567.md)

 [9.10. MCMCDT » ](pgfId-1070627.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:42-04:00

