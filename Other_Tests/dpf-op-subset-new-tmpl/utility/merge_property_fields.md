# utility:merge property fields

## Description

Assembles a set of property fields into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | vector<shared_ptr<property_field>> |[`vector<shared_ptr<property_field>>`](../getting-started/using-data-containers.md#vector<shared-ptr<property-field>>), [`property_field`](../getting-started/using-data-containers.md#property-field), [`property_fields_container`](../getting-started/using-data-containers.md#property-fields-container) | Yes | Either a property fields container, a vector of property fields to merge or property fields from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | property_field |[`property_field`](../getting-started/using-data-containers.md#property-field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_property_fields | utility.merge_property_fields | merge::property_field | None |
