# Type fortran::syscvariablef undefined

![][Fortran]
![][public]

**Definition**: `syscVariableF.fi` (line 23)

Provide a struct for a System Coupling variable.

To create and/or initialize the SyscVariableF struct, it is highly recommended to use one of the functions within the <code>syscGetVariableF</code> interface . These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```fortran
type(SyscVariableF) :: var
var = syscGetVariableF("Temperature", SyscScalar, .FALSE., SyscNode)
```

## Members

* [datatype](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef_1a5630b71110de368c88758358db3b720d)
* [displayname](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef_1a9278aae61ed92d3128608932a9d9f464)
* [isextensive](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef_1ad3267dcbbecf72d992ab42706eabff7e)
* [location](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef_1a273794a0cba93c1b658a44d52509602e)
* [quantitytype](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef_1a75a35f6f8588983f49b7c297cf909f89)
* [tensortype](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef_1a0002a1ee2cd59d127b4870b6a9ae3a6c)
* [variablename](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef_1a4b564b900d619390a32c15b030dd7e70)

## Public attributes

<a id="structfortran_1_1syscvariablef_1a4b564b900d619390a32c15b030dd7e70"></a>
### Variable variablename

![][public]

**Definition**: `syscVariableF.fi` (line 25)

```fortran
character(len=syscstrlen) variablename
```

Unique name for this variable.





**Type**: character(len=syscstrlen)

<a id="structfortran_1_1syscvariablef_1a75a35f6f8588983f49b7c297cf909f89"></a>
### Variable quantitytype

![][public]

**Definition**: `syscVariableF.fi` (line 27)

```fortran
integer(kind=4) quantitytype
```

Quantity type (e.g. temperature).





**Type**: integer(kind=4)

<a id="structfortran_1_1syscvariablef_1a273794a0cba93c1b658a44d52509602e"></a>
### Variable location

![][public]

**Definition**: `syscVariableF.fi` (line 29)

```fortran
integer(kind=4) location
```

Location (e.g element or node).





**Type**: integer(kind=4)

<a id="structfortran_1_1syscvariablef_1a9278aae61ed92d3128608932a9d9f464"></a>
### Variable displayname

![][public]

**Definition**: `syscVariableF.fi` (line 31)

```fortran
character(len=syscstrlen) displayname
```

User-friendly name.





**Type**: character(len=syscstrlen)

<a id="structfortran_1_1syscvariablef_1a0002a1ee2cd59d127b4870b6a9ae3a6c"></a>
### Variable tensortype

![][public]

**Definition**: `syscVariableF.fi` (line 33)

```fortran
integer(kind=4) tensortype
```

Tensor type (e.g. scalar, vector).





**Type**: integer(kind=4)

<a id="structfortran_1_1syscvariablef_1ad3267dcbbecf72d992ab42706eabff7e"></a>
### Variable isextensive

![][public]

**Definition**: `syscVariableF.fi` (line 35)

```fortran
logical isextensive
```

Flag indicating whether it's an extensive property.





**Type**: logical

<a id="structfortran_1_1syscvariablef_1a5630b71110de368c88758358db3b720d"></a>
### Variable datatype

![][public]

**Definition**: `syscVariableF.fi` (line 37)

```fortran
integer(kind=4) datatype
```

Data type (e.g. real or complex)





**Type**: integer(kind=4)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)