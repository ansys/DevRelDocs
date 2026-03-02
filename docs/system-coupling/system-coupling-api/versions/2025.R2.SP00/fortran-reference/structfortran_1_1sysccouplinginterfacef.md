# Type fortran::sysccouplinginterfacef undefined

![][Fortran]
![][public]

**Definition**: `syscCouplingInterfaceF.fi` (line 34)

Provide a struct for a coupling interface.

Coupling interface can be used to set up the transfers of data between different regions within the same participant solver. Interface contains two sides and each side can contain one or more regions. Data transfers are automatically defined: if a variable is defined as an output on all regions on one side of the interface and as an input on all regions on the opposide side of the interface, then it will be mapped from the former side to the latter side.





All regions on one side of the interface must have the same topology.





To create and/or initialize the SyscCouplingInterface struct, it is highly recommended to use the <code>syscGetCouplingInterface</code> function. This function will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```fortran
type(SyscCouplingInterfaceF) :: interface
interface = syscGetCouplingInterfaceF("FSI")
```

## Members

* [name](structfortran_1_1sysccouplinginterfacef.md#structfortran_1_1sysccouplinginterfacef_1a72f0326f2d38c6a753a748136992df3a)

## Public attributes

<a id="structfortran_1_1sysccouplinginterfacef_1a72f0326f2d38c6a753a748136992df3a"></a>
### Variable name

![][public]

**Definition**: `syscCouplingInterfaceF.fi` (line 35)

```fortran
character(len=syscstrlen) name
```

Unique name for the interface.





**Type**: character(len=syscstrlen)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)