# `BoundaryConditionsGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditionsGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditionsGroup(internalObject: Any)

<a id="BoundaryConditionsGroup"></a>

### *class* BoundaryConditionsGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

The BoundaryConditionsGroup is used to reference global boundary conditions that can be used in multiple Analyses.
: Use the helper Ansys.ACT.Mechanical.AnalysesSelection to get and set the status for global boundary conditions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#BoundaryConditionsGroup.Activate)                                   | Activate the current object.                                                                |
| [`AddAxialForce`](#BoundaryConditionsGroup.AddAxialForce)                         | Returns a Axial Force object created under the Boundary Conditions Group.                   |
| [`AddBoltPretension`](#BoundaryConditionsGroup.AddBoltPretension)                 | Returns a Bolt Pretension object created under the Boundary Conditions Group.               |
| [`AddPressure`](#BoundaryConditionsGroup.AddPressure)                             | Returns a Pressure object created under the Boundary Conditions Group.                      |
| [`AddTorsionalMoment`](#BoundaryConditionsGroup.AddTorsionalMoment)               | Returns a Torsional Moment object created under the Boundary Conditions Group.              |
| [`AddVectorLoad`](#BoundaryConditionsGroup.AddVectorLoad)                         | Returns a Vector Load object created under the Boundary Conditions Group.                   |
| [`Copy`](#BoundaryConditionsGroup.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#BoundaryConditionsGroup.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#BoundaryConditionsGroup.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#BoundaryConditionsGroup.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#BoundaryConditionsGroup.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#BoundaryConditionsGroup.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#BoundaryConditionsGroup.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#BoundaryConditionsGroup.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#BoundaryConditionsGroup.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetDetailsView`](#BoundaryConditionsGroup.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#BoundaryConditionsGroup.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#BoundaryConditionsGroup.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#BoundaryConditionsGroup.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#BoundaryConditionsGroup.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#BoundaryConditionsGroup.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#BoundaryConditionsGroup.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#BoundaryConditionsGroup.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#BoundaryConditionsGroup.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#BoundaryConditionsGroup.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#BoundaryConditionsGroup.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#BoundaryConditionsGroup.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#BoundaryConditionsGroup.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#BoundaryConditionsGroup.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#BoundaryConditionsGroup.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#BoundaryConditionsGroup.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#BoundaryConditionsGroup.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#BoundaryConditionsGroup.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteBoundaryConditions`](#BoundaryConditionsGroup.PromoteBoundaryConditions) | PromoteBoundaryConditions method.                                                           |
| [`PropertyByAPIName`](#BoundaryConditionsGroup.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#BoundaryConditionsGroup.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#BoundaryConditionsGroup.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#BoundaryConditionsGroup.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#BoundaryConditionsGroup.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#BoundaryConditionsGroup.AttachedRefs)                       | AttachedRefs property.                                                                                           |
| [`Children`](#BoundaryConditionsGroup.Children)                               | Gets the list of children.                                                                                       |
| [`ClsId`](#BoundaryConditionsGroup.ClsId)                                     | ClsId property.                                                                                                  |
| [`DataModelObjectCategory`](#BoundaryConditionsGroup.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                     |
| [`GroupingFolder`](#BoundaryConditionsGroup.GroupingFolder)                   | GroupingFolder property.                                                                                         |
| [`IconName`](#BoundaryConditionsGroup.IconName)                               | IconName property.                                                                                               |
| [`InternalObject`](#BoundaryConditionsGroup.InternalObject)                   | Gets the internal object. For advanced usage only.                                                               |
| [`Name`](#BoundaryConditionsGroup.Name)                                       | Name property.                                                                                                   |
| [`NumberOfSteps`](#BoundaryConditionsGroup.NumberOfSteps)                     | Number of Steps are needed for Bolt Pretensions. The ones created in the environment depend on Analysis Setting. |
| [`ObjectId`](#BoundaryConditionsGroup.ObjectId)                               | ObjectId property.                                                                                               |
| [`ObjectState`](#BoundaryConditionsGroup.ObjectState)                         | ObjectState property.                                                                                            |
| [`ObjectTags`](#BoundaryConditionsGroup.ObjectTags)                           | ObjectTags property.                                                                                             |
| [`Parent`](#BoundaryConditionsGroup.Parent)                                   | Parent property.                                                                                                 |
| [`Properties`](#BoundaryConditionsGroup.Properties)                           | Gets the list of properties for this object.                                                                     |
| [`State`](#BoundaryConditionsGroup.State)                                     | State property.                                                                                                  |
| [`VisibleProperties`](#BoundaryConditionsGroup.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                    |

<a id="property-detail"></a>

## Property detail

<a id="BoundaryConditionsGroup.AttachedRefs"></a>

### *property* BoundaryConditionsGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.Children"></a>

### *property* BoundaryConditionsGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.ClsId"></a>

### *property* BoundaryConditionsGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.DataModelObjectCategory"></a>

### *property* BoundaryConditionsGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GroupingFolder"></a>

### *property* BoundaryConditionsGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.IconName"></a>

### *property* BoundaryConditionsGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.InternalObject"></a>

### *property* BoundaryConditionsGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGlobalBoundaryConditionsAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.Name"></a>

### *property* BoundaryConditionsGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.NumberOfSteps"></a>

### *property* BoundaryConditionsGroup.NumberOfSteps *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Number of Steps are needed for Bolt Pretensions. The ones created in the environment depend on Analysis Setting.
: Since the Global Bolt Pretension is a generic object, this number should be setup first before creating the Bolt Pretension.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.ObjectId"></a>

### *property* BoundaryConditionsGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.ObjectState"></a>

### *property* BoundaryConditionsGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.ObjectTags"></a>

### *property* BoundaryConditionsGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.Parent"></a>

### *property* BoundaryConditionsGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.Properties"></a>

### *property* BoundaryConditionsGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.State"></a>

### *property* BoundaryConditionsGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.VisibleProperties"></a>

### *property* BoundaryConditionsGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoundaryConditionsGroup.Activate"></a>

### BoundaryConditionsGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.AddAxialForce"></a>

### BoundaryConditionsGroup.AddAxialForce() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AxialForce](BoundaryConditions/AxialForce.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AxialForce)

Returns a Axial Force object created under the Boundary Conditions Group.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.AddBoltPretension"></a>

### BoundaryConditionsGroup.AddBoltPretension(initialStepCount: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension](BoundaryConditions/BoltPretension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension)

```text
Returns a Bolt Pretension object created under the Boundary Conditions Group.
    The initialStepCount will be used to setup the tabular data row count when creating the bolt pretension.
```

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.AddPressure"></a>

### BoundaryConditionsGroup.AddPressure(initialDataPointsCount: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Pressure](BoundaryConditions/Pressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Pressure)

```text
Returns a Pressure object created under the Boundary Conditions Group.
    The initial data points count will create a pressure load with the step count mentioned in the argument
```

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.AddTorsionalMoment"></a>

### BoundaryConditionsGroup.AddTorsionalMoment() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.TorsionalMoment](BoundaryConditions/TorsionalMoment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.TorsionalMoment)

Returns a Torsional Moment object created under the Boundary Conditions Group.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.AddVectorLoad"></a>

### BoundaryConditionsGroup.AddVectorLoad() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.VectorLoad](BoundaryConditions/VectorLoad.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VectorLoad)

Returns a Vector Load object created under the Boundary Conditions Group.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.Copy"></a>

### BoundaryConditionsGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.CopyTo"></a>

### BoundaryConditionsGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.CreateObjRef"></a>

### BoundaryConditionsGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.CreateParameter"></a>

### BoundaryConditionsGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.Cut"></a>

### BoundaryConditionsGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.Duplicate"></a>

### BoundaryConditionsGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.Equals"></a>

### BoundaryConditionsGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetAPIName"></a>

### BoundaryConditionsGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetAllProperties"></a>

### BoundaryConditionsGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetDetailsView"></a>

### BoundaryConditionsGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetEnumName"></a>

### BoundaryConditionsGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetHashCode"></a>

### BoundaryConditionsGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetIconFile"></a>

### BoundaryConditionsGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetLifetimeService"></a>

### BoundaryConditionsGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetObjectData"></a>

### BoundaryConditionsGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetParameter"></a>

### BoundaryConditionsGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetPath"></a>

### BoundaryConditionsGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetPropertyName"></a>

### BoundaryConditionsGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetPropertyValue"></a>

### BoundaryConditionsGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetVisibleProperties"></a>

### BoundaryConditionsGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GetVisiblePropertyNames"></a>

### BoundaryConditionsGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GroupAllSimilarChildren"></a>

### BoundaryConditionsGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.GroupSimilarObjects"></a>

### BoundaryConditionsGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.InitializeLifetimeService"></a>

### BoundaryConditionsGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.IsPropertyEditable"></a>

### BoundaryConditionsGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BoundaryConditionsGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.IsPropertyVisible"></a>

### BoundaryConditionsGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BoundaryConditionsGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.Paste"></a>

### BoundaryConditionsGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.PromoteBoundaryConditions"></a>

### BoundaryConditionsGroup.PromoteBoundaryConditions(objsToMove: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

PromoteBoundaryConditions method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.PropertyByAPIName"></a>

### BoundaryConditionsGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.PropertyById"></a>

### BoundaryConditionsGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.PropertyByName"></a>

### BoundaryConditionsGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.RemoveFromGroup"></a>

### BoundaryConditionsGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BoundaryConditionsGroup.RemoveParameter"></a>

### BoundaryConditionsGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

