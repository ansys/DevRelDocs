# utility:merge scopings

## Description

Assembles a set of scopings into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | scopings |[`scoping`](../getting-started/using-data-containers.md#scoping), [`scopings_container`](../getting-started/using-data-containers.md#scopings-container), [`vector<shared_ptr<scoping>>`](../getting-started/using-data-containers.md#vector<shared-ptr<scoping>>) | Yes | Either a scopings container, a vector of scopings to merge, or scopings from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_scopings | utility.merge_scopings | merge::scoping | None |
