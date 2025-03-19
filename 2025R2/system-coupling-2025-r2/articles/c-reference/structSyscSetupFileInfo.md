# Structure SyscSetupFileInfo

![][C]
![][public]

**Definition**: `syscCommonTypes.h` (line 294)

Provide a structure for writing System Coupling setup files.

To create and/or initialize the [SyscSetupFileInfo](structSyscSetupFileInfo.md#structSyscSetupFileInfo) struct, it is highly recommended to use <code>syscGetSetupFileInfo</code> function. This function will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscSetupFileInfo setupFileInfo = syscGetSetupFileInfo("setup.scp");
```

## Members

* [restartsSupported](structSyscSetupFileInfo.md#structSyscSetupFileInfo_1aa14b79eae6d4d1bc320ac13358a7f09f)
* [setupFileName](structSyscSetupFileInfo.md#structSyscSetupFileInfo_1ab2c5f41a9396745b156bc62d5ea4e860)

## Public attributes

<a id="structSyscSetupFileInfo_1ab2c5f41a9396745b156bc62d5ea4e860"></a>
### Variable setupFileName

![][public]

**Definition**: `syscCommonTypes.h` (line 295)

```
char SyscSetupFileInfo::setupFileName[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



File name.



**Type**: char

<a id="structSyscSetupFileInfo_1aa14b79eae6d4d1bc320ac13358a7f09f"></a>
### Variable restartsSupported

![][public]

**Definition**: `syscCommonTypes.h` (line 296)

```
int SyscSetupFileInfo::restartsSupported
```



Do not use.



**Type**: int

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)