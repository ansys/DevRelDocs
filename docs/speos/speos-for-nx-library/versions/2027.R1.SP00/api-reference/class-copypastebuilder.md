# CopyPasteBuilder

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Builder["Builder"]
    click Builder "class-builder.md" "Open Builder"
    CopyPasteBuilder["CopyPasteBuilder"]
    click CopyPasteBuilder "class-copypastebuilder.md" "Open CopyPasteBuilder"
    Builder --> CopyPasteBuilder
```

**Classes:**

- [Builder](class-builder.md)
- [CopyPasteBuilder](class-copypastebuilder.md)

## Description

Represents a Copy/Paste Builder.

## Member Summary

| Member | Type |
| --- | --- |
| [Feature](#feature) | public |

## Public Static Attributes

### Feature

`Builder Feature`

Returns the copy of the feature.

If the builder has not yet been commited, returns Null.
