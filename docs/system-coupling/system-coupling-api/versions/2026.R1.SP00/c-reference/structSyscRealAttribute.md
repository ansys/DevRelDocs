# Structure SyscRealAttribute

![][C]
![][public]

**Definition**: `syscAttribute.h` (line 24)

Provide a struct for a real-valued attribute.



## Members

* [dimensionality](structSyscRealAttribute.md#structSyscRealAttribute_1a4a2a0d3d61d37523416b353c3dc2585c)
* [modifiable](structSyscRealAttribute.md#structSyscRealAttribute_1a0b5530cca7ffd744f52c838388d320bc)
* [name](structSyscRealAttribute.md#structSyscRealAttribute_1a6be2003fdd58b29a31513f1025a44218)
* [value](structSyscRealAttribute.md#structSyscRealAttribute_1ac6dd95726f82ff857471b1967c42b235)

## Public attributes

<a id="structSyscRealAttribute_1a6be2003fdd58b29a31513f1025a44218"></a>
### Variable name

![][public]

**Definition**: `syscAttribute.h` (line 25)

```
char SyscRealAttribute::name[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



Unique name for this attribute.



**Type**: char

<a id="structSyscRealAttribute_1ac6dd95726f82ff857471b1967c42b235"></a>
### Variable value

![][public]

**Definition**: `syscAttribute.h` (line 26)

```
double SyscRealAttribute::value
```



Attribute value.



**Type**: double

<a id="structSyscRealAttribute_1a4a2a0d3d61d37523416b353c3dc2585c"></a>
### Variable dimensionality

![][public]

**Definition**: `syscAttribute.h` (line 27)

```
SyscDimensionality SyscRealAttribute::dimensionality
```



Array dimensionality.



**Type**: [SyscDimensionality](structSyscDimensionality.md#structSyscDimensionality)

<a id="structSyscRealAttribute_1a0b5530cca7ffd744f52c838388d320bc"></a>
### Variable modifiable

![][public]

**Definition**: `syscAttribute.h` (line 28)

```
int SyscRealAttribute::modifiable
```



Attribute is modifiable.



**Type**: int

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)