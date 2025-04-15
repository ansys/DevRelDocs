# logic:enrich materials

## Description

Takes a MaterialContainer and a stream and enriches the MaterialContainer using stream data.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | MaterialContainer | | Yes |  |
| **Pin 1** | streams |[`streams_container`](../getting-started/using-data-containers.md#streams-container), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 2** | streams_mapping |[`property_fields_container`](../getting-started/using-data-containers.md#property-fields-container) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | MaterialContainer |[`bool`](../getting-started/using-data-containers.md#bool) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **logic** | core | enrich_materials | logic.enrich_materials | enrich_materials | any_dpf_supported_increments |
