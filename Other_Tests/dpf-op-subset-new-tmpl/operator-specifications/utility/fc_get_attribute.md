# utility:fields container get attribute

## Description

Uses the FieldsContainer APIs to return a given attribute of the mesh in input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | property_name |[`string`](../../getting-started/using-data-containers.md#string) | Yes | Supported property names are: "label_scoping", "label_values", "time_freq_support", "labels", "field_scoping" . |
| **Pin 2** | property_identifier |[`string`](../../getting-started/using-data-containers.md#string), [`int32`](../../getting-started/using-data-containers.md#int32) | No | Additional pin for some property : the label name for "label_scoping" or "label_values", the field index (default 0) for "field_scoping". |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | property |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support), [`vector<string>`](../../getting-started/using-data-containers.md#vector<string>), [`label_space`](../../getting-started/using-data-containers.md#label-space) | Yes | Returns a Scoping for property: "label_scoping", a vector of int for "label_values", a time freq support for "time_freq_support", a vector of string for "labels", a LabelSpace for "field_scoping". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | fc_get_attribute | utility.fc_get_attribute | fieldscontainer::get_attribute | None |
