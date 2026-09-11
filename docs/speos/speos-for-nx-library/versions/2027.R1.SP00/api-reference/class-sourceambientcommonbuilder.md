# SourceAmbientCommonBuilder

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Builder["Builder"]
    click Builder "class-builder.md" "Open Builder"
    FeatureBuilder["FeatureBuilder"]
    click FeatureBuilder "class-featurebuilder.md" "Open FeatureBuilder"
    SourceAmbientCommonBuilder["SourceAmbientCommonBuilder"]
    click SourceAmbientCommonBuilder "class-sourceambientcommonbuilder.md" "Open SourceAmbientCommonBuilder"
    SourceAmbientGeneralSkyBuilder["SourceAmbientGeneralSkyBuilder"]
    click SourceAmbientGeneralSkyBuilder "class-sourceambientgeneralskybuilder.md" "Open SourceAmbientGeneralSkyBuilder"
    SourceAmbientNaturalLightBuilder["SourceAmbientNaturalLightBuilder"]
    click SourceAmbientNaturalLightBuilder "class-sourceambientnaturallightbuilder.md" "Open SourceAmbientNaturalLightBuilder"
    SourceAmbientOvercastSkyBuilder["SourceAmbientOvercastSkyBuilder"]
    click SourceAmbientOvercastSkyBuilder "class-sourceambientovercastskybuilder.md" "Open SourceAmbientOvercastSkyBuilder"
    SourceAmbientUniformBuilder["SourceAmbientUniformBuilder"]
    click SourceAmbientUniformBuilder "class-sourceambientuniformbuilder.md" "Open SourceAmbientUniformBuilder"
    SourceAmbientUS1976Builder["SourceAmbientUS1976Builder"]
    click SourceAmbientUS1976Builder "class-sourceambientus1976builder.md" "Open SourceAmbientUS1976Builder"
    FeatureBuilder --> SourceAmbientCommonBuilder
    SourceAmbientCommonBuilder --> SourceAmbientGeneralSkyBuilder
    SourceAmbientCommonBuilder --> SourceAmbientNaturalLightBuilder
    SourceAmbientCommonBuilder --> SourceAmbientOvercastSkyBuilder
    SourceAmbientCommonBuilder --> SourceAmbientUniformBuilder
    SourceAmbientCommonBuilder --> SourceAmbientUS1976Builder
    Builder --> FeatureBuilder
```

**Classes:**

- [Builder](class-builder.md)
- [FeatureBuilder](class-featurebuilder.md)
- [SourceAmbientCommonBuilder](class-sourceambientcommonbuilder.md)
- [SourceAmbientGeneralSkyBuilder](class-sourceambientgeneralskybuilder.md)
- [SourceAmbientNaturalLightBuilder](class-sourceambientnaturallightbuilder.md)
- [SourceAmbientOvercastSkyBuilder](class-sourceambientovercastskybuilder.md)
- [SourceAmbientUniformBuilder](class-sourceambientuniformbuilder.md)
- [SourceAmbientUS1976Builder](class-sourceambientus1976builder.md)

## Description

A base class for all Ambient Source Builders.
