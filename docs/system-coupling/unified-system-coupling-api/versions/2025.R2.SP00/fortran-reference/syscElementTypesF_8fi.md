# File syscElementTypesF.fi

![][Fortran]

**Location**: `syscElementTypesF.fi`





## Namespaces

* [fortran](namespacefortran.md#namespacefortran)

## Source

```fortran
module fortran
!
! Copyright ANSYS, Inc. 
! Unauthorized use, distribution, or duplication is prohibited.
!
! Provide fixed-form Fortran interface for
! System Coupling Participant Library.
!
! ****** Parameters for element types *********************************
!
integer(kind=4), parameter :: SyscTri3 = 5
integer(kind=4), parameter :: SyscTri6 = 6
integer(kind=4), parameter :: SyscQuad4 = 7
integer(kind=4), parameter :: SyscQuad8 = 8
integer(kind=4), parameter :: SyscTet4 = 9
integer(kind=4), parameter :: SyscTet10 = 10
integer(kind=4), parameter :: SyscHex8 = 11
integer(kind=4), parameter :: SyscHex20 = 12
integer(kind=4), parameter :: SyscWedge6 = 13
integer(kind=4), parameter :: SyscWedge15 = 14
integer(kind=4), parameter :: SyscPyramid5 = 15
integer(kind=4), parameter :: SyscPyramid13 = 16
integer(kind=4), parameter :: SyscPolygon = 18
integer(kind=4), parameter :: SyscPolyhedron = 19
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)