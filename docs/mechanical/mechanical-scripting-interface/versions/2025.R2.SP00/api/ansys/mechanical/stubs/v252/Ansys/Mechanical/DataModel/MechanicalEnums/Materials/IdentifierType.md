# `IdentifierType`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Materials.IdentifierType"></a>

#### *class* Ansys.Mechanical.DataModel.MechanicalEnums.Materials.IdentifierType(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

The primary identifier to use when searching for existing materials. The name and the uuid must
always be unique across all materials in the database.  There can be
Name        UUID
material1   DEA8407F-4029-4919-94F0-5BDC6FBF203A
material2   7ED99748-4885-4AAA-8600-CE21253325FA

but not  (same name different UUID)
material1   DEA8407F-4029-4919-94F0-5BDC6FBF203A
material1   7ED99748-4885-4AAA-8600-CE21253325FA

or  (different name same UUID)
material1   DEA8407F-4029-4919-94F0-5BDC6FBF203A
material2   DEA8407F-4029-4919-94F0-5BDC6FBF203A

The reason to use this is if the name of the material changed for a “refresh” (search by UUID) or if the UUID
needs changed (search by Name).  Either way a material cannot be added which would violate the above rules.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| ---------------------------------- |
| [`Name`](#IdentifierType.Name) |
| [`UUID`](#IdentifierType.UUID) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="IdentifierType.Name"></a>

### IdentifierType.Name *= 1*

<a id="IdentifierType.UUID"></a>

### IdentifierType.UUID *= 2*


