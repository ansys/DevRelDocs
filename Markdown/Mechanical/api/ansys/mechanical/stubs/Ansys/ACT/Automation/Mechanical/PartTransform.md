# PartTransform

### *class* PartTransform

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PartTransform.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`TransformGeometry`](#PartTransform.TransformGeometry)             | TransformGeometry method.                                                         |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RotationX`](#PartTransform.RotationX)                                                                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#PartTransform.RotationY)                                                                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#PartTransform.RotationZ)                                                                             | Gets or sets the RotationZ.                                   |
| [`TranslationX`](#PartTransform.TranslationX)                                                                       | Gets or sets the TranslationX.                                |
| [`TranslationY`](#PartTransform.TranslationY)                                                                       | Gets or sets the TranslationY.                                |
| [`TranslationZ`](#PartTransform.TranslationZ)                                                                       | Gets or sets the TranslationZ.                                |
| [`DefineBy`](#PartTransform.DefineBy)                                                                               | Gets or sets the DefineBy.                                    |
| [`ScopingMethod`](#PartTransform.ScopingMethod)                                                                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#PartTransform.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`SourceCoordinateSystem`](#PartTransform.SourceCoordinateSystem)                                                   | Gets or sets the SourceCoordinateSystem.                      |
| [`TargetCoordinateSystem`](#PartTransform.TargetCoordinateSystem)                                                   | Gets or sets the TargetCoordinateSystem.                      |
| [`Location`](#PartTransform.Location)                                                                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#PartTransform.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#PartTransform.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#PartTransform.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#PartTransform.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PartTransform.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PartTransform.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PartTransform
```

## Property detail

### *property* PartTransform.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPartTransformAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.RotationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.RotationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.RotationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.TranslationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.TranslationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.TranslationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.DefineBy *: [Ansys.Mechanical.DataModel.Enums.PartTransformationDefinitionType](../../../Mechanical/DataModel/Enums/PartTransformationDefinitionType.md#PartTransformationDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.SourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PartTransform.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PartTransform.TransformGeometry()

TransformGeometry method.

<!-- !! processed by numpydoc !! -->

### PartTransform.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PartTransform.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PartTransform.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PartTransform.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PartTransform.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PartTransform.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PartTransform.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PartTransform.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PartTransform.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PartTransform.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PartTransform.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PartTransform.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PartTransform.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PartTransform.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PartTransform.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PartTransform.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
