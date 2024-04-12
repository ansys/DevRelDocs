<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.Graphics"></a>

<a id="the-graphics-package"></a>

# The `Graphics` package

<a id="summary"></a>

## Summary

### Subpackages

| [`Tools`](Tools/index.md#module-ansys.mechanical.stubs.Ansys.Mechanical.Graphics.Tools)   | Tools subpackage.   |
|-------------------------------------------------------------------------------------------|---------------------|

### Classes

| [`GraphicsViewportsExportSettings`](GraphicsViewportsExportSettings.md#GraphicsViewportsExportSettings)   | Settings object to control Graphics.ExportViewports behavior.                |
|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| [`AnnotationPreferences`](AnnotationPreferences.md#AnnotationPreferences)                                 | AnnotationPreferences class.                                                 |
| [`ResultPreference`](ResultPreference.md#ResultPreference)                                                | ResultPreference class.                                                      |
| [`VectorDisplay`](VectorDisplay.md#VectorDisplay)                                                         | VectorDisplay class.                                                         |
| [`AnalysisSettingsGraph`](AnalysisSettingsGraph.md#AnalysisSettingsGraph)                                 | AnalysisSettingsGraph class.                                                 |
| [`GlobalLegendSettings`](GlobalLegendSettings.md#GlobalLegendSettings)                                    | Defines global legend settings.                                              |
| [`AnimationExportSettings`](AnimationExportSettings.md#AnimationExportSettings)                           | AnimationExportSettings class.                                               |
| [`ResultAnimationOptions`](ResultAnimationOptions.md#ResultAnimationOptions)                              | ResultAnimationOptions class.                                                |
| [`SectionPlane`](SectionPlane.md#SectionPlane)                                                            | Represents a SectionPlane object. This object holds properties of the Plane. |
| [`SectionPlanes`](SectionPlanes.md#SectionPlanes)                                                         | Represents the collection of section planes used by graphics                 |
| [`Graphics3DExportSettings`](Graphics3DExportSettings.md#Graphics3DExportSettings)                        | Graphics3DExportSettings class.                                              |
| [`GraphicsImageExportSettings`](GraphicsImageExportSettings.md#GraphicsImageExportSettings)               | GraphicsImageExportSettings class.                                           |
| [`Point`](Point.md#Point)                                                                                 | Point class.                                                                 |
| [`ViewOptions`](ViewOptions.md#ViewOptions)                                                               | ViewOptions class.                                                           |

<a id="description"></a>

## Description

Graphics subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Graphics.GraphicsViewportsExportSettings"></a>

### *class* Graphics.GraphicsViewportsExportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Settings object to control Graphics.ExportViewports behavior.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`BorderStyle`](#Graphics.BorderStyle)   | Specifies which borders to add, if any, to the exported viewports image.                                                                                                                                                                                                                |
|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`CurrentGraphicsDisplay`](#id27)        | Specifies whether to use the current graphics display settings. Defaults to true.                                                                                                                                                                                                       |
| [`AppendGraph`](#id28)                   | Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.                                                                                                                                                                                             |
| [`Resolution`](#id29)                    | Specifies the resolution type. Defaults to NormalResolution.                                                                                                                                                                                                                            |
| [`Capture`](#id30)                       | Specifies what to include in the capture. Defaults to ImageAndLegend.                                                                                                                                                                                                                   |
| [`Background`](#id31)                    | Specifies the background color. Defaults to GraphicsAppearanceSetting.                                                                                                                                                                                                                  |
| [`FontMagnification`](#id32)             | Specifies the font magnification factor. Defaults to 1.0.                                                                                                                                                                                                                               |
| [`Width`](#id33)                         | Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.  |
| [`Height`](#id34)                        | Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import GraphicsViewportsExportSettings
```

<a id="property-detail"></a>

## Property detail

<a id="Graphics.BorderStyle"></a>

### *property* Graphics.BorderStyle *: [Ansys.Mechanical.DataModel.Enums.GraphicsViewportsExportBorderStyle](../DataModel/Enums/GraphicsViewportsExportBorderStyle.md#GraphicsViewportsExportBorderStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies which borders to add, if any, to the exported viewports image.
Border style enum values can be combined via bitwise-or ( | ).
Defaults to None.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.CurrentGraphicsDisplay"></a>

### *property* Graphics.CurrentGraphicsDisplay *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to use the current graphics display settings. Defaults to true.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.AppendGraph"></a>

### *property* Graphics.AppendGraph *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Resolution"></a>

### *property* Graphics.Resolution *: [Ansys.Mechanical.DataModel.Enums.GraphicsResolutionType](../DataModel/Enums/GraphicsResolutionType.md#GraphicsResolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the resolution type. Defaults to NormalResolution.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Capture"></a>

### *property* Graphics.Capture *: [Ansys.Mechanical.DataModel.Enums.GraphicsCaptureType](../DataModel/Enums/GraphicsCaptureType.md#GraphicsCaptureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies what to include in the capture. Defaults to ImageAndLegend.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Background"></a>

### *property* Graphics.Background *: [Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType](../DataModel/Enums/GraphicsBackgroundType.md#GraphicsBackgroundType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the background color. Defaults to GraphicsAppearanceSetting.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.FontMagnification"></a>

### *property* Graphics.FontMagnification *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the font magnification factor. Defaults to 1.0.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Width"></a>

### *property* Graphics.Width *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Height"></a>

### *property* Graphics.Height *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.AnnotationPreferences"></a>

### *class* Graphics.AnnotationPreferences

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> AnnotationPreferences class.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`SetNodeNumbering`](#Graphics.SetNodeNumbering)       | Sets the begin, end and increment values to display node numbering.    |
|--------------------------------------------------------|------------------------------------------------------------------------|
| [`SetElementNumbering`](#Graphics.SetElementNumbering) | Sets the begin, end and increment values to display element numbering. |

### Properties

| [`ShowAllAnnotations`](#Graphics.ShowAllAnnotations)                 | Sets the visibility of all annotations.                                                    |
|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`ShowCustomAnnotations`](#Graphics.ShowCustomAnnotations)           | Sets the visibility of user defined annotations.                                           |
| [`ShowLabels`](#Graphics.ShowLabels)                                 | Sets the visibility of annotation labels.                                                  |
| [`ShowPointMasses`](#Graphics.ShowPointMasses)                       | Sets the visibility of point mass annotations.                                             |
| [`ShowBeams`](#Graphics.ShowBeams)                                   | Sets the visibility of beam annotations.                                                   |
| [`ShowSprings`](#Graphics.ShowSprings)                               | Sets the visibility of spring annotations.                                                 |
| [`ShowBearings`](#Graphics.ShowBearings)                             | Sets the visibility of bearing annotations.                                                |
| [`ShowCracks`](#Graphics.ShowCracks)                                 | Sets the visibility of crack annotations.                                                  |
| [`ShowForceArrows`](#Graphics.ShowForceArrows)                       | Sets the visibility of force arrows on surface reaction.                                   |
| [`ShowBodyScopings`](#Graphics.ShowBodyScopings)                     | Sets the visibility of body scoping annotations.                                           |
| [`ShowMeshAnnotations`](#Graphics.ShowMeshAnnotations)               | Sets the visibility of mesh node and mesh element annotations in named selection displays. |
| [`ShowNodeNumbers`](#Graphics.ShowNodeNumbers)                       | Sets the visibility of mesh node numbers in named selection, mesh, and result displays.    |
| [`ShowElementNumbers`](#Graphics.ShowElementNumbers)                 | Sets the visibility of mesh element numbers in named Selection, mesh, and result displays. |
| [`ShowNamedSelectionElements`](#Graphics.ShowNamedSelectionElements) | Sets the visibility of elements for all items in the named selection group.                |
| [`PointMassSize`](#Graphics.PointMassSize)                           | Sets the size for point mass annotation. (Small-Large ; 1-100)                             |
| [`SpringSize`](#Graphics.SpringSize)                                 | Sets the size for spring annotation. (Small-Large ; 1-100)                                 |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import AnnotationPreferences
```

<a id="id2"></a>

## Property detail

<a id="Graphics.ShowAllAnnotations"></a>

### *property* Graphics.ShowAllAnnotations *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of all annotations.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowCustomAnnotations"></a>

### *property* Graphics.ShowCustomAnnotations *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of user defined annotations.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowLabels"></a>

### *property* Graphics.ShowLabels *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of annotation labels.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowPointMasses"></a>

### *property* Graphics.ShowPointMasses *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of point mass annotations.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowBeams"></a>

### *property* Graphics.ShowBeams *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of beam annotations.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowSprings"></a>

### *property* Graphics.ShowSprings *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of spring annotations.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowBearings"></a>

### *property* Graphics.ShowBearings *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of bearing annotations.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowCracks"></a>

### *property* Graphics.ShowCracks *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of crack annotations.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowForceArrows"></a>

### *property* Graphics.ShowForceArrows *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of force arrows on surface reaction.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowBodyScopings"></a>

### *property* Graphics.ShowBodyScopings *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of body scoping annotations.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowMeshAnnotations"></a>

### *property* Graphics.ShowMeshAnnotations *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of mesh node and mesh element annotations in named selection displays.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowNodeNumbers"></a>

### *property* Graphics.ShowNodeNumbers *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of mesh node numbers in named selection, mesh, and result displays.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowElementNumbers"></a>

### *property* Graphics.ShowElementNumbers *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of mesh element numbers in named Selection, mesh, and result displays.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowNamedSelectionElements"></a>

### *property* Graphics.ShowNamedSelectionElements *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the visibility of elements for all items in the named selection group.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.PointMassSize"></a>

### *property* Graphics.PointMassSize *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the size for point mass annotation. (Small-Large ; 1-100)

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SpringSize"></a>

### *property* Graphics.SpringSize *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the size for spring annotation. (Small-Large ; 1-100)

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Graphics.SetNodeNumbering"></a>

### Graphics.SetNodeNumbering(begin: System.Int32, end: System.Int32, inc: System.Int32)

Sets the begin, end and increment values to display node numbering.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SetElementNumbering"></a>

### Graphics.SetElementNumbering(begin: System.Int32, end: System.Int32, inc: System.Int32)

Sets the begin, end and increment values to display element numbering.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ResultPreference"></a>

### *class* Graphics.ResultPreference

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ResultPreference class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`GeometryView`](../DataModel/MechanicalEnums/Graphics/GeometryView.md#GeometryView)                   | Sets the result geometry view.                                          |
|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`ContourView`](../DataModel/MechanicalEnums/Graphics/ContourView.md#ContourView)                      | Sets the result contour view.                                           |
| [`ExtraModelDisplay`](../DataModel/MechanicalEnums/Graphics/ExtraModelDisplay.md#ExtraModelDisplay)    | Sets the result edge display option.                                    |
| [`DeformationScaling`](../DataModel/MechanicalEnums/Graphics/DeformationScaling.md#DeformationScaling) | Sets the deformation scale multiplier to either AutoScale or TrueScale. |
| [`DeformationScaleMultiplier`](#Graphics.DeformationScaleMultiplier)                                   | Sets the deformation scale multiplier.                                  |
| [`IsoSurfaceValue`](#Graphics.IsoSurfaceValue)                                                         | Sets the capping value for capped iso surface view .                    |
| [`CappingType`](../DataModel/MechanicalEnums/Graphics/CappingType.md#CappingType)                      | Sets the result capping type.                                           |
| [`ScopingDisplay`](../DataModel/MechanicalEnums/Graphics/ScopingDisplay.md#ScopingDisplay)             | Sets the result scoping display.                                        |
| [`ShowMinimum`](#Graphics.ShowMinimum)                                                                 | Displays the result minimum value annotation label.                     |
| [`ShowMaximum`](#Graphics.ShowMaximum)                                                                 | Displays the result maximum value annotation label.                     |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import ResultPreference
```

<a id="id4"></a>

## Property detail

<a id="Graphics.GeometryView"></a>

### *property* Graphics.GeometryView *: [Ansys.Mechanical.DataModel.MechanicalEnums.Graphics.GeometryView](../DataModel/MechanicalEnums/Graphics/GeometryView.md#GeometryView) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the result geometry view.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ContourView"></a>

### *property* Graphics.ContourView *: [Ansys.Mechanical.DataModel.MechanicalEnums.Graphics.ContourView](../DataModel/MechanicalEnums/Graphics/ContourView.md#ContourView) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the result contour view.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ExtraModelDisplay"></a>

### *property* Graphics.ExtraModelDisplay *: [Ansys.Mechanical.DataModel.MechanicalEnums.Graphics.ExtraModelDisplay](../DataModel/MechanicalEnums/Graphics/ExtraModelDisplay.md#ExtraModelDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the result edge display option.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.DeformationScaling"></a>

### *property* Graphics.DeformationScaling *: [Ansys.Mechanical.DataModel.MechanicalEnums.Graphics.DeformationScaling](../DataModel/MechanicalEnums/Graphics/DeformationScaling.md#DeformationScaling) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the deformation scale multiplier to either AutoScale or TrueScale.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.DeformationScaleMultiplier"></a>

### *property* Graphics.DeformationScaleMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the deformation scale multiplier.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.IsoSurfaceValue"></a>

### *property* Graphics.IsoSurfaceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the capping value for capped iso surface view .

<!-- !! processed by numpydoc !! -->

<a id="Graphics.CappingType"></a>

### *property* Graphics.CappingType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Graphics.CappingType](../DataModel/MechanicalEnums/Graphics/CappingType.md#CappingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the result capping type.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ScopingDisplay"></a>

### *property* Graphics.ScopingDisplay *: [Ansys.Mechanical.DataModel.MechanicalEnums.Graphics.ScopingDisplay](../DataModel/MechanicalEnums/Graphics/ScopingDisplay.md#ScopingDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the result scoping display.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowMinimum"></a>

### *property* Graphics.ShowMinimum *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the result minimum value annotation label.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowMaximum"></a>

### *property* Graphics.ShowMaximum *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the result maximum value annotation label.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.VectorDisplay"></a>

### *class* Graphics.VectorDisplay

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> VectorDisplay class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`LengthType`](#Graphics.LengthType)                       | Sets the result vector length type.             |
|------------------------------------------------------------|-------------------------------------------------|
| [`DisplayType`](#Graphics.DisplayType)                     | Sets the vector display type.                   |
| [`ControlDisplayDensity`](#Graphics.ControlDisplayDensity) | Allows control of the vector display density.   |
| [`DisplayDensity`](#Graphics.DisplayDensity)               | Sets the vector display density in percentage.  |
| [`LengthMultiplier`](#Graphics.LengthMultiplier)           | Sets the vector length multiplier.              |
| [`ShowTriadXAxis`](#Graphics.ShowTriadXAxis)               | Displays the X axis vector of the triad/tensor. |
| [`ShowTriadYAxis`](#Graphics.ShowTriadYAxis)               | Displays the Y axis vector of the triad/tensor. |
| [`ShowTriadZAxis`](#Graphics.ShowTriadZAxis)               | Displays the Z axis vector of the triad/tensor. |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import VectorDisplay
```

<a id="id6"></a>

## Property detail

<a id="Graphics.LengthType"></a>

### *property* Graphics.LengthType *: [Ansys.Mechanical.DataModel.Enums.VectorLengthType](../DataModel/Enums/VectorLengthType.md#VectorLengthType) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the result vector length type.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.DisplayType"></a>

### *property* Graphics.DisplayType *: [Ansys.Mechanical.DataModel.Enums.VectorDisplayType](../DataModel/Enums/VectorDisplayType.md#VectorDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the vector display type.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ControlDisplayDensity"></a>

### *property* Graphics.ControlDisplayDensity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Allows control of the vector display density.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.DisplayDensity"></a>

### *property* Graphics.DisplayDensity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the vector display density in percentage.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.LengthMultiplier"></a>

### *property* Graphics.LengthMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the vector length multiplier.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowTriadXAxis"></a>

### *property* Graphics.ShowTriadXAxis *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the X axis vector of the triad/tensor.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowTriadYAxis"></a>

### *property* Graphics.ShowTriadYAxis *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the Y axis vector of the triad/tensor.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowTriadZAxis"></a>

### *property* Graphics.ShowTriadZAxis *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the Z axis vector of the triad/tensor.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.AnalysisSettingsGraph"></a>

### *class* Graphics.AnalysisSettingsGraph

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> AnalysisSettingsGraph class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`BoundaryConditionVisibility`](#Graphics.BoundaryConditionVisibility)   | BoundaryConditionVisibility property.   |
|--------------------------------------------------------------------------|-----------------------------------------|

<a id="id7"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import AnalysisSettingsGraph
```

<a id="id8"></a>

## Property detail

<a id="Graphics.BoundaryConditionVisibility"></a>

### *property* Graphics.BoundaryConditionVisibility *: Ansys.Mechanical.Graphics.BoundaryConditionVisibilityDictionary | [None](https://docs.python.org/3/library/constants.html#None)*

BoundaryConditionVisibility property.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.GlobalLegendSettings"></a>

### *class* Graphics.GlobalLegendSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines global legend settings.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`LegendOrientation`](#Graphics.LegendOrientation)       | Whether the orientation of the legend.             |
|----------------------------------------------------------|----------------------------------------------------|
| [`ShowDateAndTime`](#Graphics.ShowDateAndTime)           | Whether the  date and time of the legend is shown. |
| [`ShowMinMax`](#Graphics.ShowMinMax)                     | Whether the Min and Max value are shown.           |
| [`ShowDeformingScaling`](#Graphics.ShowDeformingScaling) | Whether the Deformation Scaling is shown.          |

<a id="id9"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import GlobalLegendSettings
```

<a id="id10"></a>

## Property detail

<a id="Graphics.LegendOrientation"></a>

### *property* Graphics.LegendOrientation *: [Ansys.Mechanical.DataModel.Enums.LegendOrientationType](../DataModel/Enums/LegendOrientationType.md#LegendOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the orientation of the legend.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowDateAndTime"></a>

### *property* Graphics.ShowDateAndTime *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the  date and time of the legend is shown.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowMinMax"></a>

### *property* Graphics.ShowMinMax *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the Min and Max value are shown.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowDeformingScaling"></a>

### *property* Graphics.ShowDeformingScaling *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether the Deformation Scaling is shown.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.AnimationExportSettings"></a>

### *class* Graphics.AnimationExportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> AnimationExportSettings class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Width`](#id33)   | Specifies the video width.   |
|--------------------|------------------------------|
| [`Height`](#id34)  | Specifies the video height.  |

<a id="id11"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import AnimationExportSettings
```

<a id="id12"></a>

## Property detail

<a id="id0"></a>

### *property* Graphics.Width *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the video width.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* Graphics.Height *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the video height.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ResultAnimationOptions"></a>

### *class* Graphics.ResultAnimationOptions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ResultAnimationOptions class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`NumberOfFrames`](#Graphics.NumberOfFrames)                                     | Gets or Sets the Number Of Frames for Distributed Result Animation.                         |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Duration`](#Graphics.Duration)                                                 | Gets or Sets the Duration for Result Animation.                                             |
| [`RangeType`](#Graphics.RangeType)                                               | Gets or Sets the Range Type for Result Animation.                                           |
| [`UpdateContourRangeAtEachFrame`](#Graphics.UpdateContourRangeAtEachFrame)       | Gets or Sets if the Legend Contours will Update at Each Frame.                              |
| [`FitDeformationScalingToAnimation`](#Graphics.FitDeformationScalingToAnimation) | Gets or Sets if the Animation Displacement Fits for full range of Time Steps in the Screen. |
| [`TimeDecayCycles`](#Graphics.TimeDecayCycles)                                   | Gets or Sets the Number of Cycles for Time Decay.                                           |
| [`DisplacementTraces`](#Graphics.DisplacementTraces)                             | Gets or Sets if the Displacement Traces are Enabled/Disabled                                |

<a id="id14"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import ResultAnimationOptions
```

<a id="id15"></a>

## Property detail

<a id="Graphics.NumberOfFrames"></a>

### *property* Graphics.NumberOfFrames *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Number Of Frames for Distributed Result Animation.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Duration"></a>

### *property* Graphics.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Duration for Result Animation.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.RangeType"></a>

### *property* Graphics.RangeType *: [Ansys.Mechanical.DataModel.Enums.ResultAnimationRangeType](../DataModel/Enums/ResultAnimationRangeType.md#ResultAnimationRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Range Type for Result Animation.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.UpdateContourRangeAtEachFrame"></a>

### *property* Graphics.UpdateContourRangeAtEachFrame *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets if the Legend Contours will Update at Each Frame.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.FitDeformationScalingToAnimation"></a>

### *property* Graphics.FitDeformationScalingToAnimation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets if the Animation Displacement Fits for full range of Time Steps in the Screen.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.TimeDecayCycles"></a>

### *property* Graphics.TimeDecayCycles *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Number of Cycles for Time Decay.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.DisplacementTraces"></a>

### *property* Graphics.DisplacementTraces *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets if the Displacement Traces are Enabled/Disabled

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SectionPlane"></a>

### *class* Graphics.SectionPlane

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a SectionPlane object. This object holds properties of the Plane.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Equals`](#id38)   | Indicates whether the current SectionPlane properties are equal to the properties of another SectionPlane object.   |
|---------------------|---------------------------------------------------------------------------------------------------------------------|

### Properties

| [`Active`](#Graphics.Active)       | Gets or Sets the Active State of the Section Plane      |
|------------------------------------|---------------------------------------------------------|
| [`Center`](#Graphics.Center)       | Gets or Sets the Center point of the Section Plane      |
| [`Direction`](#Graphics.Direction) | Gets or Sets the Direction(Normal) of the Section Plane |
| [`Name`](#Graphics.Name)           | Gets or Sets the Name of the Section Plane              |
| [`Type`](#Graphics.Type)           | Gets or Sets the SectionPlane Type of the Section Plane |

<a id="id16"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import SectionPlane
```

<a id="id17"></a>

## Property detail

<a id="Graphics.Active"></a>

### *property* Graphics.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Active State of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Center"></a>

### *property* Graphics.Center *: [Ansys.Mechanical.Graphics.Point](Point.md#Point) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Center point of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Direction"></a>

### *property* Graphics.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Direction(Normal) of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Name"></a>

### *property* Graphics.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Name of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Type"></a>

### *property* Graphics.Type *: [Ansys.Mechanical.DataModel.Enums.SectionPlaneType](../DataModel/Enums/SectionPlaneType.md#SectionPlaneType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the SectionPlane Type of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

## Method detail

<a id="Graphics.Equals"></a>

### Graphics.Equals(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#SectionPlane))

Indicates whether the current SectionPlane properties are equal to the properties of another SectionPlane object.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SectionPlanes"></a>

### *class* Graphics.SectionPlanes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents the collection of section planes used by graphics

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Add`](#Graphics.Add)           | Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.   |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Clear`](#Graphics.Clear)       | Clears the collection of all SectionPlane objects.                                                                                                           |
| [`Remove`](#Graphics.Remove)     | Removes the requested SectionPlane from the collection.                                                                                                      |
| [`RemoveAt`](#Graphics.RemoveAt) | Removes the SectionPlane at the given index.                                                                                                                 |

### Properties

| [`ShowWholeElement`](#Graphics.ShowWholeElement)   | Gets or Sets the Element Visibility of the Section Plane   |
|----------------------------------------------------|------------------------------------------------------------|
| [`Capping`](#Graphics.Capping)                     | Gets or Sets the Capping style of the Section Plane        |
| [`Count`](#Graphics.Count)                         | The number of section planes in the collection.            |

<a id="id19"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import SectionPlanes
```

<a id="id20"></a>

## Property detail

<a id="Graphics.ShowWholeElement"></a>

### *property* Graphics.ShowWholeElement *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Element Visibility of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Capping"></a>

### *property* Graphics.Capping *: [Ansys.Mechanical.DataModel.Enums.SectionPlaneCappingType](../DataModel/Enums/SectionPlaneCappingType.md#SectionPlaneCappingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Capping style of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Count"></a>

### *property* Graphics.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of section planes in the collection.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

## Method detail

<a id="Graphics.Add"></a>

### Graphics.Add(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#SectionPlane))

Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Clear"></a>

### Graphics.Clear()

Clears the collection of all SectionPlane objects.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Remove"></a>

### Graphics.Remove(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#SectionPlane))

Removes the requested SectionPlane from the collection.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.RemoveAt"></a>

### Graphics.RemoveAt(index: System.Int32)

Removes the SectionPlane at the given index.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Graphics3DExportSettings"></a>

### *class* Graphics.Graphics3DExportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Graphics3DExportSettings class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Background`](#id31)   | Specifies the background color.   |
|-------------------------|-----------------------------------|

<a id="id22"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import Graphics3DExportSettings
```

<a id="id23"></a>

## Property detail

<a id="id24"></a>

### *property* Graphics.Background *: [Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType](../DataModel/Enums/GraphicsBackgroundType.md#GraphicsBackgroundType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the background color.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.GraphicsImageExportSettings"></a>

### *class* Graphics.GraphicsImageExportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> GraphicsImageExportSettings class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`CurrentGraphicsDisplay`](#id27)   | Specifies whether to use the current graphics display settings. Defaults to true.                                                                                                                                                                                                       |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AppendGraph`](#id28)              | Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.                                                                                                                                                                                             |
| [`Resolution`](#id29)               | Specifies the resolution type. Defaults to NormalResolution.                                                                                                                                                                                                                            |
| [`Capture`](#id30)                  | Specifies what to include in the capture. Defaults to ImageAndLegend.                                                                                                                                                                                                                   |
| [`Background`](#id31)               | Specifies the background color. Defaults to GraphicsAppearanceSetting.                                                                                                                                                                                                                  |
| [`FontMagnification`](#id32)        | Specifies the font magnification factor. Defaults to 1.0.                                                                                                                                                                                                                               |
| [`Width`](#id33)                    | Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.  |
| [`Height`](#id34)                   | Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property. |

<a id="id25"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import GraphicsImageExportSettings
```

<a id="id26"></a>

## Property detail

<a id="id27"></a>

### *property* Graphics.CurrentGraphicsDisplay *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to use the current graphics display settings. Defaults to true.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* Graphics.AppendGraph *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* Graphics.Resolution *: [Ansys.Mechanical.DataModel.Enums.GraphicsResolutionType](../DataModel/Enums/GraphicsResolutionType.md#GraphicsResolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the resolution type. Defaults to NormalResolution.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* Graphics.Capture *: [Ansys.Mechanical.DataModel.Enums.GraphicsCaptureType](../DataModel/Enums/GraphicsCaptureType.md#GraphicsCaptureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies what to include in the capture. Defaults to ImageAndLegend.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* Graphics.Background *: [Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType](../DataModel/Enums/GraphicsBackgroundType.md#GraphicsBackgroundType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the background color. Defaults to GraphicsAppearanceSetting.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* Graphics.FontMagnification *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the font magnification factor. Defaults to 1.0.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* Graphics.Width *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* Graphics.Height *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Point"></a>

### *class* Graphics.Point

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Point class.

> <!-- !! processed by numpydoc !! -->

### Constructors

| [`ConvertUnit`](#Graphics.ConvertUnit)     | Returns a new Point given new unit.   |
|--------------------------------------------|---------------------------------------|
| [`op_Equality`](#Graphics.op_Equality)     | Equal operator                        |
| [`op_Inequality`](#Graphics.op_Inequality) | Not-Equal operator                    |

### Methods

| [`Equals`](#id38)                      | Object.Equals(object o) override   |
|----------------------------------------|------------------------------------|
| [`GetHashCode`](#Graphics.GetHashCode) | Object.GetHashCode() override      |

### Properties

| [`Location`](#Graphics.Location)   | The location of the Point.    |
|------------------------------------|-------------------------------|
| [`Unit`](#Graphics.Unit)           | The length unit of the Point. |

<a id="id35"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import Point
```

<a id="id36"></a>

## Property detail

<a id="Graphics.Location"></a>

### *property* Graphics.Location *: System.Collections.Generic.IList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

The location of the Point.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Unit"></a>

### *property* Graphics.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The length unit of the Point.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

## Method detail

<a id="Graphics.ConvertUnit"></a>

### *classmethod* Graphics.ConvertUnit(inPoint: [Ansys.Mechanical.Graphics.Point](Point.md#Point), outputUnit: System.String)

Returns a new Point given new unit.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.op_Equality"></a>

### *classmethod* Graphics.op_Equality(a: [Ansys.Mechanical.Graphics.Point](Point.md#Point), b: [Ansys.Mechanical.Graphics.Point](Point.md#Point))

Equal operator

<!-- !! processed by numpydoc !! -->

<a id="Graphics.op_Inequality"></a>

### *classmethod* Graphics.op_Inequality(a: [Ansys.Mechanical.Graphics.Point](Point.md#Point), b: [Ansys.Mechanical.Graphics.Point](Point.md#Point))

Not-Equal operator

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### Graphics.Equals(o: System.Object)

Object.Equals(object o) override

<!-- !! processed by numpydoc !! -->

<a id="Graphics.GetHashCode"></a>

### Graphics.GetHashCode()

Object.GetHashCode() override

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ViewOptions"></a>

### *class* Graphics.ViewOptions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ViewOptions class.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`RescaleAnnotations`](#Graphics.RescaleAnnotations)   | Rescale size of annotation following a zoom in or zoom out of the model.   |
|--------------------------------------------------------|----------------------------------------------------------------------------|

### Properties

| [`VectorDisplay`](VectorDisplay.md#VectorDisplay)                         | VectorDisplay property.                                                                 |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`ResultPreference`](ResultPreference.md#ResultPreference)                | ResultPreference property.                                                              |
| [`AnnotationPreferences`](AnnotationPreferences.md#AnnotationPreferences) | AnnotationPreferences property.                                                         |
| [`ShowShellThickness`](#Graphics.ShowShellThickness)                      | Displays the thickness of shells.                                                       |
| [`ShowBeamThickness`](#Graphics.ShowBeamThickness)                        | Displays the thickness of beams.                                                        |
| [`ShowSPHExpansion`](#Graphics.ShowSPHExpansion)                          | Displays the expansion for SPH elements.                                                |
| [`ShowMesh`](#Graphics.ShowMesh)                                          | Display the model’s mesh.                                                               |
| [`ShowRandomColors`](#Graphics.ShowRandomColors)                          | Sets random colors for each object of the application.                                  |
| [`ShowVertices`](#Graphics.ShowVertices)                                  | Display all the vertices of the model.                                                  |
| [`ShowClusteredVertices`](#Graphics.ShowClusteredVertices)                | Displays all closely clustered vertices of the model.                                   |
| [`ShowEdgeDirection`](#Graphics.ShowEdgeDirection)                        | Displays the edge direction arrow.                                                      |
| [`ShowMeshConnection`](#Graphics.ShowMeshConnection)                      | Displays edge connection using a color scheme based on the mesh connection information. |
| [`ShowThickEdgeScoping`](#Graphics.ShowThickEdgeScoping)                  | Thicken the display of edge scoping.                                                    |
| [`ModelDisplay`](../DataModel/Enums/ModelDisplay.md#ModelDisplay)         | Sets the model display option.                                                          |
| [`ModelColoring`](../DataModel/Enums/ModelColoring.md#ModelColoring)      | Sets the Model display Coloring.                                                        |
| [`ShowCoordinateSystems`](#Graphics.ShowCoordinateSystems)                | Displays all coordinate system defined.                                                 |
| [`ClusteredVertexTolerance`](#Graphics.ClusteredVertexTolerance)          | Sets the clustered vertices custom tolerance value.                                     |
| [`ShowLegend`](#Graphics.ShowLegend)                                      | Displays the legend.                                                                    |
| [`ShowTriad`](#Graphics.ShowTriad)                                        | Displays the triad.                                                                     |
| [`ShowRuler`](#Graphics.ShowRuler)                                        | Displays the ruler.                                                                     |
| [`ShowResultVectors`](#Graphics.ShowResultVectors)                        | Displays the result vectors.                                                            |
| [`ShowRemotePointConnections`](#Graphics.ShowRemotePointConnections)      | Displays the Remote Point Connections.                                                  |
| [`DisplayGraphOverlay`](#Graphics.DisplayGraphOverlay)                    | Display Graph overlay in the current viewport.                                          |

<a id="id39"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import ViewOptions
```

<a id="id40"></a>

## Property detail

<a id="id41"></a>

### *property* Graphics.VectorDisplay *: [Ansys.Mechanical.Graphics.VectorDisplay](VectorDisplay.md#VectorDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

VectorDisplay property.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* Graphics.ResultPreference *: [Ansys.Mechanical.Graphics.ResultPreference](ResultPreference.md#ResultPreference) | [None](https://docs.python.org/3/library/constants.html#None)*

ResultPreference property.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* Graphics.AnnotationPreferences *: [Ansys.Mechanical.Graphics.AnnotationPreferences](AnnotationPreferences.md#AnnotationPreferences) | [None](https://docs.python.org/3/library/constants.html#None)*

AnnotationPreferences property.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowShellThickness"></a>

### *property* Graphics.ShowShellThickness *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the thickness of shells.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowBeamThickness"></a>

### *property* Graphics.ShowBeamThickness *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the thickness of beams.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowSPHExpansion"></a>

### *property* Graphics.ShowSPHExpansion *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the expansion for SPH elements.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowMesh"></a>

### *property* Graphics.ShowMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Display the model’s mesh.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowRandomColors"></a>

### *property* Graphics.ShowRandomColors *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Sets random colors for each object of the application.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowVertices"></a>

### *property* Graphics.ShowVertices *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Display all the vertices of the model.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowClusteredVertices"></a>

### *property* Graphics.ShowClusteredVertices *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays all closely clustered vertices of the model.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowEdgeDirection"></a>

### *property* Graphics.ShowEdgeDirection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the edge direction arrow.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowMeshConnection"></a>

### *property* Graphics.ShowMeshConnection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays edge connection using a color scheme based on the mesh connection information.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowThickEdgeScoping"></a>

### *property* Graphics.ShowThickEdgeScoping *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Thicken the display of edge scoping.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ModelDisplay"></a>

### *property* Graphics.ModelDisplay *: [Ansys.Mechanical.DataModel.Enums.ModelDisplay](../DataModel/Enums/ModelDisplay.md#ModelDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the model display option.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ModelColoring"></a>

### *property* Graphics.ModelColoring *: [Ansys.Mechanical.DataModel.Enums.ModelColoring](../DataModel/Enums/ModelColoring.md#ModelColoring) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the Model display Coloring.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowCoordinateSystems"></a>

### *property* Graphics.ShowCoordinateSystems *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays all coordinate system defined.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ClusteredVertexTolerance"></a>

### *property* Graphics.ClusteredVertexTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Sets the clustered vertices custom tolerance value.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowLegend"></a>

### *property* Graphics.ShowLegend *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the legend.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowTriad"></a>

### *property* Graphics.ShowTriad *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the triad.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowRuler"></a>

### *property* Graphics.ShowRuler *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the ruler.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowResultVectors"></a>

### *property* Graphics.ShowResultVectors *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the result vectors.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ShowRemotePointConnections"></a>

### *property* Graphics.ShowRemotePointConnections *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Displays the Remote Point Connections.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.DisplayGraphOverlay"></a>

### *property* Graphics.DisplayGraphOverlay *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Display Graph overlay in the current viewport.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

## Method detail

<a id="Graphics.RescaleAnnotations"></a>

### Graphics.RescaleAnnotations()

Rescale size of annotation following a zoom in or zoom out of the model.

<!-- !! processed by numpydoc !! -->
