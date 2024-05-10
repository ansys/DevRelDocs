<a id="icepakimportsettings"></a>

# ICEPAKImportSettings

<a id="ICEPAKImportSettings"></a>

### *class* ICEPAKImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| [`SupportingFilePath`](#ICEPAKImportSettings.SupportingFilePath)               | The supporting file path of the ICEPAK INFO file.                                                |
|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`SupportingFileIdentifier`](#ICEPAKImportSettings.SupportingFileIdentifier)   | The supporting file identifier. The identifier should be unique, otherwise, an exception will be |
| [`SupportingFileDescription`](#ICEPAKImportSettings.SupportingFileDescription) | The supporting file description. This is optional.                                               |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format)       | Gets the existing corresponding format.                                                          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ICEPAKImportSettings
```

<a id="property-detail"></a>

## Property detail

<a id="ICEPAKImportSettings.SupportingFilePath"></a>

### *property* ICEPAKImportSettings.SupportingFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The supporting file path of the ICEPAK INFO file.

<!-- !! processed by numpydoc !! -->

<a id="ICEPAKImportSettings.SupportingFileIdentifier"></a>

### *property* ICEPAKImportSettings.SupportingFileIdentifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The supporting file identifier. The identifier should be unique, otherwise, an exception will be
thrown during the import.

<!-- !! processed by numpydoc !! -->

<a id="ICEPAKImportSettings.SupportingFileDescription"></a>

### *property* ICEPAKImportSettings.SupportingFileDescription *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The supporting file description. This is optional.

<!-- !! processed by numpydoc !! -->

<a id="ICEPAKImportSettings.Format"></a>

### *property* ICEPAKImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->
