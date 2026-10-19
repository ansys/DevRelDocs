# `ExternalDataFile`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ExternalDataFile"></a>

#### *class* Ansys.Mechanical.ExternalData.ExternalDataFile(importSettings: [Ansys.Mechanical.ExternalData.ImportSettingsBase](ImportSettingsBase.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ImportSettingsBase), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), identifier: [str](https://docs.python.org/3/builtins/stdtypes.html#str), description: [str](https://docs.python.org/3/builtins/stdtypes.html#str), isMainFile: [bool](https://docs.python.org/3/builtins/functions.html#bool), isRootRelativePath: [bool](https://docs.python.org/3/builtins/functions.html#bool))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A basic definition of the external data file.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|--------------------------------------------------------------|--------------------------------------------------------------------|
| [`Description`](#ExternalDataFile.Description)               | Gets or sets the optional description of the external data file.   |
| [`FilePath`](#ExternalDataFile.FilePath)                     | Gets or sets the file path of the external data file.              |
| [`Identifier`](#ExternalDataFile.Identifier)                 | Gets or sets the identifier of the external data file.             |
| [`ImportSettings`](#ExternalDataFile.ImportSettings)         | Gets or sets the import settings for current external data file.   |
| [`IsMainFile`](#ExternalDataFile.IsMainFile)                 | Gets or sets the main file flag of the external data file.         |
| [`IsRootRelativePath`](#ExternalDataFile.IsRootRelativePath) | IsRootRelativePath property.                                       |

<a id="property-detail"></a>

## Property detail

<a id="ExternalDataFile.Description"></a>

### *property* ExternalDataFile.Description *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the optional description of the external data file.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFile.FilePath"></a>

### *property* ExternalDataFile.FilePath *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the file path of the external data file.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFile.Identifier"></a>

### *property* ExternalDataFile.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the identifier of the external data file.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFile.ImportSettings"></a>

### *property* ExternalDataFile.ImportSettings *: [Ansys.Mechanical.ExternalData.ImportSettingsBase](ImportSettingsBase.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ImportSettingsBase) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the import settings for current external data file.

An import settings can be created by calling the GetSettingsForFormat
method from the factory class .

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFile.IsMainFile"></a>

### *property* ExternalDataFile.IsMainFile *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the main file flag of the external data file.

The nodal coordinate data for the selected main file is processed by the mapping
utility. The nodal coordinate data will be skipped in all other files.

Only one file can be set as the main file, otherwise, an exception will be thrown
during the import.

If the import format is MAPDL, the value of this property will be ignored as the
MAPDL CDB file will always be treated as main file during the import.

<!-- !! processed by numpydoc !! -->

<a id="ExternalDataFile.IsRootRelativePath"></a>

### *property* ExternalDataFile.IsRootRelativePath *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsRootRelativePath property.

<!-- !! processed by numpydoc !! -->

