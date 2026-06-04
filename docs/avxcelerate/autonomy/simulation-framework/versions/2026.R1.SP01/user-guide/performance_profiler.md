# Performance profiler

## Introduction

The Simulation Framework provides a built-in performance profiler, which can help measure the CPU resources consumed by each of your activities for a particular simulation run.

Use cases for the profiler:

1. Measure the performance for specific environments and scenario executions
2. Measure the impact of features being added or removed in user defined activities and/or fmus
3. Compare two versions of activities

## Enable and configure profiler

Based on the configuration, the data is either logged in the `.log` files or sent out to the `opentelemetry collector endpoint`.

## Basic configuration

Add the following configuration to the `simulation_scheduling` section of your configuration file:

 [1] To produce text based logs:

```json
      {
        "sim_instance_name": "test_simulation_instance",
        "profiler": 
        {
          "enabled": true
        },
```

 [2] To send metrics to your active opentelemetry collector endpoint:

```json
      {
        "sim_instance_name": "test_simulation_instance",
        "profiler": 
        {
          "enabled": true,
          "otlp_endpoint": "127.0.0.1:4318"
        },
        "activities": [
```

## Configuration parameters

The `profiler` section contains the following parameters:

| Parameter        | Type    | Required | Description                                                                                                                                                                                                                 |
| ---------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`        | boolean | Yes      | Enables or disables the profiler, `false` if not specified.                                                                                |
| `otlp_endpoint`    | string  | No      | Opentelemetry collector endpoint. [Refer: Example configuration](#example-configuration) |

- The profiler produces text based logs in the configured `output_directory` based on the configuration.

- If the opentelemetry endpoint configured is of incorrect format then the profiler will produce text based logs.

- If the `profiler` section is missing in the `simulation_scheduling` or `enabled` flag is set to `false` then the profiler stays disabled.

- If the `opentelemtry endpoint` is unreachable an error will be thrown in the CLI output. Please make sure the endpoint is ready and active before running the simulation. [Refer: Troubleshooting](#troubleshooting)

## Profiler behavior

1. **Initialisation:** All activities from simulation configuration are identified for profiling.
2. **Collect Telemetry Data:** Accumulate CPU usage times for each of the activities in the configuration during the run.
3. **Report:** CPU usage times for respective activities are reported either via text based logs or opentelemetry metrics based on your configuration.

## Example configuration

Here's a complete Simfwk configuration example:

```json
{
  "simulation_parameters": {
    "input_open_scenario": "../common/data/scenario/simple_cut_in.xosc",
    "input_user_settings": "../common/data/gtgen_usersettings/UserSettings.ini",
    "output_directory": "sim_output",
    "job_id": "autonomy_my_tpm_example"
  },
  "simulation_scheduling": {
    "sim_instance_name": "my_tpm_instance",
    "profiler": 
    {
      "enabled": true,
      "otlp_endpoint": "localhost:4318"
    },
    "activities": [
      {
        "name": "groundtruth_generator_activity",
        "is_primary_activity": true,
        "topics_cycling_info": [
          {
            "topic_id": "__all__",
            "topic_cycle_time_in_ms": 500
          }
        ],
        "type": "built-in"
      },
      {
        "name": "my_tpm_activity",
        "depends_on": ["groundtruth_generator_activity"],
        "type": "standalone"
      },
      {
        "name": "kpi_evaluator_activity",
        "depends_on": ["groundtruth_generator_activity"],
        "type": "built-in"
      },
      {
        "name": "kpi_logger_activity",
        "depends_on": ["kpi_evaluator_activity"],
        "type": "built-in"
      }
    ]
  }
}

```

## Troubleshooting

1. If your Opentelemetry metrics are not received and you see errors in the `simfwk_cli` logs as shown below, this means your opentelemetry endpoint is not accessible. Please check your connections.

```log
[Error] File: external/opentelemetry-cpp~/exporters/otlp/src/otlp_http_client.cc:213 [OTLP HTTP Client] Session state: connection failed.Failed to connect to localhost port 4318 after 0 ms: Couldn't connect to server
[Error] File: external/opentelemetry-cpp~/exporters/otlp/src/otlp_http_metric_exporter.cc:203 [OTLP METRIC HTTP Exporter] ERROR: Export 3 metric(s) error: 1
```
