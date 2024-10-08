# `SpotWeldGroup`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.SpotWeldGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.SpotWeldGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SpotWeldGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SpotWeldGroup.Activate)                                       | Activate the current object.                                                      |
| [`AddComment`](#SpotWeldGroup.AddComment)                                   | Creates a new child Comment.                                                      |
| [`AddImage`](#SpotWeldGroup.AddImage)                                       | Creates a new child Image.                                                        |
| [`AddSpotWeldConnection`](#SpotWeldGroup.AddSpotWeldConnection)             | Creates a new child SpotWeldConnection.                                           |
| [`CopyTo`](#SpotWeldGroup.CopyTo)                                           | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SpotWeldGroup.CreateParameter)                         | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#SpotWeldGroup.Duplicate)                                     | Creates a copy of the current DataModelObject.                                    |
| [`ExportToFile`](#SpotWeldGroup.ExportToFile)                               | Exports all spot welds to user selected path.                                     |
| [`GenerateSpotWeldConnections`](#SpotWeldGroup.GenerateSpotWeldConnections) | Generate spot welds provided in the Weld input file.                              |
| [`GetChildren`](#SpotWeldGroup.GetChildren)                                 | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SpotWeldGroup.GetParameter)                               | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SpotWeldGroup.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SpotWeldGroup.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#SpotWeldGroup.PropertyByAPIName)                     | Get a property by its API name.                                                   |
| [`PropertyByName`](#SpotWeldGroup.PropertyByName)                           | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SpotWeldGroup.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AngleTolerance`](#SpotWeldGroup.AngleTolerance)                   | Gets or sets the AngleTolerance.                              |
| [`Children`](#SpotWeldGroup.Children)                               | Gets the list of children.                                    |
| [`ChildrenCreationMethod`](#SpotWeldGroup.ChildrenCreationMethod)   | Gets or sets the ChildrenCreationMethod.                      |
| [`Comments`](#SpotWeldGroup.Comments)                               | Gets the list of associated comments.                         |
| [`ConnectionBehavior`](#SpotWeldGroup.ConnectionBehavior)           | Gets or sets the ConnectionBehavior.                          |
| [`DataModelObjectCategory`](#SpotWeldGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#SpotWeldGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#SpotWeldGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Material`](#SpotWeldGroup.Material)                               | Gets or sets the Material.                                    |
| [`NumConnections`](#SpotWeldGroup.NumConnections)                   | Gets the NumConnections.                                      |
| [`NumWeldPoints`](#SpotWeldGroup.NumWeldPoints)                     | Gets the NumWeldPoints.                                       |
| [`NumberOfLayers`](#SpotWeldGroup.NumberOfLayers)                   | Gets or sets the NumberOfLayers.                              |
| [`PenetrationTolerance`](#SpotWeldGroup.PenetrationTolerance)       | Gets or sets the PenetrationTolerance.                        |
| [`Properties`](#SpotWeldGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SpotWeldGroup.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ShellThicknessEffect`](#SpotWeldGroup.ShellThicknessEffect)       | Gets or sets the ShellThicknessEffect.                        |
| [`SnapToEdgeTolerance`](#SpotWeldGroup.SnapToEdgeTolerance)         | Gets or sets the SnapToEdgeTolerance.                         |
| [`SpotWeldFileName`](#SpotWeldGroup.SpotWeldFileName)               | Gets or sets the SpotWeldFileName.                            |
| [`StiffnessBehavior`](#SpotWeldGroup.StiffnessBehavior)             | Gets or sets the StiffnessBehavior.                           |
| [`Units`](#SpotWeldGroup.Units)                                     | Gets or sets the Units.                                       |
| [`VisibleProperties`](#SpotWeldGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`WeldRadius`](#SpotWeldGroup.WeldRadius)                           | Gets or sets the WeldRadius.                                  |
| [`WeldSearchDistance`](#SpotWeldGroup.WeldSearchDistance)           | Gets or sets the WeldSearchDistance.                          |
| [`WeldType`](#SpotWeldGroup.WeldType)                               | Gets or sets the WeldType.                                    |

<a id="property-detail"></a>

## Property detail

<a id="SpotWeldGroup.AngleTolerance"></a>

### *property* SpotWeldGroup.AngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Children"></a>

### *property* SpotWeldGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ChildrenCreationMethod"></a>

### *property* SpotWeldGroup.ChildrenCreationMethod *: [Ansys.Mechanical.DataModel.Enums.ConnectionCreationMethod](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ConnectionCreationMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ConnectionCreationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChildrenCreationMethod.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Comments"></a>

### *property* SpotWeldGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ConnectionBehavior"></a>

### *property* SpotWeldGroup.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.DataModelObjectCategory"></a>

### *property* SpotWeldGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Images"></a>

### *property* SpotWeldGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.InternalObject"></a>

### *property* SpotWeldGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpotWeldGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Material"></a>

### *property* SpotWeldGroup.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.NumConnections"></a>

### *property* SpotWeldGroup.NumConnections *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumConnections.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.NumWeldPoints"></a>

### *property* SpotWeldGroup.NumWeldPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumWeldPoints.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.NumberOfLayers"></a>

### *property* SpotWeldGroup.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.PenetrationTolerance"></a>

### *property* SpotWeldGroup.PenetrationTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Properties"></a>

### *property* SpotWeldGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ReadOnly"></a>

### *property* SpotWeldGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ShellThicknessEffect"></a>

### *property* SpotWeldGroup.ShellThicknessEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.SnapToEdgeTolerance"></a>

### *property* SpotWeldGroup.SnapToEdgeTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToEdgeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.SpotWeldFileName"></a>

### *property* SpotWeldGroup.SpotWeldFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpotWeldFileName.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.StiffnessBehavior"></a>

### *property* SpotWeldGroup.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Units"></a>

### *property* SpotWeldGroup.Units *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Units.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.VisibleProperties"></a>

### *property* SpotWeldGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.WeldRadius"></a>

### *property* SpotWeldGroup.WeldRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldRadius.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.WeldSearchDistance"></a>

### *property* SpotWeldGroup.WeldSearchDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldSearchDistance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.WeldType"></a>

### *property* SpotWeldGroup.WeldType *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SpotWeldTypes.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SpotWeldTypes) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldType.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SpotWeldGroup.Activate"></a>

### SpotWeldGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.AddComment"></a>

### SpotWeldGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.AddImage"></a>

### SpotWeldGroup.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.AddSpotWeldConnection"></a>

### SpotWeldGroup.AddSpotWeldConnection()

Creates a new child SpotWeldConnection.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.CopyTo"></a>

### SpotWeldGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.CreateParameter"></a>

### SpotWeldGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.Duplicate"></a>

### SpotWeldGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.ExportToFile"></a>

### SpotWeldGroup.ExportToFile(filePath: System.String)

Exports all spot welds to user selected path.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GenerateSpotWeldConnections"></a>

### SpotWeldGroup.GenerateSpotWeldConnections()

Generate spot welds provided in the Weld input file.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetChildren"></a>

### SpotWeldGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GetParameter"></a>

### SpotWeldGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GroupAllSimilarChildren"></a>

### SpotWeldGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.GroupSimilarObjects"></a>

### SpotWeldGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.PropertyByAPIName"></a>

### SpotWeldGroup.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.PropertyByName"></a>

### SpotWeldGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldGroup.RemoveParameter"></a>

### SpotWeldGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

