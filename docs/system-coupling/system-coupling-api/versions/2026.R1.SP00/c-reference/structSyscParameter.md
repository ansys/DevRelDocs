# Structure SyscParameter

![][C]
![][public]

**Definition**: `syscParameter.h` (line 26)

Provide a struct for a System Coupling parameter.



## Members

* [displayName](structSyscParameter.md#structSyscParameter_1a28dadb5ca8618970f5019270c94fd582)
* [name](structSyscParameter.md#structSyscParameter_1af4cc31b045f137e214d4f790987ca42d)

## Public attributes

<a id="structSyscParameter_1af4cc31b045f137e214d4f790987ca42d"></a>
### Variable name

![][public]

**Definition**: `syscParameter.h` (line 27)

```
char SyscParameter::name[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



Unique name for this variable.



**Type**: char

<a id="structSyscParameter_1a28dadb5ca8618970f5019270c94fd582"></a>
### Variable displayName

![][public]

**Definition**: `syscParameter.h` (line 28)

```
char SyscParameter::displayName[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



User-friendly name.



**Type**: char

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)