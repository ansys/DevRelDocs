# Builder

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Builder["Builder"]
    click Builder "class-builder.md" "Open Builder"
    CopyPasteBuilder["CopyPasteBuilder"]
    click CopyPasteBuilder "class-copypastebuilder.md" "Open CopyPasteBuilder"
    ExportAsGeometryBuilder["ExportAsGeometryBuilder"]
    click ExportAsGeometryBuilder "class-exportasgeometrybuilder.md" "Open ExportAsGeometryBuilder"
    FeatureBuilder["FeatureBuilder"]
    click FeatureBuilder "class-featurebuilder.md" "Open FeatureBuilder"
    NewComponentBuilder["NewComponentBuilder"]
    click NewComponentBuilder "class-newcomponentbuilder.md" "Open NewComponentBuilder"
    Builder --> CopyPasteBuilder
    Builder --> ExportAsGeometryBuilder
    Builder --> FeatureBuilder
    Builder --> NewComponentBuilder
```

**Classes:**

- [Builder](class-builder.md)
- [CopyPasteBuilder](class-copypastebuilder.md)
- [ExportAsGeometryBuilder](class-exportasgeometrybuilder.md)
- [FeatureBuilder](class-featurebuilder.md)
- [NewComponentBuilder](class-newcomponentbuilder.md)

## Description

A base class for all Builders.

## Member Summary

| Member | Type |
| --- | --- |
| [Commit](#commit) | public |

## Public Member Functions

### Commit

`void Commit(self)`

Commits any edits that have been applied to the builder.

Commits any edits that have been applied to the feature being edited, or a new feature if the builder is being used in creation mode.
