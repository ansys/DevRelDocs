<a id="interfaceModelCenter_1_1IVariableLink"></a>
# Interface ModelCenter::IVariableLink

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6026)



Represents a link between variables.

## Members

* [breakLink](interfaceModelCenter_1_1IVariableLink.md#interfaceModelCenter_1_1IVariableLink_1a0e2397280fb0a53c07ecee27bdff89bd)
* [LHS](interfaceModelCenter_1_1IVariableLink.md#interfaceModelCenter_1_1IVariableLink_1ae3805787afceef57db6297e72632650a)
* [resumeLink](interfaceModelCenter_1_1IVariableLink.md#interfaceModelCenter_1_1IVariableLink_1a38ec9f0f44714dd151f7683721bd7ce8)
* [RHS](interfaceModelCenter_1_1IVariableLink.md#interfaceModelCenter_1_1IVariableLink_1a05eff77b1fab3100869de855008d8b02)
* [suspendLink](interfaceModelCenter_1_1IVariableLink.md#interfaceModelCenter_1_1IVariableLink_1a8a637411378f91597e5612e2e03c959d)

## Properties

<a id="interfaceModelCenter_1_1IVariableLink_1ae3805787afceef57db6297e72632650a"></a>
### Property LHS

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IVariableLink::LHS
```



The left hand side of the equation. Read only. Will always be a simple variable name.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IVariableLink_1a05eff77b1fab3100869de855008d8b02"></a>
### Property RHS

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IVariableLink::RHS
```



The right hand side of the equation. You can change the link by changing this value.



**Return type**: BSTR

## Public functions

<a id="interfaceModelCenter_1_1IVariableLink_1a8a637411378f91597e5612e2e03c959d"></a>
### Function suspendLink

![][public]

```
void ModelCenter::IVariableLink::suspendLink()
```



Causes the link to be suspended.



**Return type**: void

<a id="interfaceModelCenter_1_1IVariableLink_1a38ec9f0f44714dd151f7683721bd7ce8"></a>
### Function resumeLink

![][public]

```
void ModelCenter::IVariableLink::resumeLink()
```



Resumes the link if it was suspended.



**Return type**: void

<a id="interfaceModelCenter_1_1IVariableLink_1a0e2397280fb0a53c07ecee27bdff89bd"></a>
### Function breakLink

![][public]

```
void ModelCenter::IVariableLink::breakLink()
```



Breaks this link and removes the dependencies between the LHS and RHS of the equation. This object becomes invalid and cannot be used after calling this method.



**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)