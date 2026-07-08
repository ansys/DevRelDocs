# Structure SyscCouplingInterface

![][C]
![][public]

**Definition**: `syscCouplingInterface.h` (line 45)

Provide a struct for a coupling interface.

Coupling interface can be used to set up the transfers of data between different regions within the same participant solver. Interface contains two sides and each side can contain one or more regions. Data transfers are automatically defined: if a variable is defined as an output on all regions on one side of the interface and as an input on all regions on the opposide side of the interface, then it will be mapped from the former side to the latter side.





All regions on one side of the interface must have the same topology.





To create and/or initialize the [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) struct, it is highly recommended to use the <code>syscGetCouplingInterface</code> function. This function will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscCouplingInterface reg = syscGetCouplingInterface("FSI"); 
```

## Members

* [name](structSyscCouplingInterface.md#structSyscCouplingInterface_1a9e710b35f442c7e5e95c64b45df2ff24)

## Public attributes

<a id="structSyscCouplingInterface_1a9e710b35f442c7e5e95c64b45df2ff24"></a>
### Variable name

![][public]

**Definition**: `syscCouplingInterface.h` (line 46)

```
char SyscCouplingInterface::name[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



Unique name for the interface.



**Type**: char

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)