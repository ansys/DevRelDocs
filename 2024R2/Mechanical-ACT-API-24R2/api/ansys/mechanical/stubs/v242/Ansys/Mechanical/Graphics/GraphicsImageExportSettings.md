# `GraphicsImageExportSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.GraphicsImageExportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

GraphicsImageExportSettings class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`CurrentGraphicsDisplay`](#GraphicsImageExportSettings.CurrentGraphicsDisplay)   | Specifies whether to use the current graphics display settings. Defaults to true.                                                                                                                                                                                                       |
| [`AppendGraph`](#GraphicsImageExportSettings.AppendGraph)                         | Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.                                                                                                                                                                                             |
| [`Resolution`](#GraphicsImageExportSettings.Resolution)                           | Specifies the resolution type. Defaults to NormalResolution.                                                                                                                                                                                                                            |
| [`Capture`](#GraphicsImageExportSettings.Capture)                                 | Specifies what to include in the capture. Defaults to ImageAndLegend.                                                                                                                                                                                                                   |
| [`Background`](#GraphicsImageExportSettings.Background)                           | Specifies the background color. Defaults to GraphicsAppearanceSetting.                                                                                                                                                                                                                  |
| [`FontMagnification`](#GraphicsImageExportSettings.FontMagnification)             | Specifies the font magnification factor. Defaults to 1.0.                                                                                                                                                                                                                               |
| [`Width`](#GraphicsImageExportSettings.Width)                                     | Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.  |
| [`Height`](#GraphicsImageExportSettings.Height)                                   | Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property. |

<a id="property-detail"></a>

## Property detail

<a id="GraphicsImageExportSettings.CurrentGraphicsDisplay"></a>

### *property* GraphicsImageExportSettings.CurrentGraphicsDisplay *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to use the current graphics display settings. Defaults to true.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsImageExportSettings.AppendGraph"></a>

### *property* GraphicsImageExportSettings.AppendGraph *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsImageExportSettings.Resolution"></a>

### *property* GraphicsImageExportSettings.Resolution *: [Ansys.Mechanical.DataModel.Enums.GraphicsResolutionType](../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsResolutionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsResolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the resolution type. Defaults to NormalResolution.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsImageExportSettings.Capture"></a>

### *property* GraphicsImageExportSettings.Capture *: [Ansys.Mechanical.DataModel.Enums.GraphicsCaptureType](../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsCaptureType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsCaptureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies what to include in the capture. Defaults to ImageAndLegend.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsImageExportSettings.Background"></a>

### *property* GraphicsImageExportSettings.Background *: [Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType](../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsBackgroundType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the background color. Defaults to GraphicsAppearanceSetting.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsImageExportSettings.FontMagnification"></a>

### *property* GraphicsImageExportSettings.FontMagnification *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the font magnification factor. Defaults to 1.0.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsImageExportSettings.Width"></a>

### *property* GraphicsImageExportSettings.Width *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsImageExportSettings.Height"></a>

### *property* GraphicsImageExportSettings.Height *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

