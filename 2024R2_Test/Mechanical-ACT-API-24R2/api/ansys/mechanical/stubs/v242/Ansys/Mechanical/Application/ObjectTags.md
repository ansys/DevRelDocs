# `ObjectTags`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.Application.ObjectTags

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the collection of Mechanical's tags.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------|----------------------------------------------------------------------------------------------------|
| `Add`      | Adds a new tag to the collection. Throws an error if the tag already exists in the collection.     |
| `Remove`   | Removes a tag if it exists in the collection.                                                      |
| `GetTag`   | Returns the tag in the collection with the given name.                                             |
| `IndexOf`  | Returns the index of the given tag. If the given tag does not exist in the collection, returns -1. |
| `RemoveAt` | Removes the tag at the given index from the collection.                                            |
| `Clear`    | Clears the collection, removing all objects from the tags in the collection.                       |
| `Contains` | Returns whether or not the collection contains the given tag.                                      |

### Properties

| Name | Description |
|------------|------------------------------------------|
| `Count`    | The number of tags in the collection.    |
| `Item`     | Item property.                           |
| `Item`     | Item property.                           |
| `TagNames` | The names of the tags in the collection. |

<a id="property-detail"></a>

## Property detail

### *property* ObjectTags.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of tags in the collection.

<!-- !! processed by numpydoc !! -->

### *property* ObjectTags.Item *: [Ansys.Mechanical.Application.ObjectTag](../../../../v241/Ansys/Mechanical/Application/ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* ObjectTags.Item *: [Ansys.Mechanical.Application.ObjectTag](../../../../v241/Ansys/Mechanical/Application/ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* ObjectTags.TagNames *: System.Collections.Generic.List[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

The names of the tags in the collection.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ObjectTags.Add(tag: [Ansys.Mechanical.Application.ObjectTag](../../../../v241/Ansys/Mechanical/Application/ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag))

Adds a new tag to the collection. Throws an error if the tag already exists in the collection.

<!-- !! processed by numpydoc !! -->

### ObjectTags.Remove(tag: [Ansys.Mechanical.Application.ObjectTag](../../../../v241/Ansys/Mechanical/Application/ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag))

Removes a tag if it exists in the collection.

<!-- !! processed by numpydoc !! -->

### ObjectTags.GetTag(tagName: System.String)

Returns the tag in the collection with the given name.

<!-- !! processed by numpydoc !! -->

### ObjectTags.IndexOf(tag: [Ansys.Mechanical.Application.ObjectTag](../../../../v241/Ansys/Mechanical/Application/ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag))

Returns the index of the given tag. If the given tag does not exist in the collection, returns -1.

<!-- !! processed by numpydoc !! -->

### ObjectTags.RemoveAt(index: System.Int32)

Removes the tag at the given index from the collection.

<!-- !! processed by numpydoc !! -->

### ObjectTags.Clear()

Clears the collection, removing all objects from the tags in the collection.

<!-- !! processed by numpydoc !! -->

### ObjectTags.Contains(tag: [Ansys.Mechanical.Application.ObjectTag](../../../../v241/Ansys/Mechanical/Application/ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag))

Returns whether or not the collection contains the given tag.

<!-- !! processed by numpydoc !! -->

