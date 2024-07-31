# `PartTransform`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PartTransform

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PartTransform.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`TransformGeometry`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.TransformGeometry)             | TransformGeometry method.                                                         |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`RotationX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`TranslationX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.TranslationX)                       | Gets or sets the TranslationX.                                |
| [`TranslationY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.TranslationY)                       | Gets or sets the TranslationY.                                |
| [`TranslationZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.TranslationZ)                       | Gets or sets the TranslationZ.                                |
| [`DefineBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`ScopingMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`SourceCoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.SourceCoordinateSystem)   | Gets or sets the SourceCoordinateSystem.                      |
| [`TargetCoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.TargetCoordinateSystem)   | Gets or sets the TargetCoordinateSystem.                      |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PartTransform.md#PartTransform.VisibleProperties)             | Gets the list of properties that are visible for this object. |

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

### *property* PartTransform.DefineBy *: [Ansys.Mechanical.DataModel.Enums.PartTransformationDefinitionType](../../../Mechanical/DataModel/Enums/PartTransformationDefinitionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PartTransformationDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.ScopingMethod"></a>

### *property* PartTransform.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Suppressed"></a>

### *property* PartTransform.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.CoordinateSystem"></a>

### *property* PartTransform.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.SourceCoordinateSystem"></a>

### *property* PartTransform.SourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.TargetCoordinateSystem"></a>

### *property* PartTransform.TargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Location"></a>

### *property* PartTransform.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.DataModelObjectCategory"></a>

### *property* PartTransform.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Children"></a>

### *property* PartTransform.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Comments"></a>

### *property* PartTransform.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Figures"></a>

### *property* PartTransform.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PartTransform.Images"></a>

### *property* PartTransform.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### PartTransform.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

