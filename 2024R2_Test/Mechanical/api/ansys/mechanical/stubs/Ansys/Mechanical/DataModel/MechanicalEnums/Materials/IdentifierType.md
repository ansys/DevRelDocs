# IdentifierType

### *class* IdentifierType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> The primary identifier to use when searching for existing materials. The name and the uuid must
> always be unique across all materials in the database.  There can be
> Name        UUID
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

## Overview

### Attributes

| [`Name`](#IdentifierType.Name)   |    |
|----------------------------------|----|
| [`UUID`](#IdentifierType.UUID)   |    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.MechanicalEnums.Materials import IdentifierType
```

## Attribute detail

### IdentifierType.Name *= 1*

### IdentifierType.UUID *= 2*
