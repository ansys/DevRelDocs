---
category: {{ scripting_info.category }}
plugin: {{ scripting_info.plugin }}
license: {{ scripting_info.license }}
---

# {{ operator_name }}

## Description

{{ operator_description }}


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
{%- for input in inputs %}
| {% if not input.optional %}<strong>Pin {{ input.pin_number }}</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>{% else %}<strong>Pin {{ input.pin_number }}</strong>{% endif %}|  {{ input.name }} |
{%- for t in input.types -%}
[`{{ t }}`](../../getting-started/using-data-containers.md#{{ t | replace("_", "-") | replace(" ", "-") | lower}}){% if not loop.last %}, {% endif %} 
{%- endfor %} | {{ input.document }} |
{%- endfor %}


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
{%- for output in outputs %}
|  **Pin {{ output.pin_number }}**| {{ output.name }} |
{%- for t in output.types -%}
[`{{ t }}`](../../getting-started/using-data-containers.md#{{ t | replace("_", "-") | replace(" ", "-") | lower }}){% if not loop.last %}, {% endif %}
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

 **Category**: {{ scripting_info.category }}

 **Plugin**: {{ scripting_info.plugin }}

 **Scripting name**: {{ scripting_info.scripting_name }}

 **Full name**: {{ scripting_info.full_name }}

 **Internal name**: {{ scripting_info.internal_name }}

 **License**: {{ scripting_info.license }}

