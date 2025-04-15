# utility:merge supports

## Description

Assembles a set of supports into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -200** | should_merge_named_selections |[`bool`](../../getting-started/using-data-containers.md#bool) | No | For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true. |
| **Pin 0** | supports |[`vector<shared_ptr<abstract_field_support>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<abstract-field-support>>), [`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) | Yes | A vector of supports to merge or supports from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_support |[`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_supports | utility.merge_supports | merge::abstract_support | None |
