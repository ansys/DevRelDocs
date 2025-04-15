# utility:merge weighted fields containers

## Description

Assembles a set of fields containers into a unique one, applying a weight on the sum of the fields.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -3** | sum_merge |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Default is false. If true, redundant quantities are summed instead of being ignored. |
| **Pin -2** | merged_fields_support |[`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) | No | Already merged field support. |
| **Pin -1** | merged_fields_containers_support |[`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support), [`umap<string,shared_ptr<abstract_field_support>>`](../../getting-started/using-data-containers.md#umap<string,shared-ptr<abstract-field-support>>) | No | Already merged fields containers support. |
| **Pin 0** | fields_containers |[`vector<shared_ptr<fields_container>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<fields-container>>), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | A vector of fields containers to merge or fields containers from pin 0 to ... |
| **Pin 1000** | weights |[`vector<shared_ptr<class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<class-dataProcessing::DpfTypeCollection<class-dataProcessing::CPropertyField>>>), [`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes | Weights to apply to each field from pin 1000 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin read_inputs_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_weighted_fields_containers | utility.merge_weighted_fields_containers | merge::weighted_fields_container | None |
