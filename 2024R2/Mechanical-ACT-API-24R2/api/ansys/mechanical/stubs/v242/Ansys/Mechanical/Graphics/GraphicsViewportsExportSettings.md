# `GraphicsViewportsExportSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Settings object to control Graphics.ExportViewports behavior.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BorderStyle`](#GraphicsViewportsExportSettings.BorderStyle)                       | Specifies which borders to add, if any, to the exported viewports image.                                                                                                                                                                                                                |
| [`CurrentGraphicsDisplay`](#GraphicsViewportsExportSettings.CurrentGraphicsDisplay) | Specifies whether to use the current graphics display settings. Defaults to true.                                                                                                                                                                                                       |
| [`AppendGraph`](#GraphicsViewportsExportSettings.AppendGraph)                       | Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.                                                                                                                                                                                             |
| [`Resolution`](#GraphicsViewportsExportSettings.Resolution)                         | Specifies the resolution type. Defaults to NormalResolution.                                                                                                                                                                                                                            |
| [`Capture`](#GraphicsViewportsExportSettings.Capture)                               | Specifies what to include in the capture. Defaults to ImageAndLegend.                                                                                                                                                                                                                   |
| [`Background`](#GraphicsViewportsExportSettings.Background)                         | Specifies the background color. Defaults to GraphicsAppearanceSetting.                                                                                                                                                                                                                  |
| [`FontMagnification`](#GraphicsViewportsExportSettings.FontMagnification)           | Specifies the font magnification factor. Defaults to 1.0.                                                                                                                                                                                                                               |
| [`Width`](#GraphicsViewportsExportSettings.Width)                                   | Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.  |
| [`Height`](#GraphicsViewportsExportSettings.Height)                                 | Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property. |

<a id="property-detail"></a>

## Property detail

<a id="GraphicsViewportsExportSettings.BorderStyle"></a>

### *property* GraphicsViewportsExportSettings.BorderStyle *: [Ansys.Mechanical.DataModel.Enums.GraphicsViewportsExportBorderStyle](../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsViewportsExportBorderStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsViewportsExportBorderStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies which borders to add, if any, to the exported viewports image.
Border style enum values can be combined via bitwise-or ( | ).
Defaults to None.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsViewportsExportSettings.CurrentGraphicsDisplay"></a>

### *property* GraphicsViewportsExportSettings.CurrentGraphicsDisplay *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to use the current graphics display settings. Defaults to true.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsViewportsExportSettings.AppendGraph"></a>

### *property* GraphicsViewportsExportSettings.AppendGraph *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to append the viewport graph(s) to the exported image. Defaults to false.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsViewportsExportSettings.Resolution"></a>

### *property* GraphicsViewportsExportSettings.Resolution *: [Ansys.Mechanical.DataModel.Enums.GraphicsResolutionType](../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsResolutionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsResolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the resolution type. Defaults to NormalResolution.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsViewportsExportSettings.Capture"></a>

### *property* GraphicsViewportsExportSettings.Capture *: [Ansys.Mechanical.DataModel.Enums.GraphicsCaptureType](../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsCaptureType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsCaptureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies what to include in the capture. Defaults to ImageAndLegend.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsViewportsExportSettings.Background"></a>

### *property* GraphicsViewportsExportSettings.Background *: [Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType](../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsBackgroundType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsBackgroundType) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the background color. Defaults to GraphicsAppearanceSetting.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsViewportsExportSettings.FontMagnification"></a>

### *property* GraphicsViewportsExportSettings.FontMagnification *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the font magnification factor. Defaults to 1.0.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsViewportsExportSettings.Width"></a>

### *property* GraphicsViewportsExportSettings.Width *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image width. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

<a id="GraphicsViewportsExportSettings.Height"></a>

### *property* GraphicsViewportsExportSettings.Height *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the image height. Defaults to 0. If width AND height are zero, this uses the current dimensions. If only one of the two are nonzero, the current dimension's ratio is used along with the nonzero of the two properties to determine the computed value of the zero property.

<!-- !! processed by numpydoc !! -->

