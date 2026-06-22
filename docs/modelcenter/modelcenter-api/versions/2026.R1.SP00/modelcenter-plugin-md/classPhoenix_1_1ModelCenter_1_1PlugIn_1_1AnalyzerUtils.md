<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils"></a>
# Class Phoenix::ModelCenter::PlugIn::AnalyzerUtils

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerUtils.cs` (line 57)

Useful library of methods which do logic for analyzer components.



## Members

* [IsValidFormula](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1a42f78a5d26df5185a663e849727d49d9)
* [TryConvertExpression](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1a47551dfdcee35792772357fcdb909a98)
* [TryConvertFormula](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1a4e0532884b7e9750b8e88ecb929c8ab2)
* [TryConvertName](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1adac062686a48d3ef92c67b4a2616233b)
* [TryGetActualName](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1a28a06301a2411a1157f7f54b419175ef)

## Private static functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1adac062686a48d3ef92c67b4a2616233b"></a>
### Function TryConvertName

![][private]
![][static]


```csharp
static bool Phoenix.ModelCenter.PlugIn.AnalyzerUtils.TryConvertName(string input, IAnalyzerVariableInfo varInfo, AnalyzerExpressionConversion conversion, out string output)
```


Try to convert a variable name between analyzer and [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) or vice-versa.

**Parameters**:

* **input**: The input name.
* **varInfo**: The analyzer variable info (mandatory).
* **conversion**: The conversion to perform.
* **output**: The output name.


**Returns**:

True on success, false on failure.



**Parameters**:

* string **input**
* [IAnalyzerVariableInfo](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo) **varInfo**
* [AnalyzerExpressionConversion](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1aeac0cd87e7ff38f844b3c46b8ec70639) **conversion**
* out string **output**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AnalyzerUtils.TryConvertName"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1a28a06301a2411a1157f7f54b419175ef"></a>
### Function TryGetActualName

![][private]
![][static]


```csharp
static bool Phoenix.ModelCenter.PlugIn.AnalyzerUtils.TryGetActualName(string input, IAnalyzerVariableInfo varInfo, AnalyzerExpressionConversion conversion, bool allowConstant, out string output)
```


Try to convert a display name to an actual name or vice versa.

**Parameters**:

* **input**: The input name.
* **varInfo**: The analyzer variable info, which may be null.
* **conversion**: The conversion to perform.
* **allowConstant**: Whether to allow constants.
* **output**: The output name.


**Returns**:

True on success, false on failure.



**Parameters**:

* string **input**
* [IAnalyzerVariableInfo](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo) **varInfo**
* [AnalyzerExpressionConversion](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1aeac0cd87e7ff38f844b3c46b8ec70639) **conversion**
* bool **allowConstant**
* out string **output**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AnalyzerUtils.TryGetActualName"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1a47551dfdcee35792772357fcdb909a98"></a>
### Function TryConvertExpression

![][private]
![][static]


```csharp
static bool Phoenix.ModelCenter.PlugIn.AnalyzerUtils.TryConvertExpression(string input, IAnalyzerVariableInfo varInfo, AnalyzerExpressionConversion conversion, out string output)
```


Try to convert an entire expression from analyzer/display names to [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) names or vice-versa. No effort is made to actually parse the expression.

**Parameters**:

* **input**: The input expression.
* **varInfo**: The variable info, or null if none. If null or no analyzer variables, copies input to output and returns true.
* **conversion**: The type of conversion.
* **output**: The converted expression.


**Returns**:

True on success, false on failure.



**Parameters**:

* string **input**
* [IAnalyzerVariableInfo](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo) **varInfo**
* [AnalyzerExpressionConversion](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1aeac0cd87e7ff38f844b3c46b8ec70639) **conversion**
* out string **output**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AnalyzerUtils.TryConvertExpression"}]}`
-->

## Public static functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1a42f78a5d26df5185a663e849727d49d9"></a>
### Function IsValidFormula

![][public]
![][static]


```csharp
static bool Phoenix.ModelCenter.PlugIn.AnalyzerUtils.IsValidFormula(string formula, IAnalyzerVariableInfo varInfo, AnalyzerExpressionConversion conversion, AnalyzerExpressionType expressionType, bool allowEmpty)
```


Convenience method to determine if the given expression is a valid formula.

**Parameters**:

* **formula**: The formula to check.
* **varInfo**: The analyzer variable info, or null if none.
* **conversion**: The type of conversion to try to perform.
* **expressionType**: The type of expression to expect.
* **allowEmpty**: Whether to allow an empty or null string.


**Returns**:

True if yes, false if no.



**Parameters**:

* string **formula**
* [IAnalyzerVariableInfo](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo) **varInfo**
* [AnalyzerExpressionConversion](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1aeac0cd87e7ff38f844b3c46b8ec70639) **conversion**
* [AnalyzerExpressionType](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1aa379c9be12f92ebc16071ffd215cf11b) **expressionType**
* bool **allowEmpty**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AnalyzerUtils.IsValidFormula"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils_1a4e0532884b7e9750b8e88ecb929c8ab2"></a>
### Function TryConvertFormula

![][public]
![][static]


```csharp
static bool Phoenix.ModelCenter.PlugIn.AnalyzerUtils.TryConvertFormula(string inputFormula, IAnalyzerVariableInfo varInfo, AnalyzerExpressionConversion conversion, AnalyzerExpressionType expressionType, bool allowEmpty, out string outputFormula)
```


Convert from a display formula to an actual formula or vice-versa.

**Parameters**:

* **inputFormula**: The formula to convert.
* **varInfo**: The analyzer variable info, or null if none.
* **conversion**: The type of conversion to perform.
* **expressionType**: The type of expression to expect.
* **allowEmpty**: Whether to allow an empty or null string.
* **outputFormula**: The converted formula.


**Returns**:

True on success, false on failure.



**Parameters**:

* string **inputFormula**
* [IAnalyzerVariableInfo](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo) **varInfo**
* [AnalyzerExpressionConversion](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1aeac0cd87e7ff38f844b3c46b8ec70639) **conversion**
* [AnalyzerExpressionType](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn_1aa379c9be12f92ebc16071ffd215cf11b) **expressionType**
* bool **allowEmpty**
* out string **outputFormula**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.AnalyzerUtils.TryConvertFormula"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)