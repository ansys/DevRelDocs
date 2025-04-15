# {{ operator_name }}

## Description

{{ operator_description }}

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
{%- for input in inputs %}
| **Pin {{ input.pin_number }}** | {{ input.name }} |
{%- for t in input.types -%}
[`{{ t }}`](../getting-started/using-data-containers.md#{{ t | replace("_", "-") }}){% if not loop.last %}, {% endif %}
{%- endfor %} | {% if input.optional %}No{% else %}Yes{% endif %} | {{ input.document }} |
{%- endfor %}

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
{%- for output in outputs %}
| **Pin {{ output.pin_number }}** | {{ output.name }} |
{%- for t in output.types -%}
[`{{ t }}`](../getting-started/using-data-containers.md#{{ t | replace("_", "-") }}){% if not loop.last %}, {% endif %}
{%- endfor %} | {% if output.optional %}No{% else %}Yes{% endif %} | {{ output.document }} |
{%- endfor %}

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
{%- for configuration in configurations %}
| **Pin {{ configuration.name }}** |
{%- for t in configuration.types -%}
[`{{ t }}`](../getting-started/using-data-containers.md#{{ t | replace("_", "-") }}){% if not loop.last %}, {% endif %}
{%- endfor %} | {{ configuration.default_value }} | {{ configuration.document }} |
{%- endfor %}

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
{{range .scripting_info -}}
| **{{ scripting_info.category }}** | {{ scripting_info.plugin }} | {{  scripting_info.scripting_name }} | {{ scripting_info.full_name  }} | {{ scripting_info.internal_name  }} | {{ scripting_info.license  }} |
{{endfor}}
