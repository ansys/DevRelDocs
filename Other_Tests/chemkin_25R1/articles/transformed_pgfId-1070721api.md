# MCPRAM

    
    
    MCPRAM    MCPRAM    MCPRAM    MCPRAM    MCPRAM    MCPRAM    MCPRAM    
              **********************************************
                        **************************
                                  ******
    
    SUBROUTINE MCPRAM (IMCWRK, RMCWRK, EPS, SIG, DIP, POL, ZROT, NLIN)
    Returns the arrays of molecular parameters as read from the
    transport database.
    
    INPUT
    IMCWRK(*) - Integer workspace array; dimension at least LENIMC.
    RMCWRK(*) - Real    workspace array; dimension at least LENRMC.
    
    OUTPUT
    EPS(*)    - Real array, Lennard-Jones Potential well depths for
                the species;
                dimension at least KK, the total species count.
                   cgs units, K
    SIG(*)    - Real array, Lennary-Jones collision diameters for
                the species;
                dimension at least KK, the total species count.
                   cgs units, Angstrom
    DIP(*)    - Real array, dipole moments for the species;
                dimension at least KK, the total species count.
                   cgs units, Debye
    POL(*)    - Real array, polarizabilities for the species;
                dimension at least KK, the total species count.
                   cgs units, Angstrom**3
    ZROT(*)   - Real array, rotational collision numbers evaluated at
                298K for the species;
                dimension at least KK, the total species count.
    NLIN(*)   - Integer array, flags for species linearity;
                dimension at least KK, the total species count.
                NLIN=0, single atom,
                NLIN=1, linear molecule,
                NLIN=2, linear molecule.

[ « 9.12. MCPNT](pgfId-1070695.md)

 [9.14. MCREWR » ](pgfId-1070760.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:42-04:00

