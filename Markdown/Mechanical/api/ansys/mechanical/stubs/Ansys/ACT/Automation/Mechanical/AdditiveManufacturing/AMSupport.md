# AMSupport

### *class* AMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMSupport.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#AMSupport.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#AMSupport.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AMSupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AMSupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AMSupport.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AMSupport.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AMSupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AMSupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AMSupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMSupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AMSupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AMSupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AMSupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AMSupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AMSupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ThermalConductivityMultipleInX`](#AMSupport.ThermalConductivityMultipleInX)                                          | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#AMSupport.ThermalConductivityMultipleInY)                                          | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#AMSupport.ThermalConductivityMultipleInZ)                                          | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](#AMSupport.DensityMultiple)                                                                        | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](#AMSupport.MaterialMultiplier)                                                                  | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](#AMSupport.ElasticModulusMultipleInX)                                                    | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#AMSupport.ElasticModulusMultipleInY)                                                    | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#AMSupport.ElasticModulusMultipleInZ)                                                    | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](#AMSupport.ShearModulusMultipleInXY)                                                      | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#AMSupport.ShearModulusMultipleInXZ)                                                      | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#AMSupport.ShearModulusMultipleInYZ)                                                      | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](#AMSupport.WallSpacing)                                                                                | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#AMSupport.WallThickness)                                                                            | Gets or sets the WallThickness.                               |
| [`Volume`](../Results/Volume.md#Volume)                                                                                | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](#AMSupport.MultiplierEntry)                                                                        | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](#AMSupport.SupportType)                                                                                | Gets or sets the SupportType.                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#AMSupport.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#AMSupport.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#AMSupport.Figures)                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#AMSupport.Images)                                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AMSupport.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AMSupport.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import AMSupport
```

## Property detail

### *property* AMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AMSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AMSupport.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### AMSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AMSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AMSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AMSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AMSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AMSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AMSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AMSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AMSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AMSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AMSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AMSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AMSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
