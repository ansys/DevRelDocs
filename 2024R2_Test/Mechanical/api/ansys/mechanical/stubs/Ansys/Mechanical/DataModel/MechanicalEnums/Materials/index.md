<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Materials"></a>

<a id="the-materials-package"></a>

# The `Materials` package

<a id="summary"></a>

## Summary

### Enums

| [`IdentifierType`](IdentifierType.md#IdentifierType)                                  | The primary identifier to use when searching for existing materials. The name and the uuid must   |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [`ExistingMaterialOperation`](ExistingMaterialOperation.md#ExistingMaterialOperation) | Specifies what should occur when a material being imported has the same identifiers as            |
| [`ImportFormat`](../Table/ImportFormat.md#ImportFormat)                               | Specifies how to interpret the material URI when importing.                                       |

<a id="description"></a>

## Description

Materials subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Materials.IdentifierType"></a>

### *class* Materials.IdentifierType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> The primary identifier to use when searching for existing materials. The name and the uuid must
> always be unique across all materials in the database.  There can be

> > Name        UUID

> material1   DEA8407F-4029-4919-94F0-5BDC6FBF203A
> material2   7ED99748-4885-4AAA-8600-CE21253325FA

> but not  (same name different UUID)
> material1   DEA8407F-4029-4919-94F0-5BDC6FBF203A
> material1   7ED99748-4885-4AAA-8600-CE21253325FA

> or  (different name same UUID)
> material1   DEA8407F-4029-4919-94F0-5BDC6FBF203A
> material2   DEA8407F-4029-4919-94F0-5BDC6FBF203A

> The reason to use this is if the name of the material changed for a “refresh” (search by UUID) or if the UUID
> needs changed (search by Name).  Either way a material cannot be added which would violate the above rules.

> <!-- !! processed by numpydoc !! -->

### Attributes

| [`Name`](#Materials.Name)   |    |
|-----------------------------|----|
| [`UUID`](#Materials.UUID)   |    |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Materials import IdentifierType
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="Materials.Name"></a>

### Materials.Name *= 1*

<a id="Materials.UUID"></a>

### Materials.UUID *= 2*

<a id="Materials.ExistingMaterialOperation"></a>

### *class* Materials.ExistingMaterialOperation

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies what should occur when a material being imported has the same identifiers as
> a material which already exists in Mechanical.

> <!-- !! processed by numpydoc !! -->

### Attributes

| [`New`](#Materials.New)         |    |
|---------------------------------|----|
| [`Replace`](#Materials.Replace) |    |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Materials import ExistingMaterialOperation
```

<a id="id2"></a>

## Attribute detail

<a id="Materials.New"></a>

### Materials.New *= 1*

<a id="Materials.Replace"></a>

### Materials.Replace *= 2*

<a id="Materials.ImportFormat"></a>

### *class* Materials.ImportFormat

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies how to interpret the material URI when importing.

> <!-- !! processed by numpydoc !! -->

### Attributes

| [`Automatic`](#Materials.Automatic)   |    |
|---------------------------------------|----|

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Materials import ImportFormat
```

<a id="id4"></a>

## Attribute detail

<a id="Materials.Automatic"></a>

### Materials.Automatic *= 0*
