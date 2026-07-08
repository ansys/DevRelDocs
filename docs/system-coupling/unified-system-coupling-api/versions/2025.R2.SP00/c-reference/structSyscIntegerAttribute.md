# Structure SyscIntegerAttribute

![][C]
![][public]

**Definition**: `syscAttribute.h` (line 70)

Provide a struct for an integer-valued attribute.



## Members

* [modifiable](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1a00f7c6e6e82db0990246f8405e207a3c)
* [name](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1ab13f95caf8c2c7b73b3c3f2435876f27)
* [value](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1a272f235cfc28cb256a9f5793cb3d51f4)

## Public attributes

<a id="structSyscIntegerAttribute_1ab13f95caf8c2c7b73b3c3f2435876f27"></a>
### Variable name

![][public]

**Definition**: `syscAttribute.h` (line 71)

```
char SyscIntegerAttribute::name[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



Unique name for this attribute.



**Type**: char

<a id="structSyscIntegerAttribute_1a272f235cfc28cb256a9f5793cb3d51f4"></a>
### Variable value

![][public]

**Definition**: `syscAttribute.h` (line 72)

```
long long int SyscIntegerAttribute::value
```



Attribute value.



**Type**: long long int

<a id="structSyscIntegerAttribute_1a00f7c6e6e82db0990246f8405e207a3c"></a>
### Variable modifiable

![][public]

**Definition**: `syscAttribute.h` (line 73)

```
int SyscIntegerAttribute::modifiable
```



Attribute is modifiable.



**Type**: int

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)