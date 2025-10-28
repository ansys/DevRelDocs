# Structure PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 30)



The [DataHistoryVariableMetadataStruct](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct) is used to store the metadata for a variable.

## Members

* [customMetadata](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a5e4dfb223db7287d798efb5b8078a3e2)
* [enumAliases](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1ab0241db307b35f1e5d19adbd2d1f17df)
* [enumValues](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a3388bf5cf3b1f7de69b343b81669e6ff)
* [equation](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a32fdc64aa5113896a4a962a5c3cbaf93)
* [fileName](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1aa624273f5c3fb5af9baa0272caa971e0)
* [format](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a5d2b591cdaa6ce26e344f11ab6e1b76f)
* [geomScript](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a8f89e59faab48afc96e4a0dde2f457c3)
* [isBinary](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a121de67cd4278a5b008d416a2579bcf0)
* [isDesignVar](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a09f46ea4820a3341554e2bad9a052f7e)
* [isInput](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a1f4709d547b2d872fd404f7fc5b6566a)
* [isNumeric](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1ae0822979f6b70670a347c98c67d367b2)
* [lowerBound](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1aa8335d587fd45435098d82f59751071d)
* [name](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a539d4b4f21c4c53505a6c39534fb2c3f)
* [type](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1ab613172a10fa02c2756813e75944536a)
* [units](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a48e1dedfd188d030f71a196434ebaf3b)
* [upperBound](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1aeda7394339c56c5493cfad15d26b0b3e)

## Public attributes

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a539d4b4f21c4c53505a6c39534fb2c3f"></a>
### Variable name

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 35)

```
BSTR PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::name
```



The name of the variable



**Type**: BSTR

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1ae0822979f6b70670a347c98c67d367b2"></a>
### Variable isNumeric

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 39)

```
boolean PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::isNumeric
```



true if the variable is numeric, false otherwise



**Type**: boolean

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a1f4709d547b2d872fd404f7fc5b6566a"></a>
### Variable isInput

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 43)

```
boolean PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::isInput
```



true if the variable is an input, false otherwise



**Type**: boolean

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a121de67cd4278a5b008d416a2579bcf0"></a>
### Variable isBinary

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 47)

```
boolean PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::isBinary
```



true if file variable is a binary file, false otherwise



**Type**: boolean

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a09f46ea4820a3341554e2bad9a052f7e"></a>
### Variable isDesignVar

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 51)

```
boolean PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::isDesignVar
```



true if the variable is a design variable, false otherwise



**Type**: boolean

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a32fdc64aa5113896a4a962a5c3cbaf93"></a>
### Variable equation

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 55)

```
BSTR PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::equation
```



The equation of the variable



**Type**: BSTR

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a5d2b591cdaa6ce26e344f11ab6e1b76f"></a>
### Variable format

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 59)

```
BSTR PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::format
```



The format of the variable



**Type**: BSTR

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1ab613172a10fa02c2756813e75944536a"></a>
### Variable type

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 63)

```
BSTR PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::type
```



The type of the variable



**Type**: BSTR

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a48e1dedfd188d030f71a196434ebaf3b"></a>
### Variable units

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 67)

```
BSTR PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::units
```



The units of the variable



**Type**: BSTR

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1aa624273f5c3fb5af9baa0272caa971e0"></a>
### Variable fileName

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 71)

```
BSTR PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::fileName
```



The filename of a file variable



**Type**: BSTR

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a8f89e59faab48afc96e4a0dde2f457c3"></a>
### Variable geomScript

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 75)

```
BSTR PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::geomScript
```



The geomScript of the variable



**Type**: BSTR

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a3388bf5cf3b1f7de69b343b81669e6ff"></a>
### Variable enumValues

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 79)

```
BSTR PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::enumValues
```



comma separated list of enumerated values of variable



**Type**: BSTR

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1ab0241db307b35f1e5d19adbd2d1f17df"></a>
### Variable enumAliases

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 83)

```
BSTR PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::enumAliases
```



comma separated list of enumerated aliases of variable



**Type**: BSTR

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1aa8335d587fd45435098d82f59751071d"></a>
### Variable lowerBound

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 87)

```
VARIANT PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::lowerBound
```



The lower bound of the variable



**Type**: VARIANT

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1aeda7394339c56c5493cfad15d26b0b3e"></a>
### Variable upperBound

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 91)

```
VARIANT PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::upperBound
```



The upper bound of the variable



**Type**: VARIANT

<a id="structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct_1a5e4dfb223db7287d798efb5b8078a3e2"></a>
### Variable customMetadata

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 95)

```
VARIANT PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct::customMetadata
```



2xN SAFEARRAY of name/value pairs of the custom metadata



**Type**: VARIANT

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)