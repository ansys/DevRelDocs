# `GeometryImportPreferences`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences"></a>

#### *class* Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

This is used to provide import and reload (refresh) preferences for geometry file import.
These preferences are identical to those exposed in the WB2 project schematic and Mechanical
Geometry preferences. More information can be found in the “Geometry Preferences” section of
the “CAD Integration” documentation. Both general and advanced preferences are provided.

Default values will be taken from the Mechanical preferences. This allows user-specified
default values to propagate to these preferences.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`GetScriptedPropertySetter`](#GeometryImportPreferences.GetScriptedPropertySetter)   | Get a string containing script-executable commands to set the properties on a   |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`AnalysisType`](#GeometryImportPreferences.AnalysisType)                               | Specify the analysis type to target during import.                                       |
| [`AttributeKey`](#GeometryImportPreferences.AttributeKey)                               | If ProcessAttributes is true, import only those attributes with this prefix.             |
| [`CADAssociativity`](#GeometryImportPreferences.CADAssociativity)                       | Allow associativity.                                                                     |
| [`Clean`](#GeometryImportPreferences.Clean)                                             | Clean unwanted features when importing geometry.                                         |
| [`ComparePartsOnUpdate`](#GeometryImportPreferences.ComparePartsOnUpdate)               | Enable mesh preservation on refresh for unmodified entities.                             |
| [`ComparePartsTolerance`](#GeometryImportPreferences.ComparePartsTolerance)             | Specifies the tolerance to use when comparing parts.                                     |
| [`CoordinateSystemKey`](#GeometryImportPreferences.CoordinateSystemKey)                 | If ProcessCoordinateSystems is true, import only those coordinate systems with this      |
| [`DecomposeDisjointGeometry`](#GeometryImportPreferences.DecomposeDisjointGeometry)     | Enable the decomposition of disjoint geometries for the following associative geometry   |
| [`DoSmartUpdate`](#GeometryImportPreferences.DoSmartUpdate)                             | Speed up refreshes for models with unmodified components. Causes changes to other import |
| [`EnclosureSymmetryProcessing`](#GeometryImportPreferences.EnclosureSymmetryProcessing) | Enable the processing of enclosure and symmetry named selections.                        |
| [`FacetQuality`](#GeometryImportPreferences.FacetQuality)                               | Specifies what facet quality should be used for the import.                              |
| [`MixedImportResolution`](#GeometryImportPreferences.MixedImportResolution)             | Allows mixed-dimension parts to be imported as assembly components with parts of         |
| [`NamedSelectionKey`](#GeometryImportPreferences.NamedSelectionKey)                     | If ProcessNamedSelections is true, import only those named selections with this          |
| [`ParameterKey`](#GeometryImportPreferences.ParameterKey)                               | If ProcessParameters is not None, this specifies the prefix or postfix filtering         |
| [`ProcessAttributes`](#GeometryImportPreferences.ProcessAttributes)                     | Import CAD system attributes.                                                            |
| [`ProcessCoordinateSystems`](#GeometryImportPreferences.ProcessCoordinateSystems)       | Import coordinate systems defined in the CAD source.                                     |
| [`ProcessInstances`](#GeometryImportPreferences.ProcessInstances)                       | Honor part instance specifications.                                                      |
| [`ProcessLines`](#GeometryImportPreferences.ProcessLines)                               | Import lines bodies.                                                                     |
| [`ProcessMaterialProperties`](#GeometryImportPreferences.ProcessMaterialProperties)     | Import primary material data defined in the CAD source.                                  |
| [`ProcessNamedSelections`](#GeometryImportPreferences.ProcessNamedSelections)           | Import/create named selections.                                                          |
| [`ProcessParameters`](#GeometryImportPreferences.ProcessParameters)                     | Enum to specify how parameters should be processed.                                      |
| [`ProcessSolids`](#GeometryImportPreferences.ProcessSolids)                             | Import solid bodies.                                                                     |
| [`ProcessSurfaces`](#GeometryImportPreferences.ProcessSurfaces)                         | Import surface bodies.                                                                   |
| [`ProcessWorkPoints`](#GeometryImportPreferences.ProcessWorkPoints)                     | Import work points.                                                                      |
| [`ReaderSaveFile`](#GeometryImportPreferences.ReaderSaveFile)                           | Save the part file of a model after the import.                                          |
| [`StitchTolerance`](#GeometryImportPreferences.StitchTolerance)                         | If StitchType is User, specifies the tolerance to use for stitching detection.           |
| [`StitchType`](#GeometryImportPreferences.StitchType)                                   | Specifies how surfaces should be stitched together.                                      |

<a id="property-detail"></a>

## Property detail

<a id="GeometryImportPreferences.AnalysisType"></a>

### *property* GeometryImportPreferences.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.AnalysisType](../../../Mechanical/DataModel/Enums/GeometryImportPreference/AnalysisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.AnalysisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specify the analysis type to target during import.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.AttributeKey"></a>

### *property* GeometryImportPreferences.AttributeKey *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If ProcessAttributes is true, import only those attributes with this prefix.
Multiple semicolon-delimited filters may be specified. An empty string matches
everything.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.CADAssociativity"></a>

### *property* GeometryImportPreferences.CADAssociativity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Allow associativity.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.Clean"></a>

### *property* GeometryImportPreferences.Clean *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Clean unwanted features when importing geometry.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ComparePartsOnUpdate"></a>

### *property* GeometryImportPreferences.ComparePartsOnUpdate *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.ComparePartsOnUpdate](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsOnUpdate.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.ComparePartsOnUpdate) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Enable mesh preservation on refresh for unmodified entities.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ComparePartsTolerance"></a>

### *property* GeometryImportPreferences.ComparePartsTolerance *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.ComparePartsTolerance](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsTolerance.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.ComparePartsTolerance) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the tolerance to use when comparing parts.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.CoordinateSystemKey"></a>

### *property* GeometryImportPreferences.CoordinateSystemKey *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If ProcessCoordinateSystems is true, import only those coordinate systems with this
prefix. Multiple semicolon-delimited filters may be specified. An empty string matches
everything.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.DecomposeDisjointGeometry"></a>

### *property* GeometryImportPreferences.DecomposeDisjointGeometry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Enable the decomposition of disjoint geometries for the following associative geometry
interfaces:

Creo Parametric (faces only)

Autodesk Inventor (bodies only)

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.DoSmartUpdate"></a>

### *property* GeometryImportPreferences.DoSmartUpdate *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Speed up refreshes for models with unmodified components. Causes changes to other import
preferences to be ignored during refresh.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.EnclosureSymmetryProcessing"></a>

### *property* GeometryImportPreferences.EnclosureSymmetryProcessing *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Enable the processing of enclosure and symmetry named selections.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.FacetQuality"></a>

### *property* GeometryImportPreferences.FacetQuality *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.FacetQuality](../../../Mechanical/DataModel/Enums/GeometryImportPreference/FacetQuality.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.FacetQuality) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies what facet quality should be used for the import.
The default value is Source meaning that the facets as represented in the CAD
system or use a Normal option for those that do not have display.
The others are relative settings compared to “normal” facet quality.
Typically, better facet quality requires more memory and may take additional time to import/update.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.MixedImportResolution"></a>

### *property* GeometryImportPreferences.MixedImportResolution *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.MixedImportResolution](../../../Mechanical/DataModel/Enums/GeometryImportPreference/MixedImportResolution.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.MixedImportResolution) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Allows mixed-dimension parts to be imported as assembly components with parts of
different dimensions.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.NamedSelectionKey"></a>

### *property* GeometryImportPreferences.NamedSelectionKey *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If ProcessNamedSelections is true, import only those named selections with this
prefix. Multiple semicolon-delimited filters may be specified.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ParameterKey"></a>

### *property* GeometryImportPreferences.ParameterKey *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If ProcessParameters is not None, this specifies the prefix or postfix filtering
that will be used to identify enabled Workbench parameters. Multiple semicolon-delimited
filters may be specified.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessAttributes"></a>

### *property* GeometryImportPreferences.ProcessAttributes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Import CAD system attributes.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessCoordinateSystems"></a>

### *property* GeometryImportPreferences.ProcessCoordinateSystems *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Import coordinate systems defined in the CAD source.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessInstances"></a>

### *property* GeometryImportPreferences.ProcessInstances *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Honor part instance specifications.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessLines"></a>

### *property* GeometryImportPreferences.ProcessLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Import lines bodies.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessMaterialProperties"></a>

### *property* GeometryImportPreferences.ProcessMaterialProperties *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Import primary material data defined in the CAD source.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessNamedSelections"></a>

### *property* GeometryImportPreferences.ProcessNamedSelections *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Import/create named selections.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessParameters"></a>

### *property* GeometryImportPreferences.ProcessParameters *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Parameters](../../../Mechanical/DataModel/Enums/GeometryImportPreference/Parameters.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Parameters) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Enum to specify how parameters should be processed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessSolids"></a>

### *property* GeometryImportPreferences.ProcessSolids *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Import solid bodies.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessSurfaces"></a>

### *property* GeometryImportPreferences.ProcessSurfaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Import surface bodies.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ProcessWorkPoints"></a>

### *property* GeometryImportPreferences.ProcessWorkPoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Import work points.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.ReaderSaveFile"></a>

### *property* GeometryImportPreferences.ReaderSaveFile *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Save the part file of a model after the import.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.StitchTolerance"></a>

### *property* GeometryImportPreferences.StitchTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If StitchType is User, specifies the tolerance to use for stitching detection.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportPreferences.StitchType"></a>

### *property* GeometryImportPreferences.StitchType *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.StitchSurfacesOnImport](../../../Mechanical/DataModel/Enums/GeometryImportPreference/StitchSurfacesOnImport.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.StitchSurfacesOnImport) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies how surfaces should be stitched together.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryImportPreferences.GetScriptedPropertySetter"></a>

### *classmethod* GeometryImportPreferences.GetScriptedPropertySetter(variableName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), preferencesToChange: [Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences](#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences), preferencesToMirror: [Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences](#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

### *classmethod* GeometryImportPreferences.GetScriptedPropertySetter(variableName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), propertiesChanged: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Get a string containing script-executable commands to set the properties on a
preferences instance preferencesToChange, with the scripted name
variableName, to match the properties on another preferences instance
preferencesToMirror. Only the properties that are different will be used.
```

<!-- !! processed by numpydoc !! -->

