# `NastranExportOptions`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NastranExportOptions"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NastranExportOptions(NastranFilename: [str](https://docs.python.org/3/builtins/stdtypes.html#str), AnalysisType: [str](https://docs.python.org/3/builtins/stdtypes.html#str), GridCS: [int](https://docs.python.org/3/builtins/functions.html#int), Offset: [int](https://docs.python.org/3/builtins/functions.html#int), WTMass: [float](https://docs.python.org/3/builtins/functions.html#float), JointStiffness: [float](https://docs.python.org/3/builtins/functions.html#float), PyramidElements: [str](https://docs.python.org/3/builtins/stdtypes.html#str), Modes: [int](https://docs.python.org/3/builtins/functions.html#int), Time: [float](https://docs.python.org/3/builtins/functions.html#float), GroundCheck: [bool](https://docs.python.org/3/builtins/functions.html#bool))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines the NastranExportOptions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|---------------------------|
| [`Add`](#NastranExportOptions.Add)                             | Add method.               |
| [`Clear`](#NastranExportOptions.Clear)                         | Clear method.             |
| [`ContainsKey`](#NastranExportOptions.ContainsKey)             | ContainsKey method.       |
| [`ContainsValue`](#NastranExportOptions.ContainsValue)         | ContainsValue method.     |
| [`GetEnumerator`](#NastranExportOptions.GetEnumerator)         | GetEnumerator method.     |
| [`GetObjectData`](#NastranExportOptions.GetObjectData)         | GetObjectData method.     |
| [`OnDeserialization`](#NastranExportOptions.OnDeserialization) | OnDeserialization method. |
| [`Remove`](#NastranExportOptions.Remove)                       | Remove method.            |
| [`TryGetValue`](#NastranExportOptions.TryGetValue)             | TryGetValue method.       |

### Properties

| Name | Description |
|------------------------------------------------------------|-----------------------------------|
| [`AnalysisType`](#NastranExportOptions.AnalysisType)       | Analysis type.                    |
| [`Comparer`](#NastranExportOptions.Comparer)               | Comparer property.                |
| [`Count`](#NastranExportOptions.Count)                     | Count property.                   |
| [`GridCS`](#NastranExportOptions.GridCS)                   | Grid coordinate system number.    |
| [`GroundCheck`](#NastranExportOptions.GroundCheck)         | Ground check.                     |
| [`Item`](#NastranExportOptions.Item)                       | Item property.                    |
| [`JointStiffness`](#NastranExportOptions.JointStiffness)   | Joint stiffness.                  |
| [`Keys`](#NastranExportOptions.Keys)                       | Keys property.                    |
| [`Modes`](#NastranExportOptions.Modes)                     | Modes.                            |
| [`NastranFilename`](#NastranExportOptions.NastranFilename) | Full path of Nastran export file. |
| [`Offset`](#NastranExportOptions.Offset)                   | Offset.                           |
| [`PyramidElements`](#NastranExportOptions.PyramidElements) | Pyramid elements.                 |
| [`Time`](#NastranExportOptions.Time)                       | Time.                             |
| [`Values`](#NastranExportOptions.Values)                   | Values property.                  |
| [`WTMass`](#NastranExportOptions.WTMass)                   | WTMass.                           |

<a id="property-detail"></a>

## Property detail

<a id="NastranExportOptions.AnalysisType"></a>

### *property* NastranExportOptions.AnalysisType *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Analysis type.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Comparer"></a>

### *property* NastranExportOptions.Comparer *: System.Collections.Generic.IEqualityComparer[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Comparer property.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Count"></a>

### *property* NastranExportOptions.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Count property.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.GridCS"></a>

### *property* NastranExportOptions.GridCS *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Grid coordinate system number.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.GroundCheck"></a>

### *property* NastranExportOptions.GroundCheck *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Ground check.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Item"></a>

### *property* NastranExportOptions.Item *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.JointStiffness"></a>

### *property* NastranExportOptions.JointStiffness *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Joint stiffness.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Keys"></a>

### *property* NastranExportOptions.Keys *: System.Collections.Generic.Dictionary.KeyCollection[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Keys property.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Modes"></a>

### *property* NastranExportOptions.Modes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Modes.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.NastranFilename"></a>

### *property* NastranExportOptions.NastranFilename *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Full path of Nastran export file.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Offset"></a>

### *property* NastranExportOptions.Offset *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Offset.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.PyramidElements"></a>

### *property* NastranExportOptions.PyramidElements *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Pyramid elements.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Time"></a>

### *property* NastranExportOptions.Time *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Time.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Values"></a>

### *property* NastranExportOptions.Values *: System.Collections.Generic.Dictionary.ValueCollection[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Values property.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.WTMass"></a>

### *property* NastranExportOptions.WTMass *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WTMass.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NastranExportOptions.Add"></a>

### NastranExportOptions.Add(key: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Add method.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Clear"></a>

### NastranExportOptions.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear method.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.ContainsKey"></a>

### NastranExportOptions.ContainsKey(key: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

ContainsKey method.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.ContainsValue"></a>

### NastranExportOptions.ContainsValue(value: Any) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

ContainsValue method.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.GetEnumerator"></a>

### NastranExportOptions.GetEnumerator() → System.Collections.Generic.Dictionary.Enumerator[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.GetObjectData"></a>

### NastranExportOptions.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.OnDeserialization"></a>

### NastranExportOptions.OnDeserialization(sender: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

OnDeserialization method.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.Remove"></a>

### NastranExportOptions.Remove(key: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Remove method.

<!-- !! processed by numpydoc !! -->

<a id="NastranExportOptions.TryGetValue"></a>

### NastranExportOptions.TryGetValue(key: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

TryGetValue method.

<!-- !! processed by numpydoc !! -->

