# `SpotWeldGroup`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.SpotWeldGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SpotWeldGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------|-----------------------------------------------------------------------------------|
| `AddSpotWeldConnection`       | Creates a new child SpotWeldConnection.                                           |
| `ExportToFile`                | Exports all spot welds to user selected path.                                     |
| `GenerateSpotWeldConnections` | Generate spot welds provided in the Weld input file.                              |
| `GetChildren`                 | Gets the list of children, filtered by type.                                      |
| `GetChildren`                 | Gets the list of children, filtered by type.                                      |
| `AddComment`                  | Creates a new child Comment.                                                      |
| `AddImage`                    | Creates a new child Image.                                                        |
| `Activate`                    | Activate the current object.                                                      |
| `CopyTo`                      | Copies all visible properties from this object to another.                        |
| `Duplicate`                   | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`     | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`         | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`              | Get a property by its unique name.                                                |
| `PropertyByAPIName`           | Get a property by its API name.                                                   |
| `CreateParameter`             | Creates a new parameter for a Property.                                           |
| `GetParameter`                | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Material`                | Gets or sets the Material.                                    |
| `NumConnections`          | Gets the NumConnections.                                      |
| `NumberOfLayers`          | Gets or sets the NumberOfLayers.                              |
| `NumWeldPoints`           | Gets the NumWeldPoints.                                       |
| `SpotWeldFileName`        | Gets or sets the SpotWeldFileName.                            |
| `AngleTolerance`          | Gets or sets the AngleTolerance.                              |
| `PenetrationTolerance`    | Gets or sets the PenetrationTolerance.                        |
| `SnapToEdgeTolerance`     | Gets or sets the SnapToEdgeTolerance.                         |
| `WeldRadius`              | Gets or sets the WeldRadius.                                  |
| `WeldSearchDistance`      | Gets or sets the WeldSearchDistance.                          |
| `ChildrenCreationMethod`  | Gets or sets the ChildrenCreationMethod.                      |
| `ConnectionBehavior`      | Gets or sets the ConnectionBehavior.                          |
| `Units`                   | Gets or sets the Units.                                       |
| `WeldType`                | Gets or sets the WeldType.                                    |
| `StiffnessBehavior`       | Gets or sets the StiffnessBehavior.                           |
| `ShellThicknessEffect`    | Gets or sets the ShellThicknessEffect.                        |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Images`                  | Gets the list of associated images.                           |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* SpotWeldGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpotWeldGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.NumConnections *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumConnections.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.NumWeldPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumWeldPoints.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.SpotWeldFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpotWeldFileName.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.AngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTolerance.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.PenetrationTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.SnapToEdgeTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToEdgeTolerance.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.WeldRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldRadius.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.WeldSearchDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldSearchDistance.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.ChildrenCreationMethod *: [Ansys.Mechanical.DataModel.Enums.ConnectionCreationMethod](../../../../Mechanical/DataModel/Enums/ConnectionCreationMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConnectionCreationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChildrenCreationMethod.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.Units *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Units.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.WeldType *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../Mechanical/DataModel/Enums/SpotWeldTypes.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpotWeldTypes) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldType.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.ShellThicknessEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### SpotWeldGroup.AddSpotWeldConnection()

Creates a new child SpotWeldConnection.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.ExportToFile(filePath: System.String)

Exports all spot welds to user selected path.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.GenerateSpotWeldConnections()

Generate spot welds provided in the Weld input file.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SpotWeldGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

