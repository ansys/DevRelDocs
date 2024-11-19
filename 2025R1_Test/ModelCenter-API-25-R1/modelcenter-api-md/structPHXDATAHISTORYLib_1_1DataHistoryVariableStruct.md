<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct"></a>
# Structure PHXDATAHISTORYLib::DataHistoryVariableStruct

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 105)



The [DataHistoryVariableStruct](structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct) is used to store the data and metadata for a variable. used by addVariableStruct

## Members

* [index](structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1a331317f8f767933429cce81e8ada5385)
* [isModified](structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1a0e1c5e9cd74d1f2516fc1d35eea45b17)
* [isValid](structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1a55153c5a8cc53d611839b0b55bb3e8a2)
* [metadata](structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1adad4bb3cc571df3df8a8df37d634fe72)
* [varValue](structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1a44619a37f14a5ff181483dcf993d1424)

## Public attributes

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1a331317f8f767933429cce81e8ada5385"></a>
### Variable index

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 110)

```
VARIANT PHXDATAHISTORYLib::DataHistoryVariableStruct::index
```



Either a 0 based index to the Variable, or the name of a Variable.



**Type**: VARIANT

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1a44619a37f14a5ff181483dcf993d1424"></a>
### Variable varValue

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 114)

```
VARIANT PHXDATAHISTORYLib::DataHistoryVariableStruct::varValue
```



The value of the Variable.



**Type**: VARIANT

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1a55153c5a8cc53d611839b0b55bb3e8a2"></a>
### Variable isValid

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 118)

```
boolean PHXDATAHISTORYLib::DataHistoryVariableStruct::isValid
```



Whether this value is valid.



**Type**: boolean

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1a0e1c5e9cd74d1f2516fc1d35eea45b17"></a>
### Variable isModified

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 122)

```
boolean PHXDATAHISTORYLib::DataHistoryVariableStruct::isModified
```



Whether this value's modified flag is set.



**Type**: boolean

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct_1adad4bb3cc571df3df8a8df37d634fe72"></a>
### Variable metadata

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 126)

```
DataHistoryVariableMetadataStruct PHXDATAHISTORYLib::DataHistoryVariableStruct::metadata
```



The metadata for the Variable



**Type**: [DataHistoryVariableMetadataStruct](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)