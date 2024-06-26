# GeometryImportPreferences

### *class* GeometryImportPreferences

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

## Overview

### Properties

| [`ProcessSolids`](#GeometryImportPreferences.ProcessSolids)                                                                            | Import solid bodies.                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`ProcessSurfaces`](#GeometryImportPreferences.ProcessSurfaces)                                                                        | Import surface bodies.                                                                   |
| [`ProcessLines`](#GeometryImportPreferences.ProcessLines)                                                                              | Import lines bodies.                                                                     |
| [`ProcessAttributes`](#GeometryImportPreferences.ProcessAttributes)                                                                    | Import CAD system attributes.                                                            |
| [`AttributeKey`](#GeometryImportPreferences.AttributeKey)                                                                              | If ProcessAttributes is true, import only those attributes with this prefix.             |
| [`ProcessNamedSelections`](#GeometryImportPreferences.ProcessNamedSelections)                                                          | Import/create named selections.                                                          |
| [`NamedSelectionKey`](#GeometryImportPreferences.NamedSelectionKey)                                                                    | If ProcessNamedSelections is true, import only those named selections with this          |
| [`ProcessMaterialProperties`](#GeometryImportPreferences.ProcessMaterialProperties)                                                    | Import primary material data defined in the CAD source.                                  |
| [`AnalysisType`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/AnalysisType.md#AnalysisType)                            | Specify the analysis type to target during import.                                       |
| [`CADAssociativity`](#GeometryImportPreferences.CADAssociativity)                                                                      | Allow associativity.                                                                     |
| [`ProcessCoordinateSystems`](#GeometryImportPreferences.ProcessCoordinateSystems)                                                      | Import coordinate systems defined in the CAD source.                                     |
| [`CoordinateSystemKey`](#GeometryImportPreferences.CoordinateSystemKey)                                                                | If ProcessCoordinateSystems is true, import only those coordinate systems with this      |
| [`ProcessWorkPoints`](#GeometryImportPreferences.ProcessWorkPoints)                                                                    | Import work points.                                                                      |
| [`ReaderSaveFile`](#GeometryImportPreferences.ReaderSaveFile)                                                                          | Save the part file of a model after the import.                                          |
| [`ProcessInstances`](#GeometryImportPreferences.ProcessInstances)                                                                      | Honor part instance specifications.                                                      |
| [`DoSmartUpdate`](#GeometryImportPreferences.DoSmartUpdate)                                                                            | Speed up refreshes for models with unmodified components. Causes changes to other import |
| [`ComparePartsOnUpdate`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsOnUpdate.md#ComparePartsOnUpdate)    | Enable mesh preservation on refresh for unmodified entities.                             |
| [`ComparePartsTolerance`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsTolerance.md#ComparePartsTolerance) | Specifies the tolerance to use when comparing parts.                                     |
| [`EnclosureSymmetryProcessing`](#GeometryImportPreferences.EnclosureSymmetryProcessing)                                                | Enable the processing of enclosure and symmetry named selections.                        |
| [`DecomposeDisjointGeometry`](#GeometryImportPreferences.DecomposeDisjointGeometry)                                                    | Enable the decomposition of disjoint geometries for the following associative geometry   |
| [`MixedImportResolution`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/MixedImportResolution.md#MixedImportResolution) | Allows mixed-dimension parts to be imported as assembly components with parts of         |
| [`Clean`](#GeometryImportPreferences.Clean)                                                                                            | Clean unwanted features when importing geometry.                                         |
| [`StitchType`](#GeometryImportPreferences.StitchType)                                                                                  | Specifies how surfaces should be stitched together.                                      |
| [`StitchTolerance`](#GeometryImportPreferences.StitchTolerance)                                                                        | If StitchType is User, specifies the tolerance to use for stitching detection.           |
| [`FacetQuality`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/FacetQuality.md#FacetQuality)                            | Specifies what facet quality should be used for the import.                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Utilities import GeometryImportPreferences
```

## Property detail

### *property* GeometryImportPreferences.ProcessSolids *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import solid bodies.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ProcessSurfaces *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import surface bodies.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ProcessLines *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import lines bodies.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ProcessAttributes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import CAD system attributes.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.AttributeKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

If ProcessAttributes is true, import only those attributes with this prefix.
Multiple semicolon-delimited filters may be specified. An empty string matches
everything.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ProcessNamedSelections *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import/create named selections.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.NamedSelectionKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

If ProcessNamedSelections is true, import only those named selections with this
prefix. Multiple semicolon-delimited filters may be specified.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ProcessMaterialProperties *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import primary material data defined in the CAD source.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.AnalysisType](../../../Mechanical/DataModel/Enums/GeometryImportPreference/AnalysisType.md#AnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specify the analysis type to target during import.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.CADAssociativity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Allow associativity.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ProcessCoordinateSystems *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import coordinate systems defined in the CAD source.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.CoordinateSystemKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

If ProcessCoordinateSystems is true, import only those coordinate systems with this
prefix. Multiple semicolon-delimited filters may be specified. An empty string matches
everything.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ProcessWorkPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Import work points.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ReaderSaveFile *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Save the part file of a model after the import.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ProcessInstances *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Honor part instance specifications.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.DoSmartUpdate *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Speed up refreshes for models with unmodified components. Causes changes to other import
preferences to be ignored during refresh.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ComparePartsOnUpdate *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.ComparePartsOnUpdate](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsOnUpdate.md#ComparePartsOnUpdate) | [None](https://docs.python.org/3/library/constants.html#None)*

Enable mesh preservation on refresh for unmodified entities.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.ComparePartsTolerance *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.ComparePartsTolerance](../../../Mechanical/DataModel/Enums/GeometryImportPreference/ComparePartsTolerance.md#ComparePartsTolerance) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the tolerance to use when comparing parts.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.EnclosureSymmetryProcessing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Enable the processing of enclosure and symmetry named selections.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.DecomposeDisjointGeometry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Enable the decomposition of disjoint geometries for the following associative geometry
interfaces:

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.MixedImportResolution *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.MixedImportResolution](../../../Mechanical/DataModel/Enums/GeometryImportPreference/MixedImportResolution.md#MixedImportResolution) | [None](https://docs.python.org/3/library/constants.html#None)*

Allows mixed-dimension parts to be imported as assembly components with parts of
different dimensions.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.Clean *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Clean unwanted features when importing geometry.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.StitchType *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.StitchSurfacesOnImport](../../../Mechanical/DataModel/Enums/GeometryImportPreference/StitchSurfacesOnImport.md#StitchSurfacesOnImport) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies how surfaces should be stitched together.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.StitchTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

If StitchType is User, specifies the tolerance to use for stitching detection.

<!-- !! processed by numpydoc !! -->

### *property* GeometryImportPreferences.FacetQuality *: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.FacetQuality](../../../Mechanical/DataModel/Enums/GeometryImportPreference/FacetQuality.md#FacetQuality) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies what facet quality should be used for the import.
The default value is Source meaning that the facets as represented in the CAD
system or use a Normal option for those that do not have display.
The others are relative settings compared to “normal” facet quality.
Typically, better facet quality requires more memory and may take additional time to import/update.

<!-- !! processed by numpydoc !! -->
