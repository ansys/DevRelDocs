<a id="module-ansys.mechanical.stubs.Ansys.ACT.Common"></a>

<a id="the-common-package"></a>

# The `Common` package

<a id="summary"></a>

## Summary

### Subpackages

| Name | Summary |
|-------------------------------------------------------------------------------------------|------------------------|
| [`Graphics`](Graphics/index.md#module-ansys.mechanical.stubs.Ansys.ACT.Common.Graphics)   | Graphics subpackage.   |

### Classes

| Name | Summary |
|------------------------------------------------------------|--------------------------------------------------------------------|
| [`BrowserQt`](BrowserQt.md#BrowserQt)                      | BrowserQt class.                                                   |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem) | CoordinateSystem class                                             |
| [`SimpleTransform`](SimpleTransform.md#SimpleTransform)    | Exposes simple getters and setters for rigid body transformations. |

<a id="description"></a>

## Description

Common subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Common.BrowserQt"></a>

### *class* Common.BrowserQt

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> BrowserQt class.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------------------------------------|------------------------------------|
| [`Dispose`](#Common.Dispose)                                       | Dispose method.                    |
| [`FindParentWindow`](#Common.FindParentWindow)                     | FindParentWindow method.           |
| [`FindParentDialog`](#Common.FindParentDialog)                     | FindParentDialog method.           |
| [`FindTopMostParentControl`](#Common.FindTopMostParentControl)     | FindTopMostParentControl method.   |
| [`Focus`](#Common.Focus)                                           | Focus method.                      |
| [`SendToBack`](#Common.SendToBack)                                 | SendToBack method.                 |
| [`BringToFront`](#Common.BringToFront)                             | BringToFront method.               |
| [`Show`](#Common.Show)                                             | Show method.                       |
| [`Hide`](#Common.Hide)                                             | Hide method.                       |
| [`GetPreferredSize`](#Common.GetPreferredSize)                     | GetPreferredSize method.           |
| [`GetPreferredHeightForWidth`](#Common.GetPreferredHeightForWidth) | GetPreferredHeightForWidth method. |
| [`Invalidate`](#id0)                                               | Invalidate method.                 |
| [`Invalidate`](#id0)                                               | Invalidate method.                 |
| [`Update`](#Common.Update)                                         | Update method.                     |
| [`Refresh`](#id1)                                                  | Refresh method.                    |
| [`Refresh`](#id1)                                                  | Refresh method.                    |
| [`Invoke`](#Common.Invoke)                                         | Invoke method.                     |
| [`BeginInvoke`](#Common.BeginInvoke)                               | BeginInvoke method.                |
| [`EndInvoke`](#Common.EndInvoke)                                   | EndInvoke method.                  |

### Properties

| Name | Summary |
|----------------------------------------------|---------------------------|
| [`Tag`](#Common.Tag)                         | Tag property.             |
| [`InvokeRequired`](#Common.InvokeRequired)   | InvokeRequired property.  |
| [`Parent`](#Common.Parent)                   | Parent property.          |
| [`Enabled`](#Common.Enabled)                 | Enabled property.         |
| [`Visible`](#Common.Visible)                 | Visible property.         |
| [`Cursor`](#Common.Cursor)                   | Cursor property.          |
| [`Controls`](#Common.Controls)               | Controls property.        |
| [`Font`](#Common.Font)                       | Font property.            |
| [`BackColor`](#Common.BackColor)             | BackColor property.       |
| [`ForeColor`](#Common.ForeColor)             | ForeColor property.       |
| [`Focused`](#Common.Focused)                 | Focused property.         |
| [`IsMouseCaptured`](#Common.IsMouseCaptured) | IsMouseCaptured property. |
| [`Width`](#Common.Width)                     | Width property.           |
| [`Height`](#Common.Height)                   | Height property.          |
| [`Size`](#Common.Size)                       | Size property.            |
| [`Left`](#Common.Left)                       | Left property.            |
| [`Top`](#Common.Top)                         | Top property.             |
| [`Location`](#Common.Location)               | Location property.        |
| [`Bounds`](#Common.Bounds)                   | Bounds property.          |
| [`Margins`](#Common.Margins)                 | Margins property.         |
| [`PreferredSize`](#Common.PreferredSize)     | PreferredSize property.   |
| [`MinimumSize`](#Common.MinimumSize)         | MinimumSize property.     |
| [`MaximumSize`](#Common.MaximumSize)         | MaximumSize property.     |
| [`Name`](#id4)                               | Name property.            |
| [`ToolTipText`](#Common.ToolTipText)         | ToolTipText property.     |
| [`IsDisposed`](#Common.IsDisposed)           | IsDisposed property.      |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common import BrowserQt
```

<a id="property-detail"></a>

## Property detail

<a id="Common.Tag"></a>

### *property* Common.Tag *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Tag property.

<!-- !! processed by numpydoc !! -->

<a id="Common.InvokeRequired"></a>

### *property* Common.InvokeRequired *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

InvokeRequired property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Parent"></a>

### *property* Common.Parent *: Ansys.UI.Toolkit.Control | [None](https://docs.python.org/3/library/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Enabled"></a>

### *property* Common.Enabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Enabled property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Visible"></a>

### *property* Common.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Visible property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Cursor"></a>

### *property* Common.Cursor *: Ansys.UI.Toolkit.Cursor | [None](https://docs.python.org/3/library/constants.html#None)*

Cursor property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Controls"></a>

### *property* Common.Controls *: Ansys.UI.Toolkit.ControlCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Controls property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Font"></a>

### *property* Common.Font *: Ansys.UI.Toolkit.Drawing.Font | [None](https://docs.python.org/3/library/constants.html#None)*

Font property.

<!-- !! processed by numpydoc !! -->

<a id="Common.BackColor"></a>

### *property* Common.BackColor *: Ansys.Utilities.Color | [None](https://docs.python.org/3/library/constants.html#None)*

BackColor property.

<!-- !! processed by numpydoc !! -->

<a id="Common.ForeColor"></a>

### *property* Common.ForeColor *: Ansys.Utilities.Color | [None](https://docs.python.org/3/library/constants.html#None)*

ForeColor property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Focused"></a>

### *property* Common.Focused *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Focused property.

<!-- !! processed by numpydoc !! -->

<a id="Common.IsMouseCaptured"></a>

### *property* Common.IsMouseCaptured *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsMouseCaptured property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Width"></a>

### *property* Common.Width *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Width property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Height"></a>

### *property* Common.Height *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Height property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Size"></a>

### *property* Common.Size *: Ansys.UI.Toolkit.Drawing.Size | [None](https://docs.python.org/3/library/constants.html#None)*

Size property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Left"></a>

### *property* Common.Left *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Left property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Top"></a>

### *property* Common.Top *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Top property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Location"></a>

### *property* Common.Location *: Ansys.UI.Toolkit.Drawing.Point | [None](https://docs.python.org/3/library/constants.html#None)*

Location property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Bounds"></a>

### *property* Common.Bounds *: Ansys.UI.Toolkit.Drawing.Rectangle | [None](https://docs.python.org/3/library/constants.html#None)*

Bounds property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Margins"></a>

### *property* Common.Margins *: Ansys.UI.Toolkit.Padding | [None](https://docs.python.org/3/library/constants.html#None)*

Margins property.

<!-- !! processed by numpydoc !! -->

<a id="Common.PreferredSize"></a>

### *property* Common.PreferredSize *: Ansys.UI.Toolkit.Drawing.Size | [None](https://docs.python.org/3/library/constants.html#None)*

PreferredSize property.

<!-- !! processed by numpydoc !! -->

<a id="Common.MinimumSize"></a>

### *property* Common.MinimumSize *: Ansys.UI.Toolkit.Drawing.Size | [None](https://docs.python.org/3/library/constants.html#None)*

MinimumSize property.

<!-- !! processed by numpydoc !! -->

<a id="Common.MaximumSize"></a>

### *property* Common.MaximumSize *: Ansys.UI.Toolkit.Drawing.Size | [None](https://docs.python.org/3/library/constants.html#None)*

MaximumSize property.

<!-- !! processed by numpydoc !! -->

<a id="Common.Name"></a>

### *property* Common.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Common.ToolTipText"></a>

### *property* Common.ToolTipText *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

ToolTipText property.

<!-- !! processed by numpydoc !! -->

<a id="Common.IsDisposed"></a>

### *property* Common.IsDisposed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsDisposed property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Common.Dispose"></a>

### Common.Dispose()

Dispose method.

<!-- !! processed by numpydoc !! -->

<a id="Common.FindParentWindow"></a>

### Common.FindParentWindow()

FindParentWindow method.

<!-- !! processed by numpydoc !! -->

<a id="Common.FindParentDialog"></a>

### Common.FindParentDialog()

FindParentDialog method.

<!-- !! processed by numpydoc !! -->

<a id="Common.FindTopMostParentControl"></a>

### Common.FindTopMostParentControl()

FindTopMostParentControl method.

<!-- !! processed by numpydoc !! -->

<a id="Common.Focus"></a>

### Common.Focus()

Focus method.

<!-- !! processed by numpydoc !! -->

<a id="Common.SendToBack"></a>

### Common.SendToBack()

SendToBack method.

<!-- !! processed by numpydoc !! -->

<a id="Common.BringToFront"></a>

### Common.BringToFront()

BringToFront method.

<!-- !! processed by numpydoc !! -->

<a id="Common.Show"></a>

### Common.Show()

Show method.

<!-- !! processed by numpydoc !! -->

<a id="Common.Hide"></a>

### Common.Hide()

Hide method.

<!-- !! processed by numpydoc !! -->

<a id="Common.GetPreferredSize"></a>

### Common.GetPreferredSize()

GetPreferredSize method.

<!-- !! processed by numpydoc !! -->

<a id="Common.GetPreferredHeightForWidth"></a>

### Common.GetPreferredHeightForWidth(width: System.Int32)

GetPreferredHeightForWidth method.

<!-- !! processed by numpydoc !! -->

<a id="Common.Invalidate"></a>

### Common.Invalidate()

Invalidate method.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### Common.Invalidate(rectangle: Ansys.UI.Toolkit.Drawing.Rectangle)

Invalidate method.

<!-- !! processed by numpydoc !! -->

<a id="Common.Update"></a>

### Common.Update()

Update method.

<!-- !! processed by numpydoc !! -->

<a id="Common.Refresh"></a>

### Common.Refresh()

Refresh method.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Common.Refresh(rectangle: Ansys.UI.Toolkit.Drawing.Rectangle)

Refresh method.

<!-- !! processed by numpydoc !! -->

<a id="Common.Invoke"></a>

### Common.Invoke(method: System.Delegate, args: System.Object)

Invoke method.

<!-- !! processed by numpydoc !! -->

<a id="Common.BeginInvoke"></a>

### Common.BeginInvoke(method: System.Delegate, args: System.Object)

BeginInvoke method.

<!-- !! processed by numpydoc !! -->

<a id="Common.EndInvoke"></a>

### Common.EndInvoke(asyncResult: System.IAsyncResult)

EndInvoke method.

<!-- !! processed by numpydoc !! -->

<a id="Common.CoordinateSystem"></a>

### *class* Common.CoordinateSystem

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> CoordinateSystem class

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|-----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`CoordinateSystemType`](../../Mechanical/DataModel/Enums/CoordinateSystemType.md#CoordinateSystemType)   | Gets or sets the coordinate system type.                     |
| [`Name`](#id4)                                                                                            | Gets or sets the name of the coordinate system.              |
| [`Id`](#Common.Id)                                                                                        | Gets or sets the ID of the coordinate system.                |
| [`Origin`](#Common.Origin)                                                                                | Gets or sets the origin of the coordinate system.            |
| [`Matrix`](#Common.Matrix)                                                                                | Gets or sets the matrix definition of the coordinate system. |
| [`XAxis`](#id7)                                                                                           | Gets or sets the X axis of the coordinate system.            |
| [`YAxis`](#id8)                                                                                           | Gets or sets the Y axis of the coordinate system.            |
| [`ZAxis`](#id9)                                                                                           | Gets or sets the Z axis of the coordinate system.            |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common import CoordinateSystem
```

<a id="id3"></a>

## Property detail

<a id="Common.CoordinateSystemType"></a>

### *property* Common.CoordinateSystemType *: Ansys.ACT.Interfaces.Analysis.CoordinateSystemTypeEnum | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the coordinate system type.

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### *property* Common.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="Common.Id"></a>

### *property* Common.Id *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ID of the coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="Common.Origin"></a>

### *property* Common.Origin *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin of the coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="Common.Matrix"></a>

### *property* Common.Matrix *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the matrix definition of the coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="Common.XAxis"></a>

### *property* Common.XAxis *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the X axis of the coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="Common.YAxis"></a>

### *property* Common.YAxis *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y axis of the coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="Common.ZAxis"></a>

### *property* Common.ZAxis *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Z axis of the coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="Common.SimpleTransform"></a>

### *class* Common.SimpleTransform

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Exposes simple getters and setters for rigid body transformations.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|----------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`TransformationMatrix`](#Common.TransformationMatrix)   | TransformationMatrix property.                                                    |
| [`IsOrthonormal`](#Common.IsOrthonormal)                 | Returns true if the provided axis vectors are all normalized and orthogonal.      |
| [`Translation`](#Common.Translation)                     | The translation of the transformation with respect to the global/world coordinate |
| [`XAxis`](#id7)                                          | The X-axis orientation of the transformation with respect to the global/world     |
| [`YAxis`](#id8)                                          | The Y-axis orientation of the transformation with respect to the global/world     |
| [`ZAxis`](#id9)                                          | The X-axis orientation of the transformation with respect to the global/world     |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common import SimpleTransform
```

<a id="id6"></a>

## Property detail

<a id="Common.TransformationMatrix"></a>

### *property* Common.TransformationMatrix *: [Ansys.Mechanical.DataModel.Utilities.RigidBodyTransformationMatrix](../../Mechanical/DataModel/Utilities/RigidBodyTransformationMatrix.md#RigidBodyTransformationMatrix) | [None](https://docs.python.org/3/library/constants.html#None)*

TransformationMatrix property.

<!-- !! processed by numpydoc !! -->

<a id="Common.IsOrthonormal"></a>

### *property* Common.IsOrthonormal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Returns true if the provided axis vectors are all normalized and orthogonal.

<!-- !! processed by numpydoc !! -->

<a id="Common.Translation"></a>

### *property* Common.Translation *: Ansys.ACT.Core.Math.Point3D | [None](https://docs.python.org/3/library/constants.html#None)*

The translation of the transformation with respect to the global/world coordinate
system.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* Common.XAxis *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The X-axis orientation of the transformation with respect to the global/world
coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* Common.YAxis *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The Y-axis orientation of the transformation with respect to the global/world
coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* Common.ZAxis *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The X-axis orientation of the transformation with respect to the global/world
coordinate system.

<!-- !! processed by numpydoc !! -->
