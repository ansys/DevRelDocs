# `Messages`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Messages"></a>

#### *class* Ansys.Mechanical.Application.Messages

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines the collection of Mechanical's messages.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|--------------------------------------------------------|-----------------------------|
| [`OnAddMessageFwd`](#Messages.OnAddMessageFwd)         | OnAddMessageFwd method.     |
| [`add_OnAddMessage`](#Messages.add_OnAddMessage)       | add_OnAddMessage method.    |
| [`remove_OnAddMessage`](#Messages.remove_OnAddMessage) | remove_OnAddMessage method. |

### Methods

| Name | Description |
|----------------------------------------------------------|--------------------------------------------------------|
| [`Add`](#Messages.Add)                                   | Add a new message.                                     |
| [`Clear`](#Messages.Clear)                               | Clear the list of the messages.                        |
| [`Contains`](#Messages.Contains)                         | Check if a message is in the current list of messages. |
| [`CopyTo`](#Messages.CopyTo)                             | CopyTo method.                                         |
| [`CountErrorMessages`](#Messages.CountErrorMessages)     | CountErrorMessages method.                             |
| [`CountInfoMessages`](#Messages.CountInfoMessages)       | CountInfoMessages method.                              |
| [`CountWarningMessages`](#Messages.CountWarningMessages) | CountWarningMessages method.                           |
| [`GetEnumerator`](#Messages.GetEnumerator)               | GetEnumerator method.                                  |
| [`HideErrorMessages`](#Messages.HideErrorMessages)       | HideErrorMessages method.                              |
| [`HideInfoMessages`](#Messages.HideInfoMessages)         | HideInfoMessages method.                               |
| [`HidePopUps`](#Messages.HidePopUps)                     | HidePopUps method.                                     |
| [`HideWarningMessages`](#Messages.HideWarningMessages)   | HideWarningMessages method.                            |
| [`MergeMessages`](#Messages.MergeMessages)               | MergeMessages method.                                  |
| [`Remove`](#Messages.Remove)                             | Remove a specific message in the list.                 |
| [`ShowErrorMessages`](#Messages.ShowErrorMessages)       | ShowErrorMessages method.                              |
| [`ShowErrors`](#Messages.ShowErrors)                     | Shows errors with current project.                     |
| [`ShowInfoMessages`](#Messages.ShowInfoMessages)         | ShowInfoMessages method.                               |
| [`ShowPopUps`](#Messages.ShowPopUps)                     | ShowPopUps method.                                     |
| [`ShowWarningMessages`](#Messages.ShowWarningMessages)   | ShowWarningMessages method.                            |
| [`UnmergeMessages`](#Messages.UnmergeMessages)           | UnmergeMessages method.                                |

### Properties

| Name | Description |
|--------------------------------------------------------|--------------------------------|
| [`AllVisibleMessages`](#Messages.AllVisibleMessages)   | AllVisibleMessages property.   |
| [`Count`](#Messages.Count)                             | Get the number of messages.    |
| [`IsReadOnly`](#Messages.IsReadOnly)                   | IsReadOnly property.           |
| [`Item`](#Messages.Item)                               | Item property.                 |

<a id="property-detail"></a>

## Property detail

<a id="Messages.AllVisibleMessages"></a>

### *property* Messages.AllVisibleMessages *: List[[Ansys.Mechanical.Application.Message](Message.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Message)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AllVisibleMessages property.

<!-- !! processed by numpydoc !! -->

<a id="Messages.Count"></a>

### *property* Messages.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the number of messages.

<!-- !! processed by numpydoc !! -->

<a id="Messages.IsReadOnly"></a>

### *property* Messages.IsReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsReadOnly property.

<!-- !! processed by numpydoc !! -->

<a id="Messages.Item"></a>

### *property* Messages.Item *: [Ansys.Mechanical.Application.Message](Message.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Message) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Messages.Add"></a>

### Messages.Add(item: [Ansys.Mechanical.Application.Message](Message.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Message)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Add a new message.

<!-- !! processed by numpydoc !! -->

<a id="Messages.Clear"></a>

### Messages.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear the list of the messages.

<!-- !! processed by numpydoc !! -->

<a id="Messages.Contains"></a>

### Messages.Contains(item: [Ansys.Mechanical.Application.Message](Message.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Message)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Check if a message is in the current list of messages.

<!-- !! processed by numpydoc !! -->

<a id="Messages.CopyTo"></a>

### Messages.CopyTo(array: [Ansys.Mechanical.Application.Message](Message.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Message), arrayIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.CountErrorMessages"></a>

### Messages.CountErrorMessages() → [int](https://docs.python.org/3/builtins/functions.html#int)

CountErrorMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.CountInfoMessages"></a>

### Messages.CountInfoMessages() → [int](https://docs.python.org/3/builtins/functions.html#int)

CountInfoMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.CountWarningMessages"></a>

### Messages.CountWarningMessages() → [int](https://docs.python.org/3/builtins/functions.html#int)

CountWarningMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.GetEnumerator"></a>

### Messages.GetEnumerator() → Ansys.Mechanical.Application.MessageList

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.HideErrorMessages"></a>

### Messages.HideErrorMessages() → [None](https://docs.python.org/3/builtins/constants.html#None)

HideErrorMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.HideInfoMessages"></a>

### Messages.HideInfoMessages() → [None](https://docs.python.org/3/builtins/constants.html#None)

HideInfoMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.HidePopUps"></a>

### Messages.HidePopUps() → [None](https://docs.python.org/3/builtins/constants.html#None)

HidePopUps method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.HideWarningMessages"></a>

### Messages.HideWarningMessages() → [None](https://docs.python.org/3/builtins/constants.html#None)

HideWarningMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.MergeMessages"></a>

### Messages.MergeMessages() → [None](https://docs.python.org/3/builtins/constants.html#None)

MergeMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.OnAddMessageFwd"></a>

### *classmethod* Messages.OnAddMessageFwd(sender: Any, args: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

OnAddMessageFwd method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.Remove"></a>

### Messages.Remove(item: [Ansys.Mechanical.Application.Message](Message.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Message)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Remove a specific message in the list.

<!-- !! processed by numpydoc !! -->

<a id="Messages.ShowErrorMessages"></a>

### Messages.ShowErrorMessages() → [None](https://docs.python.org/3/builtins/constants.html#None)

ShowErrorMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.ShowErrors"></a>

### Messages.ShowErrors() → [None](https://docs.python.org/3/builtins/constants.html#None)

Shows errors with current project.

<!-- !! processed by numpydoc !! -->

<a id="Messages.ShowInfoMessages"></a>

### Messages.ShowInfoMessages() → [None](https://docs.python.org/3/builtins/constants.html#None)

ShowInfoMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.ShowPopUps"></a>

### Messages.ShowPopUps() → [None](https://docs.python.org/3/builtins/constants.html#None)

ShowPopUps method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.ShowWarningMessages"></a>

### Messages.ShowWarningMessages() → [None](https://docs.python.org/3/builtins/constants.html#None)

ShowWarningMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.UnmergeMessages"></a>

### Messages.UnmergeMessages() → [None](https://docs.python.org/3/builtins/constants.html#None)

UnmergeMessages method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.add_OnAddMessage"></a>

### *classmethod* Messages.add_OnAddMessage(value: System.EventHandler[[Ansys.Mechanical.Application.Message](Message.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Message)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnAddMessage method.

<!-- !! processed by numpydoc !! -->

<a id="Messages.remove_OnAddMessage"></a>

### *classmethod* Messages.remove_OnAddMessage(value: System.EventHandler[[Ansys.Mechanical.Application.Message](Message.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Message)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnAddMessage method.

<!-- !! processed by numpydoc !! -->

