# `ObjectTags`

<a id="ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTags"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTags

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the collection of Mechanical’s tags.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------|----------------------------------------------------------------------------------------------------|
| [`Add`](#ObjectTags.Add)           | Adds a new tag to the collection. Throws an error if the tag already exists in the collection.     |
| [`Remove`](#ObjectTags.Remove)     | Removes a tag if it exists in the collection.                                                      |
| [`GetTag`](#ObjectTags.GetTag)     | Returns the tag in the collection with the given name.                                             |
| [`IndexOf`](#ObjectTags.IndexOf)   | Returns the index of the given tag. If the given tag does not exist in the collection, returns -1. |
| [`RemoveAt`](#ObjectTags.RemoveAt) | Removes the tag at the given index from the collection.                                            |
| [`Clear`](#ObjectTags.Clear)       | Clears the collection, removing all objects from the tags in the collection.                       |
| [`Contains`](#ObjectTags.Contains) | Returns whether or not the collection contains the given tag.                                      |

### Properties

| Name | Description |
|------------------------------------|------------------------------------------|
| [`Count`](#ObjectTags.Count)       | The number of tags in the collection.    |
| [`Item`](#id0)                     | Item property.                           |
| [`Item`](#id0)                     | Item property.                           |
| [`TagNames`](#ObjectTags.TagNames) | The names of the tags in the collection. |

<a id="property-detail"></a>

## Property detail

<a id="ObjectTags.Count"></a>

### *property* ObjectTags.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of tags in the collection.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTags.Item"></a>

### *property* ObjectTags.Item *: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ObjectTags.Item *: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTags.TagNames"></a>

### *property* ObjectTags.TagNames *: System.Collections.Generic.List[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

The names of the tags in the collection.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ObjectTags.Add"></a>

### ObjectTags.Add(tag: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag))

Adds a new tag to the collection. Throws an error if the tag already exists in the collection.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTags.Remove"></a>

### ObjectTags.Remove(tag: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag))

Removes a tag if it exists in the collection.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTags.GetTag"></a>

### ObjectTags.GetTag(tagName: System.String)

Returns the tag in the collection with the given name.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTags.IndexOf"></a>

### ObjectTags.IndexOf(tag: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag))

Returns the index of the given tag. If the given tag does not exist in the collection, returns -1.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTags.RemoveAt"></a>

### ObjectTags.RemoveAt(index: System.Int32)

Removes the tag at the given index from the collection.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTags.Clear"></a>

### ObjectTags.Clear()

Clears the collection, removing all objects from the tags in the collection.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTags.Contains"></a>

### ObjectTags.Contains(tag: [Ansys.Mechanical.Application.ObjectTag](ObjectTag.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.ObjectTag))

Returns whether or not the collection contains the given tag.

<!-- !! processed by numpydoc !! -->

