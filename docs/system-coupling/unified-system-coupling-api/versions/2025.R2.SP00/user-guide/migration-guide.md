# Migration guide and known issues

Migration guide is provided to help migrate the APIs implementation
between the releases.

## Migration from pre-2025 R2 releases

The participant library was updated to use ABI=1 in version 2025 R2 when compiling using the C++ APIs on linux using the G++ compiler.
The previously required compiler flag, `-D_GLIBCXX_USE_CXX11_ABI=0`, is no longer
needed. Either update the build command to use `-D_GLIBCXX_USE_CXX11_ABI=1` (the default value) or remove
the flag entirely. If the executable can not be compiled with ABI=1, then we
recommend using the C APIs.

## Migrating from pre-2023 R1 releases

### Removed deprecated callback functions (C++ only)

Deprecated callback functions that take `sysc::Region` and `sysc::Variable` objects
as arguments have been removed. They have been replaced with functions
that take in `sysc::RegionName` and `sysc::VariableName` (strings) respectively.

For example, suppose there is a callback function that return input scalar data:

```cpp
sysc::InputScalarData
getInputScalarData(const sysc::Region& region, const sysc::Variable& variable) {
  ...
}
```

The above function should be replaced with a function that takes in region name
and variable name (strings) as arguments:

```cpp
sysc::InputScalarData 
getInputScalarData(const sysc::RegionName& region, const sysc::VariableName& variable) {
  ...
}
```

## Migrating from pre-2022 R2 releases

### Disconnect function

This change only applies to C++ and Python APIs. C and Fortran APIs are unaffected.

#### C++

`sysc::SystemCoupling::disconnect` function has been added. Under normal conditions,
this function must now be called during the coupled analysis shutdown. Do not rely on
the `sysc::SystemCoupling` object destructor to disconnect cleanly.

#### Python

`sysc.SystemCoupling.disconnect` function has been added. Under normal conditions,
this function must now be called during the coupled analysis shutdown. Do not rely on
the `sysc.SystemCoupling` object destructor to disconnect cleanly.

### Data transfer variables

#### C++

`sysc::DataTransfer` constructor - uses sourceVariable and targetVariable rather than sideOneVariable and sideTwoVariable

#### C

`syscDataTransferST` interface introduced. Same as `syscDataTransfer`, but uses
sourceVariable and targetVariable rather than sideOneVariable and
sideTwoVariable

#### Fortran

`syscDataTransfer` interface - uses sourceVariable and targetVariable rather than sideOneVariable and sideTwoVariable

#### Python

`sysc.DataTransfer` constructor - uses sourceVariable and targetVariable rather than sideOneVariable and sideTwoVariable

## Migrating from pre-2022 R1 releases

### Removal of legacy functions

The following deprecated functions and structures have been deleted:

#### C++

`sysc::SystemCoupling::isAnalysisComplete` function - see `sysc::SystemCoupling::doIteration` instead.

#### C

`syscIsAnalysisComplete` function - see `syscDoIteration` instead.

`SyscSurfaceMeshAccess` struct - see `SyscSurfMeshAccess` instead.

`syscRegisterSurfaceMeshAccess` function - see `syscRegisterSurfMeshAccess` instead.

`syscGetFaceBasedVolumeMesh` function- see `syscGetVolumeMeshFaceBased` instead.

#### Fortran

`syscIsAnalysisCompleteF` interface - see `syscDoIterationF` instead.

`surfaceMeshAccessIntf` interface - see `SyscSurfaceMeshAccessF` instead.

`syscRegisterSurfaceMeshAccessF` interface - see `syscRegisterSurfMeshAccessF` instead.

## Migrating from pre-2021 R2 releases

### Surface mesh struct (C and Fortran)

The members of `SyscSurfaceMesh` struct have changed.

`SyscOutputScalarData nodeIds` and `SyscOutputVectorData nodeCoords` were replaced with `SyscNodeData nodes`.

`SyscOutputScalarData elemNodeCounts` was replaced with `SyscElementNodeCountData elemNodeCounts`.

`SyscOutputScalarData elemNodeIds` was replaced with `SyscElementNodeConnectivityData elemNodeConnectivity`.

### Restarts Supported flag

Flag indicating whether the participant supports restarts has been moved from
`SetupFileInfo` structure to `SetupInfo`.

### Mesh validity checks (C and Fortran only)

`syscCheckMeshValidity` and `syscCheckRegionMeshValidity` functions are removed. Use `syscCheckSurfaceMeshValidity` instead.
In Fortran, these functions are `syscCheckMeshValidityF`, `syscCheckRegionMeshValidityF`, and `syscCheckSurfaceMeshValidityF`, respectively.

## Migrating from pre-2021 R1 releases

### Adding regions and variables (C and Fortran only)

In C and Fortran APIs, when adding regions and variables,
the order in which the following functions should be called
has changed:

- `syscAddInputVariable`,
- `syscAddOutputVariable`, and
- `syscAddRegion`.

All variables must be added to a
region first, prior to that region being added. If a variable
is added to a region after that region has already been added, that
function call will have no effect.
The new behavior is more consistent with the C++ APIs.

#### C

```c
SyscRegion region = syscGetRegion("region");
SyscVariable variable = syscGetVariable("variable", SyscScalar, 0, SyscNode);
SyscError ret;

/* Add variable first. */
ret = syscAddInputVariable(region, variable);

/* Add region after all variables have been added to it. */
ret = syscAddRegion(region);
```

#### Fortran

```fortran
type(SyscRegionF) :: region
type(SyscVariableF) :: variable
type(SyscErrorF) :: ret

region = syscGetRegionF("region")
variable = syscGetVariableF("variable", SyscScalar, .FALSE., SyscNode)

! Add variable first.
ret = syscAddInputVariableF(region, variable)

! Add region after all variables have been added to it.
ret = syscAddRegionF(region)
```

### Data access structures (Fortran only)

In Fortran APIs, in `SyscInputScalarDataF`, `SyscInputVectorDataF`,
`SyscOutputScalarDataF`, and `SyscOutputVectorDataF` structures, the
`dataPtr` members types have changed from `c_loc` to `integer(kind=8)`.
This allows to remove the dependency on `iso_c_bindings` module from the APIs.
To avoid compatibility issues in the future, it is recommended to use the data
access helper functions (for example `syscGetInputScalarDataF`), as described in the
[Access to heavyweight data](heavyweight-data-access.md)
section.

## Migrating from pre-2020 R2 releases

### SyscError struct (C Only)

In C APIs, `SyscError` struct has changed. The member `message` is now
a fixed-length character array, instead of a character pointer. To avoid
compatibility issues in the future, it is recommended to use `syscGetSyscError`
function to initialize `SyscError` struct.

```c
SyscError ret = syscGetSyscError(0, "");
```

### Regions

#### C

When creating/initializing `SyscRegion` structs, to help with migration
in the future, helper functions `syscGetRegion`,
`syscGetRegionT`, and `syscGetRegionDT`
have been added which create `SyscRegion`
structure. It is highly recommended to use these functions as it would help avoid
back-compatibility issues.

```c
/* Create region by supplying name. */
SyscRegion reg0 = syscGetRegion("name");

/* Create region by supplying name and topology. */
SyscRegion var1 = syscGetRegionT("name", SyscSurface);

/* Create region by supplying name, display name, 
 * and topology. */
SyscRegion reg2 = syscGetRegionDT("name", "displayName", SyscSurface);
```

#### Fortran

When creating/initializing `SyscRegionF` types, to help with migration
in the future, helper functions with
`syscGetRegionF` interface
have been added which create `SyscRegionF`
type. It is highly recommended to use these functions as it would help avoid
back-compatibility issues.

```fortran
type(SyscRegionF) :: reg0
type(SyscRegionF) :: reg1
type(SyscRegionF) :: reg2

! Create region by supplying name. 
reg0 = syscGetRegionF("name");

! Create region by supplying name and topology.
reg1 = syscGetRegionF("name", SyscSurface)

! Create region by supplying name, display name, 
! and topology. 
var2 = syscGetVariableF("name", "displayName", SyscSurface)
```

### Variables

Variables now have new properties:

- Tensor type: indicates the tensor type of the variable, for example whether it's a scalar or a vector
- Is extensive: indicates whether the it is an extensive property or an intensive property.

#### C++

`Variable.getComponentCount()` method has been removed.

The type of `sysc::QuantityType` has changed from struct to enum.
Any usages of properties of quantity type (for example `quantityType.initialValue`)
should be removed.

#### C

`SyscVariable` struct now has new members: `tensorType` and `isExtensive`. Their
values should be set to the correct value.

To help with migration in the future, helper functions
`syscGetVariable`,
`syscGetVariableTE`, `syscGetVariableTEQ`, and `syscGetVariableQ`
have been added to create `SyscVariable`
structure. It is highly recommended to use these functions as it would help avoid
back-compatibility issues.

```c
/* Create variable by supplying name. */
SyscVariable var0 = syscGetVariable("name");

/* Create variable by supplying name,
 * tensor type, is extensive, and location. */
SyscVariable var1 = syscGetVariableTE(
  "name",
  SyscScalar,
  0,
  SyscNode);

/* Create variable by supplying name, display name, 
 * tensor type, is extensive, location, and quantity type. */
SyscVariable var2 = syscGetVariableTEQ(
  "name",
  "displayName",
  SyscScalar,
  0,
  SyscNode,
  SyscTemperature);

/* Create variable by supplying name, display name, 
 * location, and quantity type. */
SyscVariable var3 = syscGetVariableQ(
  "name",
  "displayName",
  SyscNode,
  SyscTemperature);
```

#### Fortran

`SyscVariableF` type now has new members: `tensorType` and `isExtensive`. Their
values should be set to the correct value.

To help with migration in the future, helper functions with
`syscGetVariableF` interface
have been added to create `SyscVariableF`
type. It is highly recommended to use these functions as it would help avoid
back-compatibility issues.

```fortran
type(SyscVariableF) :: var0
type(SyscVariableF) :: var1
type(SyscVariableF) :: var2
type(SyscVariableF) :: var3

! Create variable by supplying name. 
var0 = syscGetVariableF("name")

! Create variable by supplying name, 
! tensor type, is extensive, and location. 
var1 = syscGetVariableF(&
  "name",&
  SyscScalar,&
  .FALSE.,&
  SyscNode)

! Create variable by supplying name, display name, 
! tensor type, is extensive, location, and quantity type. 
var2 = syscGetVariableF(&
  "name",&
  "displayName",&
  SyscScalar,&
  .FALSE.,&
  SyscNode,&
  SyscTemperature)

! Create variable by supplying name, display name, 
! location, and quantity type.
var3 = syscGetVariableF(&
  "name",&
  "displayName",&
  SyscNode,&
  SyscTemperature)
```

## Migrating from pre-2020 R1 releases

### Setup APIs

The APIs that are related to setup (for example add region, add input/output variable,
complete coupling setup) should no longer be used _during the coupled analysis_.
These APIs will remain available and can be used
to complete the participant setup _during the setup stage_.

For information on creating the setup files, see
[Completing the System Coupling Participant Setup](participant-setup.md)

For the most up-to-date information on the steps in a coupled analysis, see
[Participant Steps in a Coupled Analysis](participant-steps-in-coupled-analysis.md).

### Heavyweight data access Functions

This applies to C++ APIs only. Heavyweight data access functions now take
region and variable names rather than objects. For example, surface
mesh access function prototype has changed as follows:

```cpp
// LEGACY PROTOTYPE:
sysc::SurfaceMesh getSurfaceMesh(const sysc::Region& region);

// NEW PROTOTYPE:
sysc::SurfaceMesh getSurfaceMesh(const std::string& regionName);
```

### Data access helper functions (Fortran only)

The following Fortran helper functions
have been modified to take an additional argument `nElems`:

- `syscGetInputScalarDataF`
- `syscGetOutputScalarDataF`
- `syscGetInputVectorDataSplitF`
- `syscGetInputVectorDataCompactF`
- `syscGetOutputVectorDataSplitF`
- `syscGetOutputVectorDataCompactF`

For the most up-to-date information on the usage of these helper functions, see
[Access to heavyweight data](heavyweight-data-access.md).

## Known issues

- SyscGetSetupInfoF function may not set the analysis type correctly if the participant solver is compiled with Intel Fortran compiler on Linux. As a workaround, after calling this function, set the analysis type explicitly, for example:

  ```fortran
  setupInfo = syscGetSetupInfoF(SyscTransient) 
  setupInfo%analysisType = SyscTransient
  ```
