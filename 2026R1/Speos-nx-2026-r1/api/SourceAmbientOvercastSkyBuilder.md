---
uid: class_speos_n_x__2512_1_1_source_ambient_overcast_sky_builder
title: SourceAmbientOvercastSkyBuilder
---

# SourceAmbientOvercastSkyBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `SourceAmbientCommonBuilder`

Represents the builder for an Ambient Source with CIE Standard Overcast Sky type.

## Description

The Ambient Overcast Sky Source Builder is used to create and edit Ambient Overcast Sky Source features.


This sky model is based on the publication of the CIE: ISO 15469:2004/CIE S 011:2003: Spatial distribution of daylight - CIE standard general sky.


To create a new instance of this class, use `FeatureCollection::CreateSourceAmbientOvercastSkyBuilder`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Luminance` | `str` | Gets or sets the luminance. |
| `Spectrum` | `str` | Gets or sets the spectrum type. |
| `SpectrumFilePath` | `str` | Gets or sets the spectrum file path. |
| `Temperature` | `str` | Gets or sets the temperature. |
| `ZenithDirection` | `str` | Gets or sets the zenith direction. |
| `ZenithDirectionReversed` | `str` | Gets or sets the reverse zenith direction. |
