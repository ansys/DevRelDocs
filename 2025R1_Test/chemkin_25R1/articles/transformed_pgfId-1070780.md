# MCSAVE

    
    
    MCSAVE    MCSAVE    MCSAVE    MCSAVE    MCSAVE    MCSAVE    MCSAVE    
              **********************************************
                        **************************
                                  ******
    
    SUBROUTINE MCSAVE (LOUT, LSAVE, IMCWRK, RMCWRK)
    Writes to a binary file information about a Transport linkfile,
    pointers for the Transport library, and Transport work arrays.
    
    INPUT
    LOUT      - Integer scalar, formatted output file unit number.
    LSAVE     - Integer scalar, unformatted output file unit number.
    IMCWRK(*) - Integer workspace array; dimension at least LENIMC.
    RMCWRK(*) - Real    workspace array; dimension at least LENRMC.

[ « 9.14. MCREWR](pgfId-1070760.md)

 [9.16. MCSCON » ](pgfId-1070797.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:42-04:00

