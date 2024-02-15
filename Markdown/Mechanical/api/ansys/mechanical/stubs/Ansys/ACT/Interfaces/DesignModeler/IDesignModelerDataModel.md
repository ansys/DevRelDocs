# IDesignModelerDataModel

### *class* IDesignModelerDataModel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the DesignModeler data model.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`CurrentUnitFromQuantityName`](#IDesignModelerDataModel.CurrentUnitFromQuantityName)   | Returns the current unit assocaited to a quantity name.                         |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`ComponentById`](#IDesignModelerDataModel.ComponentById)                               | Returns the component (named selection) associated to the specified identifier. |

### Properties

| [`GeoData`](#IDesignModelerDataModel.GeoData)                 | Gets the geometry data model object.    |
|---------------------------------------------------------------|-----------------------------------------|
| [`GeometryBuilder`](#IDesignModelerDataModel.GeometryBuilder) | Gets the geometry builder object.       |
| [`Queries`](#IDesignModelerDataModel.Queries)                 | Gets the queries object.                |
| [`Components`](#IDesignModelerDataModel.Components)           | Gets all components (named selections). |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IDesignModelerDataModel
```

## Property detail

### *property* IDesignModelerDataModel.GeoData *: [Ansys.ACT.Interfaces.DesignModeler.IDesignModelerGeoData](IDesignModelerGeoData.md#IDesignModelerGeoData) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the geometry data model object.

<!-- !! processed by numpydoc !! -->

### *property* IDesignModelerDataModel.GeometryBuilder *: [Ansys.ACT.Interfaces.DesignModeler.IGeometryBuilder](IGeometryBuilder.md#IGeometryBuilder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the geometry builder object.

<!-- !! processed by numpydoc !! -->

### *property* IDesignModelerDataModel.Queries *: [Ansys.ACT.Interfaces.DesignModeler.IQueries](IQueries.md#IQueries) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the queries object.

<!-- !! processed by numpydoc !! -->

### *property* IDesignModelerDataModel.Components *: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Common.ISelectionInfo] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets all components (named selections).

<!-- !! processed by numpydoc !! -->

## Method detail

### IDesignModelerDataModel.CurrentUnitFromQuantityName(quantityName: System.String)

Returns the current unit assocaited to a quantity name.

<!-- !! processed by numpydoc !! -->

### IDesignModelerDataModel.ComponentById(id: System.Int32)

Returns the component (named selection) associated to the specified identifier.

<!-- !! processed by numpydoc !! -->
