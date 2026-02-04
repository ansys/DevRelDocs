# Structure SyscRegion

![][C]
![][public]

**Definition**: `syscRegion.h` (line 42)

Provide a struct for a System Coupling region.

Participant can declare which regions can be used in the coupled analysis. Each region can declare its input variables and output variables. Input variables represent physical quantities whose values the participant expects System Coupling to provide. Output variables represent physical quantities whose values System Coupling expects the participant to provide.





To create and/or initialize the [SyscRegion](structSyscRegion.md#structSyscRegion) struct, it is highly recommended to use one of the functions with names starting with <code>syscGetRegion</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscRegion reg = syscGetRegionT("Wall", SyscSurface);
```

## Members

* [displayName](structSyscRegion.md#structSyscRegion_1ac6572b0ff5814075613806b50506d7dd)
* [name](structSyscRegion.md#structSyscRegion_1a9ad96fdd8a6a46c8d0b4ac7ffb23d7a8)
* [regionDiscretizationType](structSyscRegion.md#structSyscRegion_1aba2c044546a908f37b3419408410b3a5)
* [topology](structSyscRegion.md#structSyscRegion_1a7fd5681f99d4737e705ef1c670ad6268)

## Public attributes

<a id="structSyscRegion_1a9ad96fdd8a6a46c8d0b4ac7ffb23d7a8"></a>
### Variable name

![][public]

**Definition**: `syscRegion.h` (line 43)

```
char SyscRegion::name[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



Unique region name.



**Type**: char

<a id="structSyscRegion_1a7fd5681f99d4737e705ef1c670ad6268"></a>
### Variable topology

![][public]

**Definition**: `syscRegion.h` (line 43)

```
enum SyscTopology SyscRegion::topology
```



Region topology.



**Type**: enum [SyscTopology](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gabf36499a0f333dc9b856c4bcbb25385a)

<a id="structSyscRegion_1aba2c044546a908f37b3419408410b3a5"></a>
### Variable regionDiscretizationType

![][public]

**Definition**: `syscRegion.h` (line 43)

```
enum SyscRegionDiscretizationType SyscRegion::regionDiscretizationType
```



Reigon mesh type.



**Type**: enum [SyscRegionDiscretizationType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga83942e23c7ff51ec76e4632612a34d45)

<a id="structSyscRegion_1ac6572b0ff5814075613806b50506d7dd"></a>
### Variable displayName

![][public]

**Definition**: `syscRegion.h` (line 46)

```
char SyscRegion::displayName[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



User-friendly region name.



**Type**: char

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)