# `LabelManager`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.LabelManager"></a>

#### *class* Ansys.Mechanical.Graphics.Labels.LabelManager

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Manages labels and the creation and deletion of them.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [`ClearClipboard`](#LabelManager.ClearClipboard)                     | Clears the label clipboard.                                                                                                    |
| [`Copy`](#LabelManager.Copy)                                         | Copy method.                                                                                                                   |
| [`CreateElementNodeScoping`](#LabelManager.CreateElementNodeScoping) | Creates an element node label scoping. The node must be a part of the element.                                                 |
| [`CreateElementScoping`](#LabelManager.CreateElementScoping)         | Creates an element label scoping.                                                                                              |
| [`CreateLabel`](#LabelManager.CreateLabel)                           | Creates an  associated with an object.                                                                                         |
| [`CreateNodeScoping`](#LabelManager.CreateNodeScoping)               | Creates a node label scoping.                                                                                                  |
| [`CreatePointScoping`](#LabelManager.CreatePointScoping)             | Creates a point label scoping.                                                                                                 |
| [`CreateProbeLabel`](#LabelManager.CreateProbeLabel)                 | Creates a  associated with an object that supports probe labels (Currently limited to results and figures parented to results) |
| [`Delete`](#LabelManager.Delete)                                     | Delete method.                                                                                                                 |
| [`GetObjectLabels`](#LabelManager.GetObjectLabels)                   | Returns the labels of the specified type from the provided object.                                                             |
| [`IsClipboardEmpty`](#LabelManager.IsClipboardEmpty)                 | IsClipboardEmpty method.                                                                                                       |
| [`Paste`](#LabelManager.Paste)                                       | Pastes the labels from the label clipboard to the object.                                                                      |

### Properties

| Name | Description |
|----------------------------------------------------------|------------------------------------|
| [`LabelObscureStyle`](#LabelManager.LabelObscureStyle)   | LabelObscureStyle property.        |
| [`Labels`](#LabelManager.Labels)                         | Gets a list of all defined labels. |

<a id="property-detail"></a>

## Property detail

<a id="LabelManager.LabelObscureStyle"></a>

### *property* LabelManager.LabelObscureStyle *: Ansys.Mechanical.DataModel.MechanicalEnums.Graphics.Labels.ObscuredLabelStyle | [None](https://docs.python.org/3/builtins/constants.html#None)*

LabelObscureStyle property.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.Labels"></a>

### *property* LabelManager.Labels *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[Ansys.Mechanical.Graphics.Labels.ILabel](ILabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ILabel)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets a list of all defined labels.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LabelManager.ClearClipboard"></a>

### LabelManager.ClearClipboard() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the label clipboard.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.Copy"></a>

### LabelManager.Copy(labelsToCopy: Iterable[[Ansys.Mechanical.Graphics.Labels.ILabel](ILabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ILabel)], labelType: [type](https://docs.python.org/3/builtins/functions.html#type)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### LabelManager.Copy(sourceObj: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), labelType: [type](https://docs.python.org/3/builtins/functions.html#type)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copy method.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.CreateElementNodeScoping"></a>

### LabelManager.CreateElementNodeScoping(elementId: [int](https://docs.python.org/3/builtins/functions.html#int), nodeId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Mechanical.Graphics.Labels.ElementNodeProbeScoping](ElementNodeProbeScoping.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ElementNodeProbeScoping)

Creates an element node label scoping. The node must be a part of the element.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.CreateElementScoping"></a>

### LabelManager.CreateElementScoping(elementId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Mechanical.Graphics.Labels.ElementProbeScoping](ElementProbeScoping.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ElementProbeScoping)

Creates an element label scoping.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.CreateLabel"></a>

### LabelManager.CreateLabel(associatedObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [Ansys.Mechanical.Graphics.Labels.AnnotationLabel](AnnotationLabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.AnnotationLabel)

### LabelManager.CreateLabel(associatedObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), point: [Ansys.Mechanical.Graphics.Point](../Point.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point)) → [Ansys.Mechanical.Graphics.Labels.AnnotationLabel](AnnotationLabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.AnnotationLabel)

Creates an  associated with an object.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.CreateNodeScoping"></a>

### LabelManager.CreateNodeScoping(nodeId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Mechanical.Graphics.Labels.NodeProbeScoping](NodeProbeScoping.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.NodeProbeScoping)

Creates a node label scoping.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.CreatePointScoping"></a>

### LabelManager.CreatePointScoping(point: [Ansys.Mechanical.Graphics.Point](../Point.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point)) → [Ansys.Mechanical.Graphics.Labels.PointProbeScoping](PointProbeScoping.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.PointProbeScoping)

Creates a point label scoping.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.CreateProbeLabel"></a>

### LabelManager.CreateProbeLabel(associatedObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [Ansys.Mechanical.Graphics.Labels.ProbeLabel](ProbeLabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ProbeLabel)

### LabelManager.CreateProbeLabel(associatedObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), scoping: [Ansys.Mechanical.Graphics.Labels.IProbeScoping](IProbeScoping.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.IProbeScoping)) → [Ansys.Mechanical.Graphics.Labels.ProbeLabel](ProbeLabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ProbeLabel)

Creates a  associated with an object that supports probe labels (Currently limited to results and figures parented to results)

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.Delete"></a>

### LabelManager.Delete(labelsToDelete: Iterable[[Ansys.Mechanical.Graphics.Labels.ILabel](ILabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ILabel)], labelType: [type](https://docs.python.org/3/builtins/functions.html#type)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### LabelManager.Delete(obj: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), labelType: [type](https://docs.python.org/3/builtins/functions.html#type)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### LabelManager.Delete(labelToDelete: [Ansys.Mechanical.Graphics.Labels.ILabel](ILabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ILabel)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Delete method.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.GetObjectLabels"></a>

### LabelManager.GetObjectLabels(obj: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), labelType: [type](https://docs.python.org/3/builtins/functions.html#type)) → [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[Ansys.Mechanical.Graphics.Labels.ILabel](ILabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ILabel)]

Returns the labels of the specified type from the provided object.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.IsClipboardEmpty"></a>

### LabelManager.IsClipboardEmpty() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsClipboardEmpty method.

<!-- !! processed by numpydoc !! -->

<a id="LabelManager.Paste"></a>

### LabelManager.Paste(destinationObj: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[Ansys.Mechanical.Graphics.Labels.ILabel](ILabel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ILabel)]

```text
Pastes the labels from the label clipboard to the object.
Labels can be copied using the Copy method.
```

<!-- !! processed by numpydoc !! -->

