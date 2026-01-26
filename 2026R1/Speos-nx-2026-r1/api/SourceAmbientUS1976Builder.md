---
uid: class_speos_n_x__2512_1_1_source_ambient_u_s1976_builder
title: SourceAmbientUS1976Builder
---

# SourceAmbientUS1976Builder Class

**Namespace:** `SpeosNX`

**Inherits from:** `SourceAmbientCommonBuilder`

Represents the builder for an U.S Standard Atmosphere 1976 Source.

## Description

The Ambient US1976 Sky Source Builder is used to create and edit Ambient US1976 Sky Source features.


The U.S Standard Atmosphere 1976 source allows you to generate light from the sky according to a time and location. With this source, signals can be collected outside the visible spectrum including in the infrared.


To create a new instance of this class, use `FeatureCollection::CreateSourceAmbientUS1976Builder`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `SunDirection` | `str` | Gets or sets the Sun direction. |
| `SunDirectionReversed` | `str` | Gets or sets the reverse Sun direction. |
| `SunType` | `str` | Gets or sets the Sun type. |
| `Timezone` | `str` | Gets the Timezone and Location object. |
| `ZenithNorthSystem` | `str` | Gets the orientation object of the source. |
