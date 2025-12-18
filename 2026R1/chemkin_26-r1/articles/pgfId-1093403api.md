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







