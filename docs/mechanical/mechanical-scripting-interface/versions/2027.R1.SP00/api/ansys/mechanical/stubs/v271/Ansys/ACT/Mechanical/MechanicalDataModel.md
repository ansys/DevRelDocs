# `MechanicalDataModel`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.MechanicalDataModel"></a>

#### *class* Ansys.ACT.Mechanical.MechanicalDataModel

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| [`AddSessionVariable`](#MechanicalDataModel.AddSessionVariable)                                       | AddSessionVariable method.                                                                                                             |
| [`AnalysisById`](#MechanicalDataModel.AnalysisById)                                                   | See  for general information about this method.                                                                                        |
| [`AnalysisByName`](#MechanicalDataModel.AnalysisByName)                                               | AnalysisByName method.                                                                                                                 |
| [`AreEqual`](#MechanicalDataModel.AreEqual)                                                           | AreEqual method.                                                                                                                       |
| [`CleanUp`](#MechanicalDataModel.CleanUp)                                                             | CleanUp method.                                                                                                                        |
| [`ComponentById`](#MechanicalDataModel.ComponentById)                                                 | ComponentById method.                                                                                                                  |
| [`CoordinateSystemById`](#MechanicalDataModel.CoordinateSystemById)                                   | CoordinateSystemById method.                                                                                                           |
| [`CreateChild`](#MechanicalDataModel.CreateChild)                                                     | CreateChild method.                                                                                                                    |
| [`CreateObjRef`](#MechanicalDataModel.CreateObjRef)                                                   | CreateObjRef method.                                                                                                                   |
| [`CreateObject`](#MechanicalDataModel.CreateObject)                                                   | CreateObject method.                                                                                                                   |
| [`CreateObjectCommand`](#MechanicalDataModel.CreateObjectCommand)                                     | CreateObjectCommand method.                                                                                                            |
| [`CurrentConsistentUnitFromQuantityName`](#MechanicalDataModel.CurrentConsistentUnitFromQuantityName) | CurrentConsistentUnitFromQuantityName method.                                                                                          |
| [`CurrentUnitFromQuantityName`](#MechanicalDataModel.CurrentUnitFromQuantityName)                     | CurrentUnitFromQuantityName method.                                                                                                    |
| [`Delete`](#MechanicalDataModel.Delete)                                                               | Delete method.                                                                                                                         |
| [`DeleteSessionVariable`](#MechanicalDataModel.DeleteSessionVariable)                                 | DeleteSessionVariable method.                                                                                                          |
| [`DummyNodeRemoveAndFillObjects`](#MechanicalDataModel.DummyNodeRemoveAndFillObjects)                 | DummyNodeRemoveAndFillObjects method.                                                                                                  |
| [`GetLifetimeService`](#MechanicalDataModel.GetLifetimeService)                                       | GetLifetimeService method.                                                                                                             |
| [`GetObjectById`](#MechanicalDataModel.GetObjectById)                                                 | GetObjectById method.                                                                                                                  |
| [`GetObjectsByName`](#MechanicalDataModel.GetObjectsByName)                                           | GetObjectsByName method.                                                                                                               |
| [`GetObjectsByType`](#MechanicalDataModel.GetObjectsByType)                                           | GetObjectsByType method.                                                                                                               |
| [`GetSessionVariableValue`](#MechanicalDataModel.GetSessionVariableValue)                             | GetSessionVariableValue method.                                                                                                        |
| [`GetUserObjectById`](#MechanicalDataModel.GetUserObjectById)                                         | GetUserObjectById method.                                                                                                              |
| [`GetUserObjects`](#MechanicalDataModel.GetUserObjects)                                               | GetUserObjects method.                                                                                                                 |
| [`InitializeLifetimeService`](#MechanicalDataModel.InitializeLifetimeService)                         | InitializeLifetimeService method.                                                                                                      |
| [`MeshDataByName`](#MechanicalDataModel.MeshDataByName)                                               | MeshDataByName method.                                                                                                                 |
| [`RecomputeState`](#MechanicalDataModel.RecomputeState)                                               | Recomputes the states of the data model objects. Best used with data model changes made during callbacks in Python Code or Extensions. |
| [`Redo`](#MechanicalDataModel.Redo)                                                                   | Redo method.                                                                                                                           |
| [`Remove`](#MechanicalDataModel.Remove)                                                               | Remove method.                                                                                                                         |
| [`Suppress`](#MechanicalDataModel.Suppress)                                                           | Suppress method.                                                                                                                       |
| [`Undo`](#MechanicalDataModel.Undo)                                                                   | Undo method.                                                                                                                           |
| [`Unsuppress`](#MechanicalDataModel.Unsuppress)                                                       | Unsuppress method.                                                                                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|-------------------------------|
| [`AnalysisList`](#MechanicalDataModel.AnalysisList)                                    | AnalysisList property.        |
| [`AnalysisNames`](#MechanicalDataModel.AnalysisNames)                                  | AnalysisNames property.       |
| [`Components`](#MechanicalDataModel.Components)                                        | Components property.          |
| [`CoordinateSystems`](#CoordinateSystems) | CoordinateSystems property.   |
| [`DataModelObject`](#MechanicalDataModel.DataModelObject)                              | DataModelObject property.     |
| [`EngineeringData`](#MechanicalDataModel.EngineeringData)                              | EngineeringData property.     |
| [`GeoData`](#MechanicalDataModel.GeoData)                                              | GeoData property.             |
| [`InternalDataObjects`](#MechanicalDataModel.InternalDataObjects)                      | InternalDataObjects property. |
| [`InternalObject`](#MechanicalDataModel.InternalObject)                                | InternalObject property.      |
| [`MeshDataNames`](#MechanicalDataModel.MeshDataNames)                                  | MeshDataNames property.       |
| [`ObjectIdentifier`](#MechanicalDataModel.ObjectIdentifier)                            | ObjectIdentifier property.    |
| [`ObjectLocation`](#MechanicalDataModel.ObjectLocation)                                | ObjectLocation property.      |
| [`ObjectTags`](#MechanicalDataModel.ObjectTags)                                        | ObjectTags property.          |
| [`Parent`](#MechanicalDataModel.Parent)                                                | Parent property.              |
| [`Project`](#Project)                               | Project property.             |
| [`Tree`](#MechanicalDataModel.Tree)                                                    | Tree property.                |
| [`WorkingDir`](#MechanicalDataModel.WorkingDir)                                        | WorkingDir property.          |

<a id="property-detail"></a>

## Property detail

<a id="MechanicalDataModel.AnalysisList"></a>

### *property* MechanicalDataModel.AnalysisList *: List[Ansys.ACT.Interfaces.Analysis.IAnalysis] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisList property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.AnalysisNames"></a>

### *property* MechanicalDataModel.AnalysisNames *: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisNames property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Components"></a>

### *property* MechanicalDataModel.Components *: List[[Ansys.ACT.Interfaces.Mechanical.IMechanicalSelectionInfo](../Interfaces/Mechanical/IMechanicalSelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalSelectionInfo)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Components property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.CoordinateSystems"></a>

### *property* MechanicalDataModel.CoordinateSystems *: Iterable[Ansys.ACT.Interfaces.Analysis.ICoordinateSystem] | [None](https://docs.python.org/3/builtins/constants.html#None)*

CoordinateSystems property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.DataModelObject"></a>

### *property* MechanicalDataModel.DataModelObject *: Ansys.ACT.Interfaces.DataModel.IDataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

DataModelObject property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.EngineeringData"></a>

### *property* MechanicalDataModel.EngineeringData *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

EngineeringData property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.GeoData"></a>

### *property* MechanicalDataModel.GeoData *: Ansys.ACT.Interfaces.Geometry.IGeoData | [None](https://docs.python.org/3/builtins/constants.html#None)*

GeoData property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.InternalDataObjects"></a>

### *property* MechanicalDataModel.InternalDataObjects *: List[Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalDataObjects property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.InternalObject"></a>

### *property* MechanicalDataModel.InternalObject *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.MeshDataNames"></a>

### *property* MechanicalDataModel.MeshDataNames *: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

MeshDataNames property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.ObjectIdentifier"></a>

### *property* MechanicalDataModel.ObjectIdentifier *: Ansys.ACT.Core.Application.Model.ObjectIdentifier | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectIdentifier property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.ObjectLocation"></a>

### *property* MechanicalDataModel.ObjectLocation *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectLocation property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.ObjectTags"></a>

### *property* MechanicalDataModel.ObjectTags *: [Ansys.Mechanical.Application.ObjectTags](../../Mechanical/Application/ObjectTags.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.ObjectTags) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Parent"></a>

### *property* MechanicalDataModel.Parent *: Ansys.ACT.Core.Application.Model.IApplicationObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Project"></a>

### *property* MechanicalDataModel.Project *: [Ansys.ACT.Automation.Mechanical.Project](../Automation/Mechanical/Project.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Project) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Project property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Tree"></a>

### *property* MechanicalDataModel.Tree *: [Ansys.ACT.Automation.Mechanical.Tree](../Automation/Mechanical/Tree.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Tree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Tree property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.WorkingDir"></a>

### *property* MechanicalDataModel.WorkingDir *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkingDir property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MechanicalDataModel.AddSessionVariable"></a>

### MechanicalDataModel.AddSessionVariable(varName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

AddSessionVariable method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.AnalysisById"></a>

### MechanicalDataModel.AnalysisById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Interfaces.Analysis.IAnalysis

See  for general information about this method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.AnalysisByName"></a>

### MechanicalDataModel.AnalysisByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Analysis.IAnalysis

AnalysisByName method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.AreEqual"></a>

### MechanicalDataModel.AreEqual(other: Ansys.ACT.Core.Application.Model.IApplicationObject) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

AreEqual method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.CleanUp"></a>

### MechanicalDataModel.CleanUp() → [None](https://docs.python.org/3/builtins/constants.html#None)

CleanUp method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.ComponentById"></a>

### MechanicalDataModel.ComponentById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Interfaces.Mechanical.IMechanicalSelectionInfo](../Interfaces/Mechanical/IMechanicalSelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalSelectionInfo)

ComponentById method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.CoordinateSystemById"></a>

### MechanicalDataModel.CoordinateSystemById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Interfaces.Analysis.ICoordinateSystem

CoordinateSystemById method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.CreateChild"></a>

### MechanicalDataModel.CreateChild(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), ext: [Ansys.ACT.Interfaces.Common.IExtension](../Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension), parentObj: Any) → Ansys.ACT.Interfaces.UserObject.IUserObject

CreateChild method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.CreateObjRef"></a>

### MechanicalDataModel.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.CreateObject"></a>

### MechanicalDataModel.CreateObject(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.UserObject.IUserObject

### MechanicalDataModel.CreateObject(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), extNameOrGUID: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.UserObject.IUserObject

### MechanicalDataModel.CreateObject(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), ext: [Ansys.ACT.Interfaces.Common.IExtension](../Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension)) → Ansys.ACT.Interfaces.UserObject.IUserObject

CreateObject method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.CreateObjectCommand"></a>

### MechanicalDataModel.CreateObjectCommand(userObject: Ansys.ACT.Interfaces.UserObject.IUserObject) → Ansys.Common.Interop.DSWBApplet.IDSAppCommand

CreateObjectCommand method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.CurrentConsistentUnitFromQuantityName"></a>

### MechanicalDataModel.CurrentConsistentUnitFromQuantityName(quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

CurrentConsistentUnitFromQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.CurrentUnitFromQuantityName"></a>

### MechanicalDataModel.CurrentUnitFromQuantityName(quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

CurrentUnitFromQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Delete"></a>

### MechanicalDataModel.Delete(objsToDelete: Ansys.Common.Interop.AnsCoreObjects.AnsVARIANTColl) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Delete method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.DeleteSessionVariable"></a>

### MechanicalDataModel.DeleteSessionVariable(varName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

DeleteSessionVariable method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.DummyNodeRemoveAndFillObjects"></a>

### MechanicalDataModel.DummyNodeRemoveAndFillObjects(classId: Ansys.Common.Interop.DSObjectTypes.DSClsId) → [None](https://docs.python.org/3/builtins/constants.html#None)

DummyNodeRemoveAndFillObjects method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.GetLifetimeService"></a>

### MechanicalDataModel.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.GetObjectById"></a>

### MechanicalDataModel.GetObjectById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

GetObjectById method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.GetObjectsByName"></a>

### MechanicalDataModel.GetObjectsByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

GetObjectsByName method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.GetObjectsByType"></a>

### MechanicalDataModel.GetObjectsByType(type: MechanicalDataModel.GetObjectsByType.type) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

### MechanicalDataModel.GetObjectsByType(dataModelObjectCategory: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory)) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

GetObjectsByType method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.GetSessionVariableValue"></a>

### MechanicalDataModel.GetSessionVariableValue(varName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetSessionVariableValue method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.GetUserObjectById"></a>

### MechanicalDataModel.GetUserObjectById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Interfaces.UserObject.IUserObject

GetUserObjectById method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.GetUserObjects"></a>

### MechanicalDataModel.GetUserObjects(ext: [Ansys.ACT.Interfaces.Common.IExtension](../Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension)) → Iterable[Ansys.ACT.Interfaces.UserObject.IUserObject]

### MechanicalDataModel.GetUserObjects(extNameOrGUID: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Iterable[Ansys.ACT.Interfaces.UserObject.IUserObject]

GetUserObjects method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.InitializeLifetimeService"></a>

### MechanicalDataModel.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.MeshDataByName"></a>

### MechanicalDataModel.MeshDataByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mesh.IMeshData

MeshDataByName method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.RecomputeState"></a>

### MechanicalDataModel.RecomputeState() → [None](https://docs.python.org/3/builtins/constants.html#None)

Recomputes the states of the data model objects. Best used with data model changes made during callbacks in Python Code or Extensions.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Redo"></a>

### MechanicalDataModel.Redo() → [None](https://docs.python.org/3/builtins/constants.html#None)

Redo method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Remove"></a>

### MechanicalDataModel.Remove(dataModelObjects: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MechanicalDataModel.Remove(dataModelObjects: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)], forceRemove: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MechanicalDataModel.Remove(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MechanicalDataModel.Remove(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), forceRemove: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Remove method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Suppress"></a>

### MechanicalDataModel.Suppress(dataModelObjects: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

Suppress method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Undo"></a>

### MechanicalDataModel.Undo() → [None](https://docs.python.org/3/builtins/constants.html#None)

Undo method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalDataModel.Unsuppress"></a>

### MechanicalDataModel.Unsuppress(dataModelObjects: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

Unsuppress method.

<!-- !! processed by numpydoc !! -->

