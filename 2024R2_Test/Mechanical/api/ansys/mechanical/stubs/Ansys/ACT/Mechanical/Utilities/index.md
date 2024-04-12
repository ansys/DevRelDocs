<a id="module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.Utilities"></a>

<a id="the-utilities-package"></a>

# The `Utilities` package

<a id="summary"></a>

## Summary

### Classes

| [`GeometryImportPreferences`](GeometryImportPreferences.md#GeometryImportPreferences)   |    |
|-----------------------------------------------------------------------------------------|----|

<a id="description"></a>

## Description

Utilities subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Utilities.GeometryImportPreferences"></a>

### *class* Utilities.GeometryImportPreferences

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ProcessSolids`](#Utilities.ProcessSolids)                                                                                            | Import solid bodies.                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`ProcessSurfaces`](#Utilities.ProcessSurfaces)                                                                                        | Import surface bodies.                                                                   |
| [`ProcessLines`](#Utilities.ProcessLines)                                                                                              | Import lines bodies.                                                                     |
| [`ProcessAttributes`](#Utilities.ProcessAttributes)                                                                                    | Import CAD system attributes.                                                            |
| [`AttributeKey`](#Utilities.AttributeKey)                                                                                              | If ProcessAttributes is true, import only those attributes with this prefix.             |
| [`ProcessNamedSelections`](#Utilities.ProcessNamedSelections)                                                                          | Import/create named selections.                                                          |
| [`NamedSelectionKey`](#Utilities.NamedSelectionKey)                                                                                    | If ProcessNamedSelections is true, import only those named selections with this          |
| [`ProcessMaterialProperties`](#Utilities.ProcessMaterialProperties)                                                                    | Import primary material data defined in the CAD source.                                  |
| [`AnalysisType`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/AnalysisType.md#AnalysisType)                            | Specify the analysis type to target during import.                                       |
| [`CADAssociativity`](#Utilities.CADAssociativity)                                                                                      | Allow associativity.                                                                     |
| [`ProcessCoordinateSystems`](#Utilities.ProcessCoordinateSystems)                                                                      | Import coordinate systems defined in the CAD source.                                     |
| [`CoordinateSystemKey`](#Utilities.CoordinateSystemKey)                                                                                | If ProcessCoordinateSystems is true, import only those coordinate systems with this      |
| [`ProcessWorkPoints`](#Utilities.ProcessWorkPoints)                                                                                    | Import work points.                                                                      |
| [`ReaderSaveFile`](#Utilities.ReaderSaveFile)                                                                                          | Save the part file of a model after the import.                                          |
| [`ProcessInstances`](#Utilities.ProcessInstances)                                                                                      | Honor part instance specifications.                                                      |
| [`DoSmartUpdate`](#Utilities.DoSmartUpdate)                                                                                            | Speed up refreshes for models with unmodified components. Causes changes to other import |
| [`ComparePartsOnUpdate`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsOnUpdate.md#ComparePartsOnUpdate)    | Enable mesh preservation on refresh for unmodified entities.                             |
| [`ComparePartsTolerance`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsTolerance.md#ComparePartsTolerance) | Specifies the tolerance to use when comparing parts.                                     |
| [`EnclosureSymmetryProcessing`](#Utilities.EnclosureSymmetryProcessing)                                                                | Enable the processing of enclosure and symmetry named selections.                        |
| [`DecomposeDisjointGeometry`](#Utilities.DecomposeDisjointGeometry)                                                                    | Enable the decomposition of disjoint geometries for the following associative geometry   |
| [`MixedImportResolution`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/MixedImportResolution.md#MixedImportResolution) | Allows mixed-dimension parts to be imported as assembly components with parts of         |
| [`Clean`](#Utilities.Clean)                                                                                                            | Clean unwanted features when importing geometry.                                         |
| [`StitchType`](#Utilities.StitchType)                                                                                                  | Specifies how surfaces should be stitched together.                                      |
| [`StitchTolerance`](#Utilities.StitchTolerance)                                                                                        | If StitchType is User, specifies the tolerance to use for stitching detection.           |
| [`FacetQuality`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/FacetQuality.md#FacetQuality)                            | Specifies what facet quality should be used for the import.                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Utilities import GeometryImportPreferences
```

<a id="property-detail"></a>

## Property detail

<a id="Utilities.ProcessSolids"></a>

### *property* Utilities.ProcessSolids *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import solid bodies.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ProcessSurfaces"></a>

### *property* Utilities.ProcessSurfaces *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import surface bodies.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ProcessLines"></a>

### *property* Utilities.ProcessLines *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import lines bodies.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ProcessAttributes"></a>

### *property* Utilities.ProcessAttributes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import CAD system attributes.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.AttributeKey"></a>

### *property* Utilities.AttributeKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

If ProcessAttributes is true, import only those attributes with this prefix.
Multiple semicolon-delimited filters may be specified. An empty string matches
everything.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ProcessNamedSelections"></a>

### *property* Utilities.ProcessNamedSelections *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import/create named selections.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.NamedSelectionKey"></a>

### *property* Utilities.NamedSelectionKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

If ProcessNamedSelections is true, import only those named selections with this
prefix. Multiple semicolon-delimited filters may be specified.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ProcessMaterialProperties"></a>

### *property* Utilities.ProcessMaterialProperties *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import primary material data defined in the CAD source.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.AnalysisType"></a>

### *property* Utilities.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.AnalysisType](../../../Mechanical/DataModel/Enums/GeometryImportPreference/AnalysisType.md#AnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specify the analysis type to target during import.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.CADAssociativity"></a>

### *property* Utilities.CADAssociativity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Allow associativity.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ProcessCoordinateSystems"></a>

### *property* Utilities.ProcessCoordinateSystems *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import coordinate systems defined in the CAD source.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.CoordinateSystemKey"></a>

### *property* Utilities.CoordinateSystemKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

If ProcessCoordinateSystems is true, import only those coordinate systems with this
prefix. Multiple semicolon-delimited filters may be specified. An empty string matches
everything.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ProcessWorkPoints"></a>

### *property* Utilities.ProcessWorkPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import work points.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ReaderSaveFile"></a>

### *property* Utilities.ReaderSaveFile *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Save the part file of a model after the import.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ProcessInstances"></a>

### *property* Utilities.ProcessInstances *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Honor part instance specifications.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.DoSmartUpdate"></a>

### *property* Utilities.DoSmartUpdate *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Speed up refreshes for models with unmodified components. Causes changes to other import
preferences to be ignored during refresh.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ComparePartsOnUpdate"></a>

### *property* Utilities.ComparePartsOnUpdate *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.ComparePartsOnUpdate](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsOnUpdate.md#ComparePartsOnUpdate) | [None](https://docs.python.org/3/library/constants.html#None)*

Enable mesh preservation on refresh for unmodified entities.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.ComparePartsTolerance"></a>

### *property* Utilities.ComparePartsTolerance *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.ComparePartsTolerance](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsTolerance.md#ComparePartsTolerance) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the tolerance to use when comparing parts.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.EnclosureSymmetryProcessing"></a>

### *property* Utilities.EnclosureSymmetryProcessing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Enable the processing of enclosure and symmetry named selections.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.DecomposeDisjointGeometry"></a>

### *property* Utilities.DecomposeDisjointGeometry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Enable the decomposition of disjoint geometries for the following associative geometry
interfaces:

<!-- !! processed by numpydoc !! -->

<a id="Utilities.MixedImportResolution"></a>

### *property* Utilities.MixedImportResolution *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.MixedImportResolution](../../../Mechanical/DataModel/Enums/GeometryImportPreference/MixedImportResolution.md#MixedImportResolution) | [None](https://docs.python.org/3/library/constants.html#None)*

Allows mixed-dimension parts to be imported as assembly components with parts of
different dimensions.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.Clean"></a>

### *property* Utilities.Clean *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Clean unwanted features when importing geometry.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.StitchType"></a>

### *property* Utilities.StitchType *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.StitchSurfacesOnImport](../../../Mechanical/DataModel/Enums/GeometryImportPreference/StitchSurfacesOnImport.md#StitchSurfacesOnImport) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies how surfaces should be stitched together.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.StitchTolerance"></a>

### *property* Utilities.StitchTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

If StitchType is User, specifies the tolerance to use for stitching detection.

<!-- !! processed by numpydoc !! -->

<a id="Utilities.FacetQuality"></a>

### *property* Utilities.FacetQuality *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.FacetQuality](../../../Mechanical/DataModel/Enums/GeometryImportPreference/FacetQuality.md#FacetQuality) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies what facet quality should be used for the import.
The default value is Source meaning that the facets as represented in the CAD
system or use a Normal option for those that do not have display.
The others are relative settings compared to “normal” facet quality.
Typically, better facet quality requires more memory and may take additional time to import/update.

<!-- !! processed by numpydoc !! -->
