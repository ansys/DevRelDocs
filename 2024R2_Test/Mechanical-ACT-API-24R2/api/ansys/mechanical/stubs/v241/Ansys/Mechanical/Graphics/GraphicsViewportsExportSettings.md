# `GraphicsViewportsExportSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Settings object to control Graphics.ExportViewports behavior.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `BorderStyle`            | Specifies which borders to add, if any, to the exported viewports image.                                                                                                                                                                                                                |
| `CurrentGraphicsDisplay` | Specifies whether to use the current graphics display settings. Defaults to true.                                                                                                                                                                                                       |
| `AppendGraph`            | Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.                                                                                                                                                                                             |
| `Resolution`             | Specifies the resolution type. Defaults to NormalResolution.                                                                                                                                                                                                                            |
| `Capture`                | Specifies what to include in the capture. Defaults to ImageAndLegend.                                                                                                                                                                                                                   |
| `Background`             | Specifies the background color. Defaults to GraphicsAppearanceSetting.                                                                                                                                                                                                                  |
| `FontMagnification`      | Specifies the font magnification factor. Defaults to 1.0.                                                                                                                                                                                                                               |
| `Width`                  | Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.  |
| `Height`                 | Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property. |

<a id="property-detail"></a>

## Property detail

### *property* GraphicsViewportsExportSettings.BorderStyle *: [Ansys.Mechanical.DataModel.Enums.GraphicsViewportsExportBorderStyle](../DataModel/Enums/GraphicsViewportsExportBorderStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsViewportsExportBorderStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies which borders to add, if any, to the exported viewports image.
Border style enum values can be combined via bitwise-or ( | ).
Defaults to None.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsViewportsExportSettings.CurrentGraphicsDisplay *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to use the current graphics display settings. Defaults to true.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsViewportsExportSettings.AppendGraph *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsViewportsExportSettings.Resolution *: [Ansys.Mechanical.DataModel.Enums.GraphicsResolutionType](../DataModel/Enums/GraphicsResolutionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsResolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the resolution type. Defaults to NormalResolution.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsViewportsExportSettings.Capture *: [Ansys.Mechanical.DataModel.Enums.GraphicsCaptureType](../DataModel/Enums/GraphicsCaptureType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsCaptureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies what to include in the capture. Defaults to ImageAndLegend.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsViewportsExportSettings.Background *: [Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType](../DataModel/Enums/GraphicsBackgroundType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the background color. Defaults to GraphicsAppearanceSetting.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsViewportsExportSettings.FontMagnification *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the font magnification factor. Defaults to 1.0.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsViewportsExportSettings.Width *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsViewportsExportSettings.Height *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

