# utility:weighted merge fields by label

## Description

Performs a weighted merge on fields of a fields container that share the same label value.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | label |[`string`](../getting-started/using-data-containers.md#string) | Yes | Label identifier that should be merged. |
| **Pin 2** | merged_field_support |[`abstract_field_support`](../getting-started/using-data-containers.md#abstract-field-support) | No | The FieldsContainer's support that has already been merged. |
| **Pin 3** | sum_merge |[`bool`](../getting-started/using-data-containers.md#bool) | No | Default is false. If true, redundant quantities are summed instead of being ignored. |
| **Pin 1000** | weights |[`vector<shared_ptr<class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>>>`](../getting-started/using-data-containers.md#vector<shared-ptr<class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>>>), [`property_field`](../getting-started/using-data-containers.md#property-field) | Yes | Weights to apply to each field from pin 1000 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | weighted_merge_fields_by_label | utility.weighted_merge_fields_by_label | merge::weighted_fields_container_label | None |
