# Structure SyscIntegerAttribute

![][C]
![][public]

**Definition**: `syscAttribute.h` (line 149)

Provide a struct for an integer-valued attribute.



## Members

* [hasLowerBound](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1a974057942d4885dee88c1925fc336a13)
* [hasUpperBound](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1a23bc2b7aca674d5940ca769ed23928f2)
* [lowerBound](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1add3dd5aeeff06f8945bff33f266d896c)
* [modifiable](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1a00f7c6e6e82db0990246f8405e207a3c)
* [name](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1ab13f95caf8c2c7b73b3c3f2435876f27)
* [upperBound](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1acde49db22582da9026cd1eaecafe7747)
* [value](structSyscIntegerAttribute.md#structSyscIntegerAttribute_1a272f235cfc28cb256a9f5793cb3d51f4)

## Public attributes

<a id="structSyscIntegerAttribute_1ab13f95caf8c2c7b73b3c3f2435876f27"></a>
### Variable name

![][public]

**Definition**: `syscAttribute.h` (line 150)


```
char SyscIntegerAttribute::name[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```




Unique name for this attribute.



**Type**: char

<a id="structSyscIntegerAttribute_1a272f235cfc28cb256a9f5793cb3d51f4"></a>
### Variable value

![][public]

**Definition**: `syscAttribute.h` (line 151)


```
long long int SyscIntegerAttribute::value
```




Attribute value.



**Type**: long long int

<a id="structSyscIntegerAttribute_1a00f7c6e6e82db0990246f8405e207a3c"></a>
### Variable modifiable

![][public]

**Definition**: `syscAttribute.h` (line 152)


```
int SyscIntegerAttribute::modifiable
```




Attribute is modifiable.



**Type**: int

<a id="structSyscIntegerAttribute_1a974057942d4885dee88c1925fc336a13"></a>
### Variable hasLowerBound

![][public]

**Definition**: `syscAttribute.h` (line 153)


```
int SyscIntegerAttribute::hasLowerBound
```




Attribute has a lower bound.



**Type**: int

<a id="structSyscIntegerAttribute_1a23bc2b7aca674d5940ca769ed23928f2"></a>
### Variable hasUpperBound

![][public]

**Definition**: `syscAttribute.h` (line 154)


```
int SyscIntegerAttribute::hasUpperBound
```




Attribute has an upper bound.



**Type**: int

<a id="structSyscIntegerAttribute_1add3dd5aeeff06f8945bff33f266d896c"></a>
### Variable lowerBound

![][public]

**Definition**: `syscAttribute.h` (line 155)


```
long long int SyscIntegerAttribute::lowerBound
```




Attribute lower bound.



**Type**: long long int

<a id="structSyscIntegerAttribute_1acde49db22582da9026cd1eaecafe7747"></a>
### Variable upperBound

![][public]

**Definition**: `syscAttribute.h` (line 156)


```
long long int SyscIntegerAttribute::upperBound
```




Attribute upper bound.



**Type**: long long int

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)