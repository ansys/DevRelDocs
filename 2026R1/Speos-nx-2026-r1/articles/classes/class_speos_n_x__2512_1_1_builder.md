---
uid: builder
title: Builder
---

# Builder

**Full Name**: `SpeosNX_2512::Builder`

**Language**: Python

**Inherits from**: `object`

**Derived classes**: `CopyPasteBuilder`, `ExportAsGeometryBuilder`, `FeatureBuilder`, `NewComponentBuilder`

## Description

A base class for all Builders.

A Builder is an object that is used to create and edit Features.


This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.


This is an abstract class, and cannot be instantiated.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 9408*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 9412*

---

## Public Methods

#### `Commit(self)`

`public`

Commits any edits that have been applied to the builder.

Commits any edits that have been applied to the feature being edited, or a new feature if the builder is being used in creation mode.

*Defined in `SpeosNX_2512.py` at line 9415*

---

## Member Summary

| Member | Type |
|--------|------|
| `Commit` | public |
| `thisown` | public |
