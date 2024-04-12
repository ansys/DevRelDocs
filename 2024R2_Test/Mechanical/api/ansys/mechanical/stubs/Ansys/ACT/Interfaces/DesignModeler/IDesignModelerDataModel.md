<a id="idesignmodelerdatamodel"></a>

# IDesignModelerDataModel

<a id="IDesignModelerDataModel"></a>

### *class* IDesignModelerDataModel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the DesignModeler data model.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`CurrentUnitFromQuantityName`](#IDesignModelerDataModel.CurrentUnitFromQuantityName)   | Returns the current unit assocaited to a quantity name.                         |
| [`ComponentById`](#IDesignModelerDataModel.ComponentById)                               | Returns the component (named selection) associated to the specified identifier. |

### Properties

| Name | Summary |
|---------------------------------------------------------------|-----------------------------------------|
| [`GeoData`](#IDesignModelerDataModel.GeoData)                 | Gets the geometry data model object.    |
| [`GeometryBuilder`](#IDesignModelerDataModel.GeometryBuilder) | Gets the geometry builder object.       |
| [`Queries`](#IDesignModelerDataModel.Queries)                 | Gets the queries object.                |
| [`Components`](#IDesignModelerDataModel.Components)           | Gets all components (named selections). |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IDesignModelerDataModel
```

<a id="property-detail"></a>

## Property detail

<a id="IDesignModelerDataModel.GeoData"></a>

### *property* IDesignModelerDataModel.GeoData *: [Ansys.ACT.Interfaces.DesignModeler.IDesignModelerGeoData](IDesignModelerGeoData.md#IDesignModelerGeoData) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the geometry data model object.

<!-- !! processed by numpydoc !! -->

<a id="IDesignModelerDataModel.GeometryBuilder"></a>

### *property* IDesignModelerDataModel.GeometryBuilder *: [Ansys.ACT.Interfaces.DesignModeler.IGeometryBuilder](IGeometryBuilder.md#IGeometryBuilder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the geometry builder object.

<!-- !! processed by numpydoc !! -->

<a id="IDesignModelerDataModel.Queries"></a>

### *property* IDesignModelerDataModel.Queries *: [Ansys.ACT.Interfaces.DesignModeler.IQueries](IQueries.md#IQueries) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the queries object.

<!-- !! processed by numpydoc !! -->

<a id="IDesignModelerDataModel.Components"></a>

### *property* IDesignModelerDataModel.Components *: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Common.ISelectionInfo] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets all components (named selections).

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IDesignModelerDataModel.CurrentUnitFromQuantityName"></a>

### IDesignModelerDataModel.CurrentUnitFromQuantityName(quantityName: System.String)

Returns the current unit assocaited to a quantity name.

<!-- !! processed by numpydoc !! -->

<a id="IDesignModelerDataModel.ComponentById"></a>

### IDesignModelerDataModel.ComponentById(id: System.Int32)

Returns the component (named selection) associated to the specified identifier.

<!-- !! processed by numpydoc !! -->
