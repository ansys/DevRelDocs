# PartTransform

<a id="PartTransform"></a>

### *class* PartTransform

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PartTransform.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`TransformGeometry`](#PartTransform.TransformGeometry)             | TransformGeometry method.                                                         |
| [`Delete`](#PartTransform.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PartTransform.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PartTransform.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PartTransform.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PartTransform.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PartTransform.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PartTransform.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PartTransform.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PartTransform.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PartTransform.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PartTransform.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PartTransform.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PartTransform.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PartTransform.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`RotationX`](#PartTransform.RotationX)                                                                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#PartTransform.RotationY)                                                                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#PartTransform.RotationZ)                                                                             | Gets or sets the RotationZ.                                   |
| [`TranslationX`](#PartTransform.TranslationX)                                                                       | Gets or sets the TranslationX.                                |
| [`TranslationY`](#PartTransform.TranslationY)                                                                       | Gets or sets the TranslationY.                                |
| [`TranslationZ`](#PartTransform.TranslationZ)                                                                       | Gets or sets the TranslationZ.                                |
| [`DefineBy`](#PartTransform.DefineBy)                                                                               | Gets or sets the DefineBy.                                    |
| [`ScopingMethod`](#PartTransform.ScopingMethod)                                                                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#PartTransform.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](./../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`SourceCoordinateSystem`](#PartTransform.SourceCoordinateSystem)                                                   | Gets or sets the SourceCoordinateSystem.                      |
| [`TargetCoordinateSystem`](#PartTransform.TargetCoordinateSystem)                                                   | Gets or sets the TargetCoordinateSystem.                      |
| [`Location`](#PartTransform.Location)                                                                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#PartTransform.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#PartTransform.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#PartTransform.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#PartTransform.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PartTransform.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PartTransform.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PartTransform
```

<a id="property-detail"></a>

## Property detail

<a id="PartTransform.InternalObject"></a>

### *property* PartTransform.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPartTransformAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RotationX"></a>

### *property* PartTransform.RotationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RotationY"></a>

### *property* PartTransform.RotationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RotationZ"></a>

### *property* PartTransform.RotationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TranslationX"></a>

### *property* PartTransform.TranslationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TranslationY"></a>

### *property* PartTransform.TranslationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TranslationZ"></a>

### *property* PartTransform.TranslationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.DefineBy"></a>

### *property* PartTransform.DefineBy *: [Ansys.Mechanical.DataModel.Enums.PartTransformationDefinitionType](./../../../Mechanical/DataModel/Enums/PartTransformationDefinitionType.md#PartTransformationDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.ScopingMethod"></a>

### *property* PartTransform.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Suppressed"></a>

### *property* PartTransform.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CoordinateSystem"></a>

### *property* PartTransform.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.SourceCoordinateSystem"></a>

### *property* PartTransform.SourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TargetCoordinateSystem"></a>

### *property* PartTransform.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Location"></a>

### *property* PartTransform.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.DataModelObjectCategory"></a>

### *property* PartTransform.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Children"></a>

### *property* PartTransform.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Comments"></a>

### *property* PartTransform.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Figures"></a>

### *property* PartTransform.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Images"></a>

### *property* PartTransform.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PartTransform.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Properties"></a>

### *property* PartTransform.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.VisibleProperties"></a>

### *property* PartTransform.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PartTransform.TransformGeometry"></a>

### PartTransform.TransformGeometry()

TransformGeometry method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Delete"></a>

### PartTransform.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetChildren"></a>

### PartTransform.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PartTransform.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.AddComment"></a>

### PartTransform.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.AddFigure"></a>

### PartTransform.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.AddImage"></a>

### PartTransform.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Activate"></a>

### PartTransform.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CopyTo"></a>

### PartTransform.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Duplicate"></a>

### PartTransform.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GroupAllSimilarChildren"></a>

### PartTransform.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GroupSimilarObjects"></a>

### PartTransform.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.PropertyByName"></a>

### PartTransform.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.PropertyByAPIName"></a>

### PartTransform.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CreateParameter"></a>

### PartTransform.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetParameter"></a>

### PartTransform.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RemoveParameter"></a>

### PartTransform.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
