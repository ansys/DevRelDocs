# Mnemonics

There are seventeen user-callable subroutines in the package. All subroutine
names begin with `MC`. The following letter is either an `S`, an `A`, or an
`M`, indicating whether pure species (`S`), mixture-averaged (`A`), or
multicomponent (`M`) properties are returned. The remaining letters indicate
which property is returned: `CON` for conductivity, `VIS` for viscosity, `DIF`
for diffusion coefficients, `CDT` for both conductivity and thermal diffusion
coefficients, and `TDR` for the thermal diffusion ratios.

A call to the initialization subroutine `MCINIT` must precede any other call.
This subroutine is normally called only once at the beginning of a problem; it
reads the Linking File and sets up the internal storage and working space -
arrays `IMCWRK` and `RMCWRK`. These arrays are required input to all other
subroutines in the library. Besides `MCINIT` there is only one other non-
property subroutine, called `MCPRAM` ; it is used to return the arrays of
molecular parameters that came from the database for the species in the
problem. All other subroutines are used to compute either viscosities, thermal
conductivities, or diffusion coefficients. They may be called to return pure
species properties, mixture-averaged properties, or multicomponent properties.

In the input to all subroutines, the state of the gas is specified by the
pressure in dynes per square centimeter, temperature in Kelvin, and the
species mole fractions. The properties are returned in standard CGS units. The
order of vector information, such as the vector of mole fractions or pure
species viscosities, is the same as the order declared in the Gas-phase
Kinetics Pre-processor input.

Here we provide a short description of each subroutine according to its
function. In [Alphabetical Listing of the Transport Subroutine
Library](i13005api_list_transportlib.md "Chapter 9: Alphabetical Listing of
the Transport Subroutine Library") we list the subroutines in alphabetical
order and provide a longer description of each subroutine including call-list
details.

[ « Chapter 6: Quick Reference Guide to the Transport Subroutine
Library](i13005api_quickref_transp_lib.md)

 [6.2. Initialization and Parameters » ](pgfId-1062725api.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:40-04:00

