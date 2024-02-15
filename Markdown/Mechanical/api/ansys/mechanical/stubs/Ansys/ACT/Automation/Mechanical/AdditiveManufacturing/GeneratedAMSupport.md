# GeneratedAMSupport

### *class* GeneratedAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeneratedAMSupport.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#GeneratedAMSupport.ClearGeneratedData)                                           | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateSupportBodies`](#GeneratedAMSupport.GenerateSupportBodies)                                     | Generate Support Bodies.                                                          |
| [`CreateNamedSelectionOfGeneratedElements`](#GeneratedAMSupport.CreateNamedSelectionOfGeneratedElements) | Run the PromoteToNamedSelection action.                                           |
| [`GetGeneratedBody`](#GeneratedAMSupport.GetGeneratedBody)                                               | Returns the generated body object                                                 |
| [`AddCommandSnippet`](#GeneratedAMSupport.AddCommandSnippet)                                             | Creates a new CommandSnippet                                                      |
| [`Delete`](#GeneratedAMSupport.Delete)                                                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GeneratedAMSupport.AddComment)                                                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeneratedAMSupport.AddFigure)                                                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeneratedAMSupport.AddImage)                                                               | Creates a new child Image.                                                        |
| [`Activate`](#GeneratedAMSupport.Activate)                                                               | Activate the current object.                                                      |
| [`CopyTo`](#GeneratedAMSupport.CopyTo)                                                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GeneratedAMSupport.Duplicate)                                                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GeneratedAMSupport.GroupAllSimilarChildren)                                 | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeneratedAMSupport.GroupSimilarObjects)                                         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GeneratedAMSupport.PropertyByName)                                                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GeneratedAMSupport.PropertyByAPIName)                                             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GeneratedAMSupport.CreateParameter)                                                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GeneratedAMSupport.GetParameter)                                                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GeneratedAMSupport.RemoveParameter)                                                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Mode`](#GeneratedAMSupport.Mode)                                                                                     | Gets or sets the Mode.                                        |
| [`Location`](#GeneratedAMSupport.Location)                                                                             | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ThermalConductivityMultipleInX`](#GeneratedAMSupport.ThermalConductivityMultipleInX)                                 | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#GeneratedAMSupport.ThermalConductivityMultipleInY)                                 | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#GeneratedAMSupport.ThermalConductivityMultipleInZ)                                 | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](#GeneratedAMSupport.DensityMultiple)                                                               | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](#GeneratedAMSupport.MaterialMultiplier)                                                         | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](#GeneratedAMSupport.ElasticModulusMultipleInX)                                           | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#GeneratedAMSupport.ElasticModulusMultipleInY)                                           | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#GeneratedAMSupport.ElasticModulusMultipleInZ)                                           | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](#GeneratedAMSupport.ShearModulusMultipleInXY)                                             | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#GeneratedAMSupport.ShearModulusMultipleInXZ)                                             | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#GeneratedAMSupport.ShearModulusMultipleInYZ)                                             | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](#GeneratedAMSupport.WallSpacing)                                                                       | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#GeneratedAMSupport.WallThickness)                                                                   | Gets or sets the WallThickness.                               |
| [`Volume`](../Results/Volume.md#Volume)                                                                                | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](#GeneratedAMSupport.MultiplierEntry)                                                               | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](#GeneratedAMSupport.SupportType)                                                                       | Gets or sets the SupportType.                                 |
| [`Children`](#GeneratedAMSupport.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#GeneratedAMSupport.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#GeneratedAMSupport.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#GeneratedAMSupport.Images)                                                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GeneratedAMSupport.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GeneratedAMSupport.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import GeneratedAMSupport
```

## Property detail

### *property* GeneratedAMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Mode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### GeneratedAMSupport.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.GenerateSupportBodies(progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#Progress))

Generate Support Bodies.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.CreateNamedSelectionOfGeneratedElements()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.GetGeneratedBody()

Returns the generated body object

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
