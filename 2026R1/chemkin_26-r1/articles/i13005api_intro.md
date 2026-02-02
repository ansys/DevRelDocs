# Chapter 1: Introduction

Advanced users of Ansys Chemkin may want to write their own custom Chemkin
program, or they may want to modify or supplement the functionality of
existing Chemkin application programs. This manual provides guidance for both
options. The API manual contains detailed programming-interface information
for accessing Chemkin's subroutine libraries for gas-phase kinetics, surface-
kinetics, thermodynamic-property, and transport-property utilities. Explicit
instructions are also given for modifying user-routine templates to customize
existing Chemkin reactor-model programs. The Chemkin subroutine libraries may
be accessed either from user-modified subroutines called by Chemkin pre-
packaged Reactor Models, or from entirely user-written application programs.
User application programs may be written in C, C++, or FORTRAN computer
languages.

* * *

**Note:**   In each chapter where the definition and argument list of each
routine is described, the FORTRAN interface is shown with the additional
subroutine or function appendix or additional arguments required by the C++
interface enclosed in { }. For example:

```
SUBROUTINE CKCOMP{_C} ({N,NARRAY, } IST, IRAY, II, I)

has FORTRAN interface                           and C++ interface
SUBROUTINE CKCOMP (IST, IRAY, II, I)            SUBROUTINE CKCOMP_C (N,NARRAY, IST, IRAY, II,
                                                I)
```

* * *

All Ansys Chemkin user subroutines are currently in FORTRAN. For all
Chemkin/API programmers, access to a supported FORTRAN compiler and basic
knowledge of FORTRAN linking procedures are required. For C/C++ programmers,
access to a supported C or C++ compiler is also required. Details of these
requirements are discussed in each chapter of this manual.

The remainder of [Introduction](i13005api_intro.md "Chapter 1: Introduction") contains an overview of the structure of a typical Ansys
Chemkin-based program and the interactions between different utility
components in a Chemkin application program. [User Supplemental Programming](i13005api_user_sup_prog.md) provides detailed instructions for
modifying user-routines to supplement the behavior of Chemkin Reactor Models.
[Writing User Applications](i13005api_writing_userapps.md) provides
instructions on how to write an application program from scratch, which uses
calls to the various Chemkin subroutine libraries, including several complete
example programs. [Quick Reference Guide to the Gas-phase Kinetics Subroutine Library](i13005api_quickref_gaskinetics.md) , [Quick Reference Guide to the Surface Kinetics Subroutine Library](i13005api_refsurfkineticslib.md) , and
[Quick Reference Guide to the Transport Subroutine Library](i13005api_quickref_transp_lib.md) contain quick-reference lists of
the available subroutines in the three subroutine libraries for gas-phase
kinetics, surface kinetics, and transport-properties. Finally, [Alphabetical Listing of the Gas-phase Kinetics Subroutine Library](i13005api_list_gpk.md), [Alphabetical Listing of the Surface Kinetics Subroutine Library](i13005api_list_surf_kin.md) , and [Alphabetical Listing of the Transport Subroutine Library](i13005api_list_transportlib.md) contain alphabetical listings and more detailed descriptions of call lists for all of the subroutines in the three subroutine libraries.
