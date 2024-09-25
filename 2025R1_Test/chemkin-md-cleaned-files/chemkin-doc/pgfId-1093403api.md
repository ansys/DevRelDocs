# CKHBMS

    CKHBMS    CKHBMS    CKHBMS    CKHBMS    CKHBMS    CKHBMS    CKHBMS    
              **********************************************
                        **************************
                                  ******
    
    SUBROUTINE CKHBMS (T, Y, ICKWRK, RCKWRK, HBMS)
    Returns the mean enthalpy of the mixture in mass units.
    
    INPUT
    T(*)      - Real array, temperature(s); dimension is determined by
                the application program to be the total number of
                species temperatures, nominally 1.
                   cgs units, K
    Y(*)      - Real array, mass fractions of the mixture;
                dimension at least KK, the total species count.
    ICKWRK(*) - Integer workspace array; dimension at least LENICK.
    RCKWRK(*) - Real    workspace array; dimension at least LENRCK.
    
    OUTPUT
    HBMS      - Real scalar, mean enthalpy.
                   cgs units, ergs/gm

[ « 7.55. CKHBML](pgfId-1093379.md)

 [7.57. CKHML » ](pgfId-1093427.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:41-04:00

