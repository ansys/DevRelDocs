# Structure and Use of the Surface Kinetics Utilities


Using the Surface Kinetics utilities is analogous to using the Gas-phase
Kinetics utilities, and the Surface Kinetics Pre-processor can only be used
after the Gas-phase Kinetics Pre-processor has been executed. The flow of
information from the Gas-phase Kinetics Pre-processor to the Application
program is shown in <a href="#i62358">Figure 1.3: Relationships between the CHEMKIN Pre-processors and an Application</a> . A
third set of utilities, which handles gas-phase molecular transport, may or
may not be needed in a particular Application. The Transport utilities are
described in [Structure and Use of the Transport Utilities](pgfId-1021250.md "1.6. Structure and Use of the Transport Utilities") .

The Gas-phase Kinetics Pre-processor introduces the chemical elements that are
used in the entire Chemistry Set, whether they are in the gas-phase reaction
mechanism or the surface reaction mechanism. Gas-phase species (which can
appear in surface reactions) are also introduced with the Gas-phase Kinetics
Pre-processor. Thus, if a gas-phase species appears in surface reactions, they
must be included in the input to the Gas-phase Kinetics Pre-processor, even if
there are no gas-phase reactions.

<p><a id="i62358">
Figure 1.3: Relationships between the CHEMKIN Pre-processors and an
Application</a></p>

![Relationships between the CHEMKIN Pre-processors and an Application](./graphics/CHEMKIN_Relationships_between_Pre-proc_and_Application.png)

  

Like Gas-phase Kinetics, the Surface Kinetics package is composed of two
software components:

  * Surface Kinetics Pre-processor

  * Surface Kinetics Subroutine Library

As with the Gas-phase Kinetics subroutine library, your own routines or
application programs can call Surface Kinetics subroutines that define the
terms in the equations relating to equation of state, chemical production
rates, and thermodynamics, and then combine the results to define the problem.
The Surface Kinetics subroutines provide information specifically for surface
chemistry on a particular surface material.

The Surface Kinetics Pre-processor first reads the symbolic description of the
surface reaction mechanism and then extracts from a Thermodynamic Database the
appropriate thermodynamic information for the species involved in the surface
reaction mechanism. Gas-phase Kinetics and Surface Kinetics can share a common
database for this purpose. The output of the Surface Kinetics Pre-processor is
the Surface Kinetics Linking File, which contains all the pertinent
information on the elements, species, and reactions in the surface reaction
mechanism. Information on gas-phase species is brought in from the Gas-phase
Kinetics Linking File, and thus is duplicated in the two linking files for
efficiency in subsequent data processing.

The Surface Kinetics Linking File is read by an initialization routine in the
Surface Kinetics Subroutine Library (`SKINIT`) that is called from the Ansys
Chemkin application program. The purpose of the initialization is to populate
three data arrays (one integer, one floating point, and one character data
type), which must be allocated by your program, that are then passed into and
used internally by the other subroutines in the Surface Kinetics Subroutine
Library.

The Surface Kinetics Subroutine Library has approximately seventy (70)
subroutines that return information on elements, species, reactions,
thermodynamic properties, and chemical production rates. Generally, the input
to these routines will be the state of the gas and the surface--pressure,
temperature, and species composition. The species composition is specified in
terms of gas-phase mole fractions, surface site fractions, and bulk-phase
activities; surface site densities are also input to complete the
specification of the state of the surface.

[ « 1.4.2. Example for a Multi-Temperature Plasma](pgfId-1017885.md)

 [1.5.1. Example of Using the Surface Kinetics Pre-processor »
](pgfId-1020396.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:37-04:00

