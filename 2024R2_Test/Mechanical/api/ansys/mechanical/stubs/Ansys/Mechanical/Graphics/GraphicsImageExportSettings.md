# GraphicsImageExportSettings

### *class* GraphicsImageExportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> GraphicsImageExportSettings class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Properties

| [`CurrentGraphicsDisplay`](#GraphicsImageExportSettings.CurrentGraphicsDisplay)   | Specifies whether to use the current graphics display settings. Defaults to true.                                                                                                                                                                                                       |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AppendGraph`](#GraphicsImageExportSettings.AppendGraph)                         | Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.                                                                                                                                                                                             |
| [`Resolution`](#GraphicsImageExportSettings.Resolution)                           | Specifies the resolution type. Defaults to NormalResolution.                                                                                                                                                                                                                            |
| [`Capture`](#GraphicsImageExportSettings.Capture)                                 | Specifies what to include in the capture. Defaults to ImageAndLegend.                                                                                                                                                                                                                   |
| [`Background`](#GraphicsImageExportSettings.Background)                           | Specifies the background color. Defaults to GraphicsAppearanceSetting.                                                                                                                                                                                                                  |
| [`FontMagnification`](#GraphicsImageExportSettings.FontMagnification)             | Specifies the font magnification factor. Defaults to 1.0.                                                                                                                                                                                                                               |
| [`Width`](#GraphicsImageExportSettings.Width)                                     | Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.  |
| [`Height`](#GraphicsImageExportSettings.Height)                                   | Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import GraphicsImageExportSettings
```

## Property detail

### *property* GraphicsImageExportSettings.CurrentGraphicsDisplay *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to use the current graphics display settings. Defaults to true.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsImageExportSettings.AppendGraph *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsImageExportSettings.Resolution *: [Ansys.Mechanical.DataModel.Enums.GraphicsResolutionType](../DataModel/Enums/GraphicsResolutionType.md#GraphicsResolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the resolution type. Defaults to NormalResolution.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsImageExportSettings.Capture *: [Ansys.Mechanical.DataModel.Enums.GraphicsCaptureType](../DataModel/Enums/GraphicsCaptureType.md#GraphicsCaptureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies what to include in the capture. Defaults to ImageAndLegend.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsImageExportSettings.Background *: [Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType](../DataModel/Enums/GraphicsBackgroundType.md#GraphicsBackgroundType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the background color. Defaults to GraphicsAppearanceSetting.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsImageExportSettings.FontMagnification *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the font magnification factor. Defaults to 1.0.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsImageExportSettings.Width *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

### *property* GraphicsImageExportSettings.Height *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension’s ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->
