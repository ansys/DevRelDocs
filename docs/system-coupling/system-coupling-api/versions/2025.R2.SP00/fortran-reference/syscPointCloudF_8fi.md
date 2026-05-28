---
title: "File syscPointCloudF.fi"
---

![][Fortran]

**Location**: `syscPointCloudF.fi`





## Classes

* [fortran::syscpointcloudf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscpointcloudf)
* [fortran::syscgetpointcloudf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetpointcloudf)

## Namespaces

* [fortran](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/namespacefortran)

## Source

```fortran
module fortran
!
! Copyright ANSYS, Inc. 
! Unauthorized use, distribution, or duplication is prohibited.
!
! Provide free-form Fortran interface for
! System Coupling Participant Library.
!
! *********************************************************************
! *********************************************************************
type :: syscpointcloudf
  type(syscoutputintegerdataf) :: nodeids
  type(syscoutputvectordataf) :: nodecoords
end type syscpointcloudf
!
!**********************************************************************
!**********************************************************************
interface syscgetpointcloudf
!
!**********************************************************************
!**********************************************************************
function syscgetpointcloudf_empty() result (ret)
  import :: syscpointcloudf
  type(syscpointcloudf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetPointCloudF_Empty
!DIR$ ENDIF
end function syscgetpointcloudf_empty
!
!**********************************************************************
!**********************************************************************
function syscgetpointcloudf(nodeIds, nodeCoords) result (ret)
  import :: syscpointcloudf, syscoutputintegerdataf, &
    syscoutputvectordataf
  type(syscoutputintegerdataf), intent(in) :: nodeids
  type(syscoutputvectordataf), intent(in) :: nodecoords
  type(syscpointcloudf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetPointCloudF
!DIR$ ENDIF
end function syscgetpointcloudf
!
end interface syscgetpointcloudf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)