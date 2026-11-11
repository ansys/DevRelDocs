# `IMechanicalDataModel`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalDataModel"></a>

#### *class* Ansys.ACT.Interfaces.Mechanical.IMechanicalDataModel

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines the data model of the Mechanical application.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`AnalysisById`](#IMechanicalDataModel.AnalysisById)                                                   | AnalysisById method.                              |
| [`AnalysisByName`](#IMechanicalDataModel.AnalysisByName)                                               | AnalysisByName method.                            |
| [`CurrentConsistentUnitFromQuantityName`](#IMechanicalDataModel.CurrentConsistentUnitFromQuantityName) | CurrentConsistentUnitFromQuantityName method.     |
| [`CurrentUnitFromQuantityName`](#IMechanicalDataModel.CurrentUnitFromQuantityName)                     | Returns the current unit from a quantity name.    |
| [`GetObjectById`](#IMechanicalDataModel.GetObjectById)                                                 | GetObjectById method.                             |
| [`GetObjectsByName`](#IMechanicalDataModel.GetObjectsByName)                                           | GetObjectsByName method.                          |
| [`GetObjectsByType`](#IMechanicalDataModel.GetObjectsByType)                                           | GetObjectsByType method.                          |
| [`GetUserObjectById`](#IMechanicalDataModel.GetUserObjectById)                                         | Gets the user object based on the application id. |
| [`GetUserObjects`](#IMechanicalDataModel.GetUserObjects)                                               | GetUserObjects method.                            |
| [`MeshDataByName`](#IMechanicalDataModel.MeshDataByName)                                               | MeshDataByName method.                            |

### Properties

| Name | Description |
|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`AnalysisList`](#IMechanicalDataModel.AnalysisList)             | AnalysisList property.                                                                                                  |
| [`AnalysisNames`](#IMechanicalDataModel.AnalysisNames)           | AnalysisNames property.                                                                                                 |
| [`GeoData`](#IMechanicalDataModel.GeoData)                       | GeoData property.                                                                                                       |
| [`MeshDataNames`](#IMechanicalDataModel.MeshDataNames)           | MeshDataNames property.                                                                                                 |
| [`ObjectLocation`](#IMechanicalDataModel.ObjectLocation)         | ObjectLocation property.                                                                                                |
| [`ObjectTags`](#IMechanicalDataModel.ObjectTags)                 | Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface. |
| [`ObjectType`](#IMechanicalDataModel.ObjectType)                 | ObjectType property.                                                                                                    |
| [`Parent`](#IMechanicalDataModel.Parent)                         | Parent property.                                                                                                        |
| [`Project`](#Project)      | Gets the project object. Main object of the tree of Mechanical.                                                         |
| [`SupportedLocations`](#IMechanicalDataModel.SupportedLocations) | SupportedLocations property.                                                                                            |
| [`Tree`](#IMechanicalDataModel.Tree)                             | Gets the tree of Mechanical.                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="IMechanicalDataModel.AnalysisList"></a>

### *property* IMechanicalDataModel.AnalysisList *: List[Ansys.ACT.Interfaces.Analysis.IAnalysis] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisList property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.AnalysisNames"></a>

### *property* IMechanicalDataModel.AnalysisNames *: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AnalysisNames property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.GeoData"></a>

### *property* IMechanicalDataModel.GeoData *: Ansys.ACT.Interfaces.Geometry.IGeoData | [None](https://docs.python.org/3/builtins/constants.html#None)*

GeoData property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.MeshDataNames"></a>

### *property* IMechanicalDataModel.MeshDataNames *: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

MeshDataNames property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.ObjectLocation"></a>

### *property* IMechanicalDataModel.ObjectLocation *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectLocation property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.ObjectTags"></a>

### *property* IMechanicalDataModel.ObjectTags *: [Ansys.Mechanical.Application.ObjectTags](../../../Mechanical/Application/ObjectTags.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.ObjectTags) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ObjectTags object for the Data Model, which represents the current list of tags visable in the User Interface.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.ObjectType"></a>

### *property* IMechanicalDataModel.ObjectType *: Ansys.ACT.Interfaces.UserObject.ObjectTypeEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectType property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.Parent"></a>

### *property* IMechanicalDataModel.Parent *: Ansys.ACT.Interfaces.DataModel.IDataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.Project"></a>

### *property* IMechanicalDataModel.Project *: [Ansys.ACT.Automation.Mechanical.Project](../../Automation/Mechanical/Project.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Project) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the project object. Main object of the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.SupportedLocations"></a>

### *property* IMechanicalDataModel.SupportedLocations *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupportedLocations property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.Tree"></a>

### *property* IMechanicalDataModel.Tree *: [Ansys.ACT.Automation.Mechanical.Tree](../../Automation/Mechanical/Tree.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Tree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tree of Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalDataModel.AnalysisById"></a>

### IMechanicalDataModel.AnalysisById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Interfaces.Analysis.IAnalysis

AnalysisById method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.AnalysisByName"></a>

### IMechanicalDataModel.AnalysisByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Analysis.IAnalysis

AnalysisByName method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.CurrentConsistentUnitFromQuantityName"></a>

### IMechanicalDataModel.CurrentConsistentUnitFromQuantityName(quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

CurrentConsistentUnitFromQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.CurrentUnitFromQuantityName"></a>

### IMechanicalDataModel.CurrentUnitFromQuantityName(quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Returns the current unit from a quantity name.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.GetObjectById"></a>

### IMechanicalDataModel.GetObjectById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

GetObjectById method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.GetObjectsByName"></a>

### IMechanicalDataModel.GetObjectsByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

GetObjectsByName method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.GetObjectsByType"></a>

### IMechanicalDataModel.GetObjectsByType(type: IMechanicalDataModel.GetObjectsByType.type) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

GetObjectsByType method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.GetUserObjectById"></a>

### IMechanicalDataModel.GetUserObjectById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Interfaces.UserObject.IUserObject

Gets the user object based on the application id.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.GetUserObjects"></a>

### IMechanicalDataModel.GetUserObjects(extNameOrGUID: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Iterable[Ansys.ACT.Interfaces.UserObject.IUserObject]

GetUserObjects method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalDataModel.MeshDataByName"></a>

### IMechanicalDataModel.MeshDataByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mesh.IMeshData

MeshDataByName method.

<!-- !! processed by numpydoc !! -->

