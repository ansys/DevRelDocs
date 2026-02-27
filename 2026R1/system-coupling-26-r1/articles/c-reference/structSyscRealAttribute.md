# Structure SyscRealAttribute

![][C]
![][public]

**Definition**: `syscAttribute.h` (line 24)

Provide a struct for a real-valued attribute.



## Members

* [dimensionality](structSyscRealAttribute.md#structSyscRealAttribute_1a4a2a0d3d61d37523416b353c3dc2585c)
* [hasLowerBound](structSyscRealAttribute.md#structSyscRealAttribute_1af4a253104963446573c6e2f2506c5ebf)
* [hasUpperBound](structSyscRealAttribute.md#structSyscRealAttribute_1a8f44bf78733052c096fcd59b0bafb27f)
* [lowerBound](structSyscRealAttribute.md#structSyscRealAttribute_1aec56cecfb0f7ad5bd1cff5574103aae1)
* [modifiable](structSyscRealAttribute.md#structSyscRealAttribute_1a0b5530cca7ffd744f52c838388d320bc)
* [name](structSyscRealAttribute.md#structSyscRealAttribute_1a6be2003fdd58b29a31513f1025a44218)
* [upperBound](structSyscRealAttribute.md#structSyscRealAttribute_1a61ceae404435905985ecc53751b1b5e1)
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

<a id="structSyscRealAttribute_1af4a253104963446573c6e2f2506c5ebf"></a>
### Variable hasLowerBound

![][public]

**Definition**: `syscAttribute.h` (line 29)


```
int SyscRealAttribute::hasLowerBound
```




Attribute has a lower bound.



**Type**: int

<a id="structSyscRealAttribute_1a8f44bf78733052c096fcd59b0bafb27f"></a>
### Variable hasUpperBound

![][public]

**Definition**: `syscAttribute.h` (line 30)


```
int SyscRealAttribute::hasUpperBound
```




Attribute has an upper bound.



**Type**: int

<a id="structSyscRealAttribute_1aec56cecfb0f7ad5bd1cff5574103aae1"></a>
### Variable lowerBound

![][public]

**Definition**: `syscAttribute.h` (line 31)


```
double SyscRealAttribute::lowerBound
```




Attribute lower bound.



**Type**: double

<a id="structSyscRealAttribute_1a61ceae404435905985ecc53751b1b5e1"></a>
### Variable upperBound

![][public]

**Definition**: `syscAttribute.h` (line 32)


```
double SyscRealAttribute::upperBound
```




Attribute upper bound.



**Type**: double

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)