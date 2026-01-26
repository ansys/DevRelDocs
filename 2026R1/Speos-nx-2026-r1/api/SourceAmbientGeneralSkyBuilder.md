---
uid: class_speos_n_x__2512_1_1_source_ambient_general_sky_builder
title: SourceAmbientGeneralSkyBuilder
---

# SourceAmbientGeneralSkyBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `SourceAmbientCommonBuilder`

Represents the builder for an Ambient Source with CIE Standard General Sky type.

## Description

The Ambient General Sky Source Builder is used to create and edit Ambient General Sky Source features.


This sky model is based on the publication of the CIE: ISO 15469:2004/CIE S 011:2003: Spatial distribution of daylight - CIE standard general sky.


To create a new instance of this class, use `FeatureCollection::CreateSourceAmbientGeneralSkyBuilder`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `CIEType` | `str` | Gets or sets the CIE type. |
| `Luminance` | `str` | Gets or sets the luminance. |
| `SunDirection` | `str` | Gets or sets the Sun direction. |
| `SunDirectionReversed` | `str` | Gets or sets the reverse Sun direction. |
| `SunType` | `str` | Gets or sets the Sun type. |
| `Timezone` | `str` | Gets the Timezone and Location object. |
| `ZenithNorthSystem` | `str` | Gets the orientation object of the source. |
