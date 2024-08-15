# `GeneratedAMSupport`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeneratedAMSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------|-----------------------------------------------------------------------------------|
| `ClearGeneratedData`                      | Run the ClearGeneratedData action.                                                |
| `GenerateSupportBodies`                   | Generate Support Bodies.                                                          |
| `CreateNamedSelectionOfGeneratedElements` | Run the PromoteToNamedSelection action.                                           |
| `GetGeneratedBody`                        | Returns the generated body object                                                 |
| `AddCommandSnippet`                       | Creates a new CommandSnippet                                                      |
| `Delete`                                  | Run the Delete action.                                                            |
| `GetChildren`                             | Gets the list of children, filtered by type.                                      |
| `GetChildren`                             | Gets the list of children, filtered by type.                                      |
| `AddComment`                              | Creates a new child Comment.                                                      |
| `AddFigure`                               | Creates a new child Figure.                                                       |
| `AddImage`                                | Creates a new child Image.                                                        |
| `Activate`                                | Activate the current object.                                                      |
| `CopyTo`                                  | Copies all visible properties from this object to another.                        |
| `Duplicate`                               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`                 | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                          | Get a property by its unique name.                                                |
| `PropertyByAPIName`                       | Get a property by its API name.                                                   |
| `CreateParameter`                         | Creates a new parameter for a Property.                                           |
| `GetParameter`                            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------|---------------------------------------------------------------|
| `InternalObject`                 | Gets the internal object. For advanced usage only.            |
| `Mode`                           | Gets or sets the Mode.                                        |
| `Location`                       | Gets or sets the Location.                                    |
| `DataModelObjectCategory`        | Gets the current DataModelObject's category.                  |
| `ThermalConductivityMultipleInX` | Gets or sets the ThermalConductivityMultipleInX.              |
| `ThermalConductivityMultipleInY` | Gets or sets the ThermalConductivityMultipleInY.              |
| `ThermalConductivityMultipleInZ` | Gets or sets the ThermalConductivityMultipleInZ.              |
| `DensityMultiple`                | Gets or sets the DensityMultiple.                             |
| `MaterialMultiplier`             | Gets or sets the MaterialMultiplier.                          |
| `ElasticModulusMultipleInX`      | Gets or sets the ElasticModulusMultipleInX.                   |
| `ElasticModulusMultipleInY`      | Gets or sets the ElasticModulusMultipleInY.                   |
| `ElasticModulusMultipleInZ`      | Gets or sets the ElasticModulusMultipleInZ.                   |
| `ShearModulusMultipleInXY`       | Gets or sets the ShearModulusMultipleInXY.                    |
| `ShearModulusMultipleInXZ`       | Gets or sets the ShearModulusMultipleInXZ.                    |
| `ShearModulusMultipleInYZ`       | Gets or sets the ShearModulusMultipleInYZ.                    |
| `WallSpacing`                    | Gets or sets the WallSpacing.                                 |
| `WallThickness`                  | Gets or sets the WallThickness.                               |
| `Volume`                         | Gets or sets the Volume.                                      |
| `MultiplierEntry`                | Gets or sets the MultiplierEntry.                             |
| `SupportType`                    | Gets or sets the SupportType.                                 |
| `Children`                       | Gets the list of children.                                    |
| `Comments`                       | Gets the list of associated comments.                         |
| `Figures`                        | Gets the list of associated figures.                          |
| `Images`                         | Gets the list of associated images.                           |
| `InternalObject`                 | Gets the internal object. For advanced usage only.            |
| `Properties`                     | Gets the list of properties for this object.                  |
| `VisibleProperties`              | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* GeneratedAMSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Mode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

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

### *property* GeneratedAMSupport.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMMultiplierEntryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMSupportType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GeneratedAMSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### GeneratedAMSupport.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.GenerateSupportBodies(progress: [Ansys.Mechanical.Application.Progress](../../../../../../v241/Ansys/Mechanical/Application/Progress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.Progress))

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

### GeneratedAMSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GeneratedAMSupport.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

