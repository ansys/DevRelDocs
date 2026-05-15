# Interface ModelCenter::IPHXFormat

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6131)



Allows you to do custom formatting the same way ModelCenter does.





Example: ```
Dim formatter
Set formatter=app.getFormatter("# ?/2")
MsgBox formatter.doubleToString(12.5)
```

## Members

* [doubleToEditableString](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1a596665cb30835ccad7c6df17afffd8bd)
* [doubleToString](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1afdb6c65e615c3d5176129b51a1d44318)
* [getFormat](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1a6c3566f301404af75e38676198a8bf1e)
* [longToEditableString](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1a2d5f201c8a8166ffeca606bac90d4b3d)
* [longToString](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1a175332e4916d1d86855b1b707831e308)
* [setFormat](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1aa34d6054f4542a34efb60a961ad78519)
* [stringToDouble](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1a2576f20eaa4ec6133a734ea09d86130a)
* [stringToLong](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1a9e0774cef531d24731ac6c320cfd837c)
* [stringToString](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1ac1b65cffaf6712d53e58935e3c1592c9)

## Public functions

<a id="interfaceModelCenter_1_1IPHXFormat_1aa34d6054f4542a34efb60a961ad78519"></a>
### Function setFormat

![][public]

```
void ModelCenter::IPHXFormat::setFormat(BSTR format)
```



Sets the format string to use in this object. Formats accepted are a sub-set of available formats from Excel. The easiest way to generate these is to load up ModelCenter and select "Format Variable" on some variable. The dialog will allow you to graphically choose a format and then will show you the correct format string to use in the lower left corner. You may pass in the empty string to mean "General".






**Parameters**:

* **format**: The format string to use.



**Parameters**:

* BSTR **format**

**Return type**: void

<a id="interfaceModelCenter_1_1IPHXFormat_1a9e0774cef531d24731ac6c320cfd837c"></a>
### Function stringToLong

![][public]

```
long ModelCenter::IPHXFormat::stringToLong(BSTR str)
```



Takes a formatted string and converts it to a long (integer). The string must be in the correct format for style being used.






**Parameters**:

* **str**: The formatted string.


**Returns**:

The value of the string.



**Parameters**:

* BSTR **str**

**Return type**: long

<a id="interfaceModelCenter_1_1IPHXFormat_1a2576f20eaa4ec6133a734ea09d86130a"></a>
### Function stringToDouble

![][public]

```
double ModelCenter::IPHXFormat::stringToDouble(BSTR str)
```



Takes a formatted string and converts it to a double (real number). The string must be in the correct format for the style being used. For example, if percentage is being used, <code>"1%"</code> will convert to <code>0.01</code>.






**Parameters**:

* **str**: The formatted string.


**Returns**:

The value of the string.



**Parameters**:

* BSTR **str**

**Return type**: double

<a id="interfaceModelCenter_1_1IPHXFormat_1a175332e4916d1d86855b1b707831e308"></a>
### Function longToString

![][public]

```
BSTR ModelCenter::IPHXFormat::longToString(long val)
```



Takes a long (integer) and converts it to a formatted string.






**Parameters**:

* **val**: The long number to format.


**Returns**:

The formatted string.



**Parameters**:

* long **val**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IPHXFormat_1afdb6c65e615c3d5176129b51a1d44318"></a>
### Function doubleToString

![][public]

```
BSTR ModelCenter::IPHXFormat::doubleToString(double val)
```



Takes a double (real number) and converts it to a formatted string.






**Parameters**:

* **val**: The double number to format.


**Returns**:

The formatted string.



**Parameters**:

* double **val**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IPHXFormat_1a6c3566f301404af75e38676198a8bf1e"></a>
### Function getFormat

![][public]

```
BSTR ModelCenter::IPHXFormat::getFormat()
```



Returns the current format style being used in this object.






**Returns**:

<br/>



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IPHXFormat_1ac1b65cffaf6712d53e58935e3c1592c9"></a>
### Function stringToString

![][public]

```
BSTR ModelCenter::IPHXFormat::stringToString(BSTR str)
```



Converts an unformatted string into a formatted string.






**Parameters**:

* **str**: The unformatted string.


**Returns**:

The formatted string.



**Parameters**:

* BSTR **str**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IPHXFormat_1a2d5f201c8a8166ffeca606bac90d4b3d"></a>
### Function longToEditableString

![][public]

```
BSTR ModelCenter::IPHXFormat::longToEditableString(long val)
```



Converts a long to its formatted string representation but with full precision for editing.






**Parameters**:

* **val**: The long number to format.


**Returns**:

The formatted string.



**Parameters**:

* long **val**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IPHXFormat_1a596665cb30835ccad7c6df17afffd8bd"></a>
### Function doubleToEditableString

![][public]

```
BSTR ModelCenter::IPHXFormat::doubleToEditableString(double val)
```



Converts a double to its formatted string representation but with full precision for editing.






**Parameters**:

* **val**: The double number to format.


**Returns**:

The formatted string.



**Parameters**:

* double **val**

**Return type**: BSTR

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)