# `PartTransform`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.PartTransform"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PartTransform

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PartTransform.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PartTransform.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PartTransform.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PartTransform.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PartTransform.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PartTransform.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PartTransform.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PartTransform.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PartTransform.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PartTransform.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PartTransform.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PartTransform.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PartTransform.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PartTransform.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PartTransform.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PartTransform.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`TransformGeometry`](#PartTransform.TransformGeometry)             | TransformGeometry method.                                                         |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PartTransform.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PartTransform.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#PartTransform.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#PartTransform.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#PartTransform.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`Figures`](#PartTransform.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PartTransform.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PartTransform.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PartTransform.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#PartTransform.Properties)                           | Gets the list of properties for this object.                  |
| [`RotationX`](#PartTransform.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#PartTransform.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#PartTransform.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`ScopingMethod`](#PartTransform.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`SourceCoordinateSystem`](#PartTransform.SourceCoordinateSystem)   | Gets or sets the SourceCoordinateSystem.                      |
| [`Suppressed`](#PartTransform.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TargetCoordinateSystem`](#PartTransform.TargetCoordinateSystem)   | Gets or sets the TargetCoordinateSystem.                      |
| [`TranslationX`](#PartTransform.TranslationX)                       | Gets or sets the TranslationX.                                |
| [`TranslationY`](#PartTransform.TranslationY)                       | Gets or sets the TranslationY.                                |
| [`TranslationZ`](#PartTransform.TranslationZ)                       | Gets or sets the TranslationZ.                                |
| [`VisibleProperties`](#PartTransform.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PartTransform.Children"></a>

### *property* PartTransform.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Comments"></a>

### *property* PartTransform.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CoordinateSystem"></a>

### *property* PartTransform.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.DataModelObjectCategory"></a>

### *property* PartTransform.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.DefineBy"></a>

### *property* PartTransform.DefineBy *: [Ansys.Mechanical.DataModel.Enums.PartTransformationDefinitionType](../../../Mechanical/DataModel/Enums/PartTransformationDefinitionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PartTransformationDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Figures"></a>

### *property* PartTransform.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Images"></a>

### *property* PartTransform.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.InternalObject"></a>

### *property* PartTransform.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPartTransformAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Location"></a>

### *property* PartTransform.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Properties"></a>

### *property* PartTransform.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

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

<a id="PartTransform.ScopingMethod"></a>

### *property* PartTransform.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.SourceCoordinateSystem"></a>

### *property* PartTransform.SourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Suppressed"></a>

### *property* PartTransform.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TargetCoordinateSystem"></a>

### *property* PartTransform.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCoordinateSystem.

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

<a id="PartTransform.VisibleProperties"></a>

### *property* PartTransform.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PartTransform.Activate"></a>

### PartTransform.Activate()

Activate the current object.

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

### PartTransform.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CopyTo"></a>

### PartTransform.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CreateParameter"></a>

### PartTransform.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Delete"></a>

### PartTransform.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Duplicate"></a>

### PartTransform.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetChildren"></a>

### PartTransform.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GetParameter"></a>

### PartTransform.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GroupAllSimilarChildren"></a>

### PartTransform.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.GroupSimilarObjects"></a>

### PartTransform.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.PropertyByAPIName"></a>

### PartTransform.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.PropertyByName"></a>

### PartTransform.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.RemoveParameter"></a>

### PartTransform.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TransformGeometry"></a>

### PartTransform.TransformGeometry()

TransformGeometry method.

<!-- !! processed by numpydoc !! -->

