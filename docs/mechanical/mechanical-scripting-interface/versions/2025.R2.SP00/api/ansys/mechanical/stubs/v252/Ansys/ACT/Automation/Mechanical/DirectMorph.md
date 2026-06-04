# `DirectMorph`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.DirectMorph"></a>

#### *class* Ansys.ACT.Automation.Mechanical.DirectMorph

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectMorph.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#DirectMorph.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectMorph.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#DirectMorph.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#DirectMorph.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#DirectMorph.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#DirectMorph.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#DirectMorph.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#DirectMorph.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectMorph.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#DirectMorph.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#DirectMorph.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#DirectMorph.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [`Children`](#DirectMorph.Children)                               | Gets the list of children.                                                                                                     |
| [`DataModelObjectCategory`](#DirectMorph.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                   |
| [`DisplacementFile`](#DirectMorph.DisplacementFile)               | Gets or sets the DisplacementFile.                                                                                             |
| [`InternalObject`](#DirectMorph.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                             |
| [`Location`](#DirectMorph.Location)                               | Gets or sets the Location.                                                                                                     |
| [`MorphDefinition`](#DirectMorph.MorphDefinition)                 | Defines whether the Morphing is done based on the specified Displacement File or the outcome of a Mesh Workflow Morphing step. |
| [`Properties`](#DirectMorph.Properties)                           | Gets the list of properties for this object.                                                                                   |
| [`ScaleFactor`](#DirectMorph.ScaleFactor)                         | Gets or sets the ScaleFactor.                                                                                                  |
| [`Suppressed`](#DirectMorph.Suppressed)                           | Gets or sets the Suppressed.                                                                                                   |
| [`TrackWorkflowStep`](#DirectMorph.TrackWorkflowStep)             | Specifies whether to track changes to the Morph field file of the specified Mesh Workflow Morphing step.                       |
| [`VisibleProperties`](#DirectMorph.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                  |
| [`WorkflowMorphStep`](#DirectMorph.WorkflowMorphStep)             | Gets or sets the object ID of the Mesh Workflow Morphing step that the Morph Control is based on.                              |

<a id="property-detail"></a>

## Property detail

<a id="DirectMorph.Children"></a>

### *property* DirectMorph.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.DataModelObjectCategory"></a>

### *property* DirectMorph.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.DisplacementFile"></a>

### *property* DirectMorph.DisplacementFile *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementFile.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.InternalObject"></a>

### *property* DirectMorph.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDirectMorphAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Location"></a>

### *property* DirectMorph.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.MorphDefinition"></a>

### *property* DirectMorph.MorphDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MorphControl.MorphDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MorphControl/MorphDefinitionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MorphControl.MorphDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines whether the Morphing is done based on the specified Displacement File or the outcome of a Mesh Workflow Morphing step.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Properties"></a>

### *property* DirectMorph.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.ScaleFactor"></a>

### *property* DirectMorph.ScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Suppressed"></a>

### *property* DirectMorph.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.TrackWorkflowStep"></a>

### *property* DirectMorph.TrackWorkflowStep *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies whether to track changes to the Morph field file of the specified Mesh Workflow Morphing step.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.VisibleProperties"></a>

### *property* DirectMorph.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.WorkflowMorphStep"></a>

### *property* DirectMorph.WorkflowMorphStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the object ID of the Mesh Workflow Morphing step that the Morph Control is based on.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectMorph.Activate"></a>

### DirectMorph.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.CopyTo"></a>

### DirectMorph.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.CreateParameter"></a>

### DirectMorph.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Delete"></a>

### DirectMorph.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Duplicate"></a>

### DirectMorph.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetChildren"></a>

### DirectMorph.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetParameter"></a>

### DirectMorph.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GroupAllSimilarChildren"></a>

### DirectMorph.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GroupSimilarObjects"></a>

### DirectMorph.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.PropertyByAPIName"></a>

### DirectMorph.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.PropertyByName"></a>

### DirectMorph.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.RemoveParameter"></a>

### DirectMorph.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

