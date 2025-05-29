---
category: {{ scripting_info.category }}
plugin: {{ scripting_info.plugin }}
license: {{ scripting_info.license }}
---

# {{ operator_name }}

## Description

{{ operator_description }}

### Plugin

{{ scripting_info.plugin }}

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
{%- for input in inputs %}
| **Pin {{ input.pin_number }}** | {{ input.name }} |
{%- for t in input.types -%}
[`{{ t }}`](../../getting-started/using-data-containers.md#{{ t | replace("_", "-") | replace(" ", "-") | lower}}){% if not loop.last %}, {% endif %}
{%- endfor %} | {% if input.optional %}No{% else %}Yes{% endif %} | {{ input.document }} |
{%- endfor %}

## Outputs

<!--| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
{%- for output in outputs %}
| **Pin {{ output.pin_number }}** | {{ output.name }} |
{%- for t in output.types -%}
[`{{ t }}`](../../getting-started/using-data-containers.md#{{ t | replace("_", "-") | replace(" ", "-") | lower}}){% if not loop.last %}, {% endif %}
{%- endfor %} | {% if output.optional %}No{% else %}Yes{% endif %} | {{ output.document }} |
{%- endfor %}-->

| Input | Required | Name | Expected type(s) | Description |
|-------|----------|------|------------------|-------------|
{%- for output in outputs %}
| **Pin {{ output.pin_number }}** | {% if output.optional %}No{% else %}Yes{% endif %} | {{ output.name }} |
{%- for t in output.types -%}
[`{{ t }}`](../../getting-started/using-data-containers.md#{{ t | replace("_", "-") | replace(" ", "-") | lower}}){% if not loop.last %}, {% endif %} |
{%- endfor %} | {{ output.document }} |
{%- endfor %}




## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
{%- for configuration in configurations %}
| **{{ configuration.name }}** |
{%- for t in configuration.types -%}
[`{{ t }}`](../../getting-started/using-data-containers.md#{{ t | replace("_", "-") | replace(" ", "-") | lower}}){% if not loop.last %}, {% endif %}
{%- endfor %} | {{ configuration.default_value }} | {{ configuration.document }} |
{%- endfor %}

## Scripting

<!--| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
{{range .scripting_info -}}
| **{{ scripting_info.category }}** | {{ scripting_info.plugin }} | {{  scripting_info.scripting_name }} | {{ scripting_info.full_name  }} | {{ scripting_info.internal_name  }} | {{ scripting_info.license  }} |
{{endfor}}-->

- Category: {{ scripting_info.category }}
- Plugin: {{ scripting_info.plugin }}
- Scripting name: {{ scripting_info.scripting_name }}
- Full name: {{ scripting_info.full_name }}
- Internal name: {{ scripting_info.internal_name }}
- License: {{ scripting_info.license }}
