<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo"></a>
# Interface Phoenix::ModelCenter::PlugIn::IAnalyzerVariableInfo

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerVariables.cs` (line 42)

Interface which describes a provider of analyzer names for formulas or variables to be used in an analyzer.



## Members

* [AnalyzerVariableAdded](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a746544b310318abbd93e0920e5b039ea)
* [AnalyzerVariableFormulas](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1ae2776718b29b9ad9c5ff238feb0d8cd9)
* [AnalyzerVariableNames](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a80346b7b8893b73bc184c45326e85ac4)
* [AnalyzerVariablesCleared](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a4d9a2c4ab164716789dffe1604741c0d)
* [HasAnalyzerVariables](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a36af9d4d349406957548119c457342fe)
* [SaveAllAnalyzerVariables](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a08025e324ad3d620608cbd41afdac330)
* [TryGetFormulaForAnalyzerVariable](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a72dbc9e633f4c808657a34f05c087139)
* [TryGetNameForAnalyzerVariable](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a12e7012acf14dee0dbcc4f9ae6f77e0e)

## Properties

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a36af9d4d349406957548119c457342fe"></a>
### Property HasAnalyzerVariables

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerVariables.cs` (line 47)


```csharp
bool Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.HasAnalyzerVariables
```


Does the plugin have analyzer variables?





**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.HasAnalyzerVariables"}]}`
-->

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a08025e324ad3d620608cbd41afdac330"></a>
### Property SaveAllAnalyzerVariables

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerVariables.cs` (line 52)


```csharp
bool Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.SaveAllAnalyzerVariables
```


Should all variable values be saved when a trade study is run?





**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.SaveAllAnalyzerVariables"}]}`
-->

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a80346b7b8893b73bc184c45326e85ac4"></a>
### Property AnalyzerVariableNames

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerVariables.cs` (line 66)


```csharp
ICollection<string> Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.AnalyzerVariableNames
```


Get the analyzer variable names; the collection may be empty.





**Return type**: ICollection< string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.AnalyzerVariableNames"}]}`
-->

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1ae2776718b29b9ad9c5ff238feb0d8cd9"></a>
### Property AnalyzerVariableFormulas

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerVariables.cs` (line 71)


```csharp
ICollection<string> Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.AnalyzerVariableFormulas
```


Get the analyzer variable formulas; the collection may be empty.





**Return type**: ICollection< string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.AnalyzerVariableFormulas"}]}`
-->

## Events

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a4d9a2c4ab164716789dffe1604741c0d"></a>
### Event AnalyzerVariablesCleared

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerVariables.cs` (line 57)


```csharp
EventHandler Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.AnalyzerVariablesCleared
```


Event fired when analyzer variables are cleared.





**Type**: EventHandler

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.AnalyzerVariablesCleared"}]}`
-->

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a746544b310318abbd93e0920e5b039ea"></a>
### Event AnalyzerVariableAdded

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerVariables.cs` (line 61)


```csharp
AnalyzerVariableAddedEventHandler Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.AnalyzerVariableAdded
```


Event fired when an analyzer variable is added.





**Type**: [AnalyzerVariableAddedEventHandler](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1a06e93246a02d734c770524510045b109)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.AnalyzerVariableAdded"}]}`
-->

## Public functions

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a72dbc9e633f4c808657a34f05c087139"></a>
### Function TryGetFormulaForAnalyzerVariable

![][public]


```csharp
bool Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.TryGetFormulaForAnalyzerVariable(string analyzerName, out string formula)
```


Translate from analyzer name to formula for an analyzer variable. If the name contains an array index, will attempt to translate directly, and if that doesn't work, will attempt to look up the base name and then append the index.

**Parameters**:

* **analyzerName**: The analyzer name.
* **formula**: The formula, or null if not found.


**Returns**:

True if found, false if not.



**Parameters**:

* string **analyzerName**
* out string **formula**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.TryGetFormulaForAnalyzerVariable"}]}`
-->

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo_1a12e7012acf14dee0dbcc4f9ae6f77e0e"></a>
### Function TryGetNameForAnalyzerVariable

![][public]


```csharp
bool Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.TryGetNameForAnalyzerVariable(string formula, out string analyzerName)
```


Translate from formula to name for an analyzer variable. If the formula contains an array index, will attempt to translate directly, and if that doesn't work, will attempt to look up the base name and then append the index.

**Parameters**:

* **formula**: The formula.
* **analyzerName**: The name, or null if not found.


**Returns**:

True if found, false if not.



**Parameters**:

* string **formula**
* out string **analyzerName**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IAnalyzerVariableInfo.TryGetNameForAnalyzerVariable"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)