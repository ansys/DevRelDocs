# File participantLibraryF.fi

![][Fortran]

**Location**: `participantLibraryF.fi`





## Classes

* [fortran::syscloadlibraryf](interfacefortran_1_1syscloadlibraryf.md#interfacefortran_1_1syscloadlibraryf)

## Namespaces

* [fortran](namespacefortran.md#namespacefortran)

## Source


```fortran
module fortran
!**********************************************************************
!> \brief Provide an interface to load system coupling participant library path
!! and mpi wrapper path to system coupling participant proxy.
!**********************************************************************
!
interface syscloadlibraryf
!
!> \brief Provide a function to load system coupling participant library path
!! and mpi wrapper path to system coupling participant proxy.
!!
!!
!! \param[in] syscPartLibPath  system coupling participant library path
!!
!! \param[in] mpiWrapperPath   mpi wrapper library path
!!
!! \return true if these two libraries are loaded successfully,
!! otherwise it returns false.
logical function syscloadlibraryf(syscPartLibPath, mpiWrapperPath)
!
  character(*), intent(in) :: syscpartlibpath
  character(*), intent(in) :: mpiwrapperpath
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscLoadLibraryF
!DIR$ ENDIF
!
end function syscloadlibraryf
!
end interface syscloadlibraryf
!
end module fortran
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)