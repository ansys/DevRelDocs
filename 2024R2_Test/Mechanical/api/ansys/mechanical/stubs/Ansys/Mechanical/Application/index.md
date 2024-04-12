<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.Application"></a>

<a id="the-application-package"></a>

# The `Application` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------|--------------------------------------------------|
| [`Progress`](Progress.md#Progress)       | Defines a Progress.                              |
| [`ObjectTag`](ObjectTag.md#ObjectTag)    | An instance of an ObjectTag.                     |
| [`ObjectTags`](ObjectTags.md#ObjectTags) | Defines the collection of Mechanical’s tags.     |
| [`Message`](Message.md#Message)          | A message.                                       |
| [`Messages`](Messages.md#Messages)       | Defines the collection of Mechanical’s messages. |

<a id="description"></a>

## Description

Application subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Application.Progress"></a>

### *class* Application.Progress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Progress.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|---------------------------------------------|----------------------------------|
| [`SetProgress`](#Application.SetProgress)   | Set the current progress state   |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Application import Progress
```

<a id="method-detail"></a>

## Method detail

<a id="Application.SetProgress"></a>

### Application.SetProgress(uiProgress: System.UInt32, uiMessage: System.String, uiSubProgress: System.UInt32, uiSubMessage: System.String)

Set the current progress state

<!-- !! processed by numpydoc !! -->

<a id="Application.ObjectTag"></a>

### *class* Application.ObjectTag

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> An instance of an ObjectTag.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|---------------------------------------------|----------------------------------|
| [`AddObject`](#Application.AddObject)       | Add an object to this tag.       |
| [`RemoveObject`](#Application.RemoveObject) | Remove an object from this tag.  |
| [`ClearObjects`](#Application.ClearObjects) | Clear all objects from this tag. |

### Properties

| Name | Summary |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Name`](#Application.Name)       | The name of the tag. If the tag exists in ObjectTags, attempting to set the name to a value of another tag in that collection will lead to an exception.   |
| [`Objects`](#Application.Objects) | The list of objects which use this tag.                                                                                                                    |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Application import ObjectTag
```

<a id="property-detail"></a>

## Property detail

<a id="Application.Name"></a>

### *property* Application.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the tag. If the tag exists in ObjectTags, attempting to set the name to a value of another tag in that collection will lead to an exception.

<!-- !! processed by numpydoc !! -->

<a id="Application.Objects"></a>

### *property* Application.Objects *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

The list of objects which use this tag.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

## Method detail

<a id="Application.AddObject"></a>

### Application.AddObject(obj: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Add an object to this tag.

<!-- !! processed by numpydoc !! -->

<a id="Application.RemoveObject"></a>

### Application.RemoveObject(obj: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Remove an object from this tag.

<!-- !! processed by numpydoc !! -->

<a id="Application.ClearObjects"></a>

### Application.ClearObjects()

Clear all objects from this tag.

<!-- !! processed by numpydoc !! -->

<a id="Application.ObjectTags"></a>

### *class* Application.ObjectTags

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the collection of Mechanical’s tags.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| [`Add`](#id12)                      | Adds a new tag to the collection. Throws an error if the tag already exists in the collection.     |
| [`Remove`](#id13)                   | Removes a tag if it exists in the collection.                                                      |
| [`GetTag`](#Application.GetTag)     | Returns the tag in the collection with the given name.                                             |
| [`IndexOf`](#Application.IndexOf)   | Returns the index of the given tag. If the given tag does not exist in the collection, returns -1. |
| [`RemoveAt`](#Application.RemoveAt) | Removes the tag at the given index from the collection.                                            |
| [`Clear`](#id14)                    | Clears the collection, removing all objects from the tags in the collection.                       |
| [`Contains`](#id15)                 | Returns whether or not the collection contains the given tag.                                      |

### Properties

| Name | Summary |
|-------------------------------------|------------------------------------------|
| [`Count`](#id10)                    | The number of tags in the collection.    |
| [`Item`](#id0)                      | Item property.                           |
| [`Item`](#id0)                      | Item property.                           |
| [`TagNames`](#Application.TagNames) | The names of the tags in the collection. |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Application import ObjectTags
```

<a id="id4"></a>

## Property detail

<a id="Application.Count"></a>

### *property* Application.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of tags in the collection.

<!-- !! processed by numpydoc !! -->

<a id="Application.Item"></a>

### *property* Application.Item *: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ObjectTag) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Application.Item *: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ObjectTag) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="Application.TagNames"></a>

### *property* Application.TagNames *: System.Collections.Generic.List[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

The names of the tags in the collection.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

## Method detail

<a id="Application.Add"></a>

### Application.Add(tag: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ObjectTag))

Adds a new tag to the collection. Throws an error if the tag already exists in the collection.

<!-- !! processed by numpydoc !! -->

<a id="Application.Remove"></a>

### Application.Remove(tag: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ObjectTag))

Removes a tag if it exists in the collection.

<!-- !! processed by numpydoc !! -->

<a id="Application.GetTag"></a>

### Application.GetTag(tagName: System.String)

Returns the tag in the collection with the given name.

<!-- !! processed by numpydoc !! -->

<a id="Application.IndexOf"></a>

### Application.IndexOf(tag: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ObjectTag))

Returns the index of the given tag. If the given tag does not exist in the collection, returns -1.

<!-- !! processed by numpydoc !! -->

<a id="Application.RemoveAt"></a>

### Application.RemoveAt(index: System.Int32)

Removes the tag at the given index from the collection.

<!-- !! processed by numpydoc !! -->

<a id="Application.Clear"></a>

### Application.Clear()

Clears the collection, removing all objects from the tags in the collection.

<!-- !! processed by numpydoc !! -->

<a id="Application.Contains"></a>

### Application.Contains(tag: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ObjectTag))

Returns whether or not the collection contains the given tag.

<!-- !! processed by numpydoc !! -->

<a id="Application.Message"></a>

### *class* Application.Message

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A message.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|-------------------------------------------------|---------------------------------------------|
| [`Source`](#Application.Source)                 | The source object of the message.           |
| [`StringID`](#Application.StringID)             | The string ID of the message.               |
| [`DisplayString`](#Application.DisplayString)   | The display string of the message.          |
| [`Location`](#Application.Location)             | The location of the message.                |
| [`TimeStamp`](#Application.TimeStamp)           | The timestamp of the message.               |
| [`RelatedObjects`](#Application.RelatedObjects) | The list of objects related to the message. |
| [`Severity`](#Application.Severity)             | The severity of the message.                |

<a id="id6"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Application import Message
```

<a id="id7"></a>

## Property detail

<a id="Application.Source"></a>

### *property* Application.Source *: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

The source object of the message.

<!-- !! processed by numpydoc !! -->

<a id="Application.StringID"></a>

### *property* Application.StringID *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The string ID of the message.

<!-- !! processed by numpydoc !! -->

<a id="Application.DisplayString"></a>

### *property* Application.DisplayString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The display string of the message.

<!-- !! processed by numpydoc !! -->

<a id="Application.Location"></a>

### *property* Application.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

The location of the message.

<!-- !! processed by numpydoc !! -->

<a id="Application.TimeStamp"></a>

### *property* Application.TimeStamp *: System.DateTime | [None](https://docs.python.org/3/library/constants.html#None)*

The timestamp of the message.

<!-- !! processed by numpydoc !! -->

<a id="Application.RelatedObjects"></a>

### *property* Application.RelatedObjects *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

The list of objects related to the message.

<!-- !! processed by numpydoc !! -->

<a id="Application.Severity"></a>

### *property* Application.Severity *: [Ansys.Mechanical.DataModel.Enums.MessageSeverityType](../DataModel/Enums/MessageSeverityType.md#MessageSeverityType) | [None](https://docs.python.org/3/library/constants.html#None)*

The severity of the message.

<!-- !! processed by numpydoc !! -->

<a id="Application.Messages"></a>

### *class* Application.Messages

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the collection of Mechanical’s messages.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-----------------------------------------|--------------------------------------------------------|
| [`Add`](#id12)                          | Add a new message.                                     |
| [`Remove`](#id13)                       | Remove a specific message in the list.                 |
| [`Clear`](#id14)                        | Clear the list of the messages.                        |
| [`Contains`](#id15)                     | Check if a message is in the current list of messages. |
| [`ShowErrors`](#Application.ShowErrors) | Shows errors with current project.                     |

### Properties

| Name | Summary |
|--------------------|-------------------------------|
| [`Count`](#id10)   | Get the number of messages.   |

<a id="id8"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Application import Messages
```

<a id="id9"></a>

## Property detail

<a id="id10"></a>

### *property* Application.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the number of messages.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

## Method detail

<a id="id12"></a>

### Application.Add(item: [Ansys.Mechanical.Application.Message](Message.md#Message))

Add a new message.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### Application.Remove(item: [Ansys.Mechanical.Application.Message](Message.md#Message))

Remove a specific message in the list.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### Application.Clear()

Clear the list of the messages.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### Application.Contains(item: [Ansys.Mechanical.Application.Message](Message.md#Message))

Check if a message is in the current list of messages.

<!-- !! processed by numpydoc !! -->

<a id="Application.ShowErrors"></a>

### Application.ShowErrors()

Shows errors with current project.

<!-- !! processed by numpydoc !! -->
