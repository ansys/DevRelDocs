# SourceGroupBuilder

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Builder["Builder"]
    click Builder "class-builder.md" "Open Builder"
    FeatureBuilder["FeatureBuilder"]
    click FeatureBuilder "class-featurebuilder.md" "Open FeatureBuilder"
    SourceGroupBuilder["SourceGroupBuilder"]
    click SourceGroupBuilder "class-sourcegroupbuilder.md" "Open SourceGroupBuilder"
    FeatureBuilder --> SourceGroupBuilder
    Builder --> FeatureBuilder
```

**Classes:**

- [Builder](class-builder.md)
- [FeatureBuilder](class-featurebuilder.md)
- [SourceGroupBuilder](class-sourcegroupbuilder.md)

## Description

Represents a Source Group Builder.

The Source Group Builder is used to group several sources in the same group.  
  
To create a new instance of this class, use [FeatureCollection::CreateSourceGroupBuilder](class-featurecollection.md#createsourcegroupbuilder)

## Member Summary

| Member | Type | Description |
| --- | --- | --- |
| [Sources](#sources) | public | Gets source features. |
| [AddSources](#addsources) | public | Adds sources into the simulation. |
| [RemoveSources](#removesources) | public | Deletes sources from the simulation. |

## Public Static Attributes

### Sources

`list[Feature] Sources`

Gets source features.

Gets the current source features that are in the simulation.  
  
**Value type**: List of Feature object.

## Public Member Functions

### AddSources

`void AddSources(self, sources)`

Adds sources into the simulation.

**Parameters**:

- `list[Feature] sources`: List of Feature object

**Returns**: void.

---

### RemoveSources

`void RemoveSources(self, sources)`

Deletes sources from the simulation.

**Parameters**:

- `list[Feature] sources`: List of Feature object

**Returns**: void.
