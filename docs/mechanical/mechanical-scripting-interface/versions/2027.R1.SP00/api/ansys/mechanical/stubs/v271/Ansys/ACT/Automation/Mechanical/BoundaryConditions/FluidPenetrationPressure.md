# `FluidPenetrationPressure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidPenetrationPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidPenetrationPressure(internalObject: Any)

<a id="FluidPenetrationPressure"></a>

### *class* FluidPenetrationPressure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A class for fluid penetration pressure object in Mechanical. This load object is used to simulate surrounding fluid or air penetrating into the contact interface.
: Users can apply this load to flexible-to-flexible or rigid-to-flexible contact pairs. This load object is available for static structural analysis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FluidPenetrationPressure.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FluidPenetrationPressure.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#FluidPenetrationPressure.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FluidPenetrationPressure.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FluidPenetrationPressure.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FluidPenetrationPressure.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FluidPenetrationPressure.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FluidPenetrationPressure.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FluidPenetrationPressure.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FluidPenetrationPressure.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FluidPenetrationPressure.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FluidPenetrationPressure.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#FluidPenetrationPressure.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#FluidPenetrationPressure.GetActivateAtLoadStep)         | Gets whether the fluid penetration pressure is active at the specified load step.           |
| [`GetAllProperties`](#FluidPenetrationPressure.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FluidPenetrationPressure.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FluidPenetrationPressure.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FluidPenetrationPressure.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FluidPenetrationPressure.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FluidPenetrationPressure.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FluidPenetrationPressure.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FluidPenetrationPressure.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FluidPenetrationPressure.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FluidPenetrationPressure.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FluidPenetrationPressure.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FluidPenetrationPressure.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#FluidPenetrationPressure.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#FluidPenetrationPressure.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FluidPenetrationPressure.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FluidPenetrationPressure.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FluidPenetrationPressure.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FluidPenetrationPressure.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FluidPenetrationPressure.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FluidPenetrationPressure.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FluidPenetrationPressure.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FluidPenetrationPressure.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FluidPenetrationPressure.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FluidPenetrationPressure.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FluidPenetrationPressure.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FluidPenetrationPressure.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FluidPenetrationPressure.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#FluidPenetrationPressure.SetActivateAtLoadStep)         | Sets whether the fluid penetration pressure is active at the specified load step.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#FluidPenetrationPressure.AttachedRefs)                                   | AttachedRefs property.                                                                                              |
| [`Children`](#FluidPenetrationPressure.Children)                                           | Gets the list of children.                                                                                          |
| [`ClsId`](#FluidPenetrationPressure.ClsId)                                                 | ClsId property.                                                                                                     |
| [`Comments`](#FluidPenetrationPressure.Comments)                                           | Gets the list of associated comments.                                                                               |
| [`ContactRegionSelection`](#FluidPenetrationPressure.ContactRegionSelection)               | Gets or sets contact region.                                                                                        |
| [`DataModelObjectCategory`](#FluidPenetrationPressure.DataModelObjectCategory)             | Gets the current DataModelObject's category.                                                                        |
| [`Figures`](#FluidPenetrationPressure.Figures)                                             | Gets the list of associated figures.                                                                                |
| [`GraphControlsXAxis`](#FluidPenetrationPressure.GraphControlsXAxis)                       | Gets or sets the GraphControlsXAxis.                                                                                |
| [`GraphDisplaySelection`](#FluidPenetrationPressure.GraphDisplaySelection)                 | Gets or sets the GraphDisplaySelection which determines which variable to display in graph, Pressure or Criterion.  |
| [`GroupingFolder`](#FluidPenetrationPressure.GroupingFolder)                               | GroupingFolder property.                                                                                            |
| [`IconName`](#FluidPenetrationPressure.IconName)                                           | IconName property.                                                                                                  |
| [`Images`](#FluidPenetrationPressure.Images)                                               | Gets the list of associated images.                                                                                 |
| [`ImportableObjectSourceId`](#FluidPenetrationPressure.ImportableObjectSourceId)           | ImportableObjectSourceId property.                                                                                  |
| [`IndependentVariable`](#FluidPenetrationPressure.IndependentVariable)                     | Gets or set the IndependentVariable.                                                                                |
| [`InternalObject`](#FluidPenetrationPressure.InternalObject)                               | Gets the internal object. For advanced usage only.                                                                  |
| [`Magnitude`](#FluidPenetrationPressure.Magnitude)                                         | Gets the Magnitude.                                                                                                 |
| [`Name`](#FluidPenetrationPressure.Name)                                                   | Name property.                                                                                                      |
| [`NumberOfSegments`](#FluidPenetrationPressure.NumberOfSegments)                           | Gets or sets the NumberofSegments.                                                                                  |
| [`ObjectId`](#FluidPenetrationPressure.ObjectId)                                           | ObjectId property.                                                                                                  |
| [`ObjectState`](#FluidPenetrationPressure.ObjectState)                                     | ObjectState property.                                                                                               |
| [`ObjectTags`](#FluidPenetrationPressure.ObjectTags)                                       | ObjectTags property.                                                                                                |
| [`Parent`](#FluidPenetrationPressure.Parent)                                               | Parent property.                                                                                                    |
| [`PenetrationCriterion`](#FluidPenetrationPressure.PenetrationCriterion)                   | Gets the PenetrationCriterion.                                                                                      |
| [`PenetrationCriterionDefinedBy`](#FluidPenetrationPressure.PenetrationCriterionDefinedBy) | Gets or sets the PenetrationCriterionDefinedBy which determines whether user define the criterion.                  |
| [`PenetrationPathType`](#FluidPenetrationPressure.PenetrationPathType)                     | Gets or sets the PenetrationPathType which determines whether path is history dependent or history independent.     |
| [`Properties`](#FluidPenetrationPressure.Properties)                                       | Gets the list of properties for this object.                                                                        |
| [`ReadOnly`](#FluidPenetrationPressure.ReadOnly)                                           | Gets or sets the ReadOnly.                                                                                          |
| [`SharedRefBody`](#FluidPenetrationPressure.SharedRefBody)                                 | Gets or sets the SharedRefBody.                                                                                     |
| [`StartPointLocation`](#FluidPenetrationPressure.StartPointLocation)                       | Gets or sets the Start Point Location.                                                                              |
| [`StartPointScopingType`](#FluidPenetrationPressure.StartPointScopingType)                 | Gets or set the StartPointScopingType which determines scoping method for stating point.                            |
| [`State`](#FluidPenetrationPressure.State)                                                 | State property.                                                                                                     |
| [`Suppressed`](#FluidPenetrationPressure.Suppressed)                                       | Gets or sets the Suppressed.                                                                                        |
| [`TransferableObjectId`](#FluidPenetrationPressure.TransferableObjectId)                   | TransferableObjectId property.                                                                                      |
| [`UpdatePressureType`](#FluidPenetrationPressure.UpdatePressureType)                       | Gets or sets the UpdatePressureType which determines when to update fluid pressure, each iteration or each substep. |
| [`VisibleProperties`](#FluidPenetrationPressure.VisibleProperties)                         | Gets the list of properties that are visible for this object.                                                       |
| [`XYZFunctionCoordinateSystem`](#FluidPenetrationPressure.XYZFunctionCoordinateSystem)     | Gets or sets the XYZFunctionCoordinateSystem.                                                                       |

<a id="property-detail"></a>

## Property detail

<a id="FluidPenetrationPressure.AttachedRefs"></a>

### *property* FluidPenetrationPressure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Children"></a>

### *property* FluidPenetrationPressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ClsId"></a>

### *property* FluidPenetrationPressure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Comments"></a>

### *property* FluidPenetrationPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ContactRegionSelection"></a>

### *property* FluidPenetrationPressure.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets contact region.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.DataModelObjectCategory"></a>

### *property* FluidPenetrationPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Figures"></a>

### *property* FluidPenetrationPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GraphControlsXAxis"></a>

### *property* FluidPenetrationPressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GraphDisplaySelection"></a>

### *property* FluidPenetrationPressure.GraphDisplaySelection *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.GraphDisplay](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/GraphDisplay.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.GraphDisplay) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphDisplaySelection which determines which variable to display in graph, Pressure or Criterion.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GroupingFolder"></a>

### *property* FluidPenetrationPressure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.IconName"></a>

### *property* FluidPenetrationPressure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Images"></a>

### *property* FluidPenetrationPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ImportableObjectSourceId"></a>

### *property* FluidPenetrationPressure.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.IndependentVariable"></a>

### *property* FluidPenetrationPressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or set the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.InternalObject"></a>

### *property* FluidPenetrationPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Magnitude"></a>

### *property* FluidPenetrationPressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Name"></a>

### *property* FluidPenetrationPressure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.NumberOfSegments"></a>

### *property* FluidPenetrationPressure.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberofSegments.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ObjectId"></a>

### *property* FluidPenetrationPressure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ObjectState"></a>

### *property* FluidPenetrationPressure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ObjectTags"></a>

### *property* FluidPenetrationPressure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Parent"></a>

### *property* FluidPenetrationPressure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PenetrationCriterion"></a>

### *property* FluidPenetrationPressure.PenetrationCriterion *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PenetrationCriterion.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PenetrationCriterionDefinedBy"></a>

### *property* FluidPenetrationPressure.PenetrationCriterionDefinedBy *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.CriterionDefinedByType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/CriterionDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.CriterionDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PenetrationCriterionDefinedBy which determines whether user define the criterion.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PenetrationPathType"></a>

### *property* FluidPenetrationPressure.PenetrationPathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.FluidPathType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/FluidPathType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.FluidPathType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PenetrationPathType which determines whether path is history dependent or history independent.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Properties"></a>

### *property* FluidPenetrationPressure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ReadOnly"></a>

### *property* FluidPenetrationPressure.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.SharedRefBody"></a>

### *property* FluidPenetrationPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.StartPointLocation"></a>

### *property* FluidPenetrationPressure.StartPointLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Start Point Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.StartPointScopingType"></a>

### *property* FluidPenetrationPressure.StartPointScopingType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.StartPointScopingType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/StartPointScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.StartPointScopingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or set the StartPointScopingType which determines scoping method for stating point.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.State"></a>

### *property* FluidPenetrationPressure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Suppressed"></a>

### *property* FluidPenetrationPressure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.TransferableObjectId"></a>

### *property* FluidPenetrationPressure.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.UpdatePressureType"></a>

### *property* FluidPenetrationPressure.UpdatePressureType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.PenetrationPressureUpdateType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/PenetrationPressureUpdateType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.PenetrationPressureUpdateType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UpdatePressureType which determines when to update fluid pressure, each iteration or each substep.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.VisibleProperties"></a>

### *property* FluidPenetrationPressure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.XYZFunctionCoordinateSystem"></a>

### *property* FluidPenetrationPressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidPenetrationPressure.Activate"></a>

### FluidPenetrationPressure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.AddComment"></a>

### FluidPenetrationPressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.AddFigure"></a>

### FluidPenetrationPressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.AddImage"></a>

### FluidPenetrationPressure.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Copy"></a>

### FluidPenetrationPressure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.CopyTo"></a>

### FluidPenetrationPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.CreateObjRef"></a>

### FluidPenetrationPressure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.CreateParameter"></a>

### FluidPenetrationPressure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Cut"></a>

### FluidPenetrationPressure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Delete"></a>

### FluidPenetrationPressure.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Duplicate"></a>

### FluidPenetrationPressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Equals"></a>

### FluidPenetrationPressure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetAPIName"></a>

### FluidPenetrationPressure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetActivateAtLoadStep"></a>

### FluidPenetrationPressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the fluid penetration pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetAllProperties"></a>

### FluidPenetrationPressure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetChildren"></a>

### FluidPenetrationPressure.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FluidPenetrationPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetDetailsView"></a>

### FluidPenetrationPressure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetEnumName"></a>

### FluidPenetrationPressure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetHashCode"></a>

### FluidPenetrationPressure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetIconFile"></a>

### FluidPenetrationPressure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetLifetimeService"></a>

### FluidPenetrationPressure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetObjectData"></a>

### FluidPenetrationPressure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetParameter"></a>

### FluidPenetrationPressure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetPath"></a>

### FluidPenetrationPressure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetPropertyName"></a>

### FluidPenetrationPressure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetPropertyValue"></a>

### FluidPenetrationPressure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetQuantityName"></a>

### FluidPenetrationPressure.GetQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetVisibleProperties"></a>

### FluidPenetrationPressure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetVisiblePropertyNames"></a>

### FluidPenetrationPressure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GroupAllSimilarChildren"></a>

### FluidPenetrationPressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GroupSimilarObjects"></a>

### FluidPenetrationPressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.InitializeLifetimeService"></a>

### FluidPenetrationPressure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.IsPropertyEditable"></a>

### FluidPenetrationPressure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FluidPenetrationPressure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.IsPropertyVisible"></a>

### FluidPenetrationPressure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FluidPenetrationPressure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Paste"></a>

### FluidPenetrationPressure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PromoteToNamedSelection"></a>

### FluidPenetrationPressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PropertyByAPIName"></a>

### FluidPenetrationPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PropertyById"></a>

### FluidPenetrationPressure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PropertyByName"></a>

### FluidPenetrationPressure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.RemoveFromGroup"></a>

### FluidPenetrationPressure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.RemoveParameter"></a>

### FluidPenetrationPressure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.SetActivateAtLoadStep"></a>

### FluidPenetrationPressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the fluid penetration pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

