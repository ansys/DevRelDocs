# Simulation Configuration

The Simulation Framework command-line interface (`simfwk_cli`) serves as the primary entry point for executing a simulation loop using the Simulation Framework.

To align with AVxcelerate Architecture 2.0, `simfwk_cli` now requires a single mandatory simulation configuration file in JSON format. This file is referred to as the "solver setting configuration" throughout this documentation and represents the simulation configuration file.

To perform a quick test with the default solver setting configuration, use the following command:

```bash
cd simulation_framework/bin
./simfwk_cli -s solver_setting_configuration.json
```

As shown above, the minimum input required to run the simulation is a single configuration file. This configuration file is defined in JSON format and contains two mandatory fields.

## "simulation_parameters"
```json
    "simulation_parameters": {
        "input_open_scenario": "../data/test_scenario_simple_cut_in.xosc",
        "input_driver_input": "../data/driver_input_default.json",
        "input_user_settings": "../data/UserSettings.ini",
        "output_directory": "/tmp/simfwk-out",
        "job_id": "simulation_framework"
    },
```

Mandatory parameters:

- `input_open_scenario`: Specifies the file containing the autonomy simulation scenario.
- `output_directory`: Specifies the directory where simulation outputs will be saved.

Optional parameters:
- `input_driver_input`: Defines the file for driver's input data. This file will be used if "dummy_driver_activity" is applied in scheduling configuration. If not given, a default input driver file will be generated under path `"/tmp/simulation_framework/default_data/driver_input_default.json"` and be applied for simulation.
- `input_user_settings`: Provides the file containing user-specific settings for Gt-gen. This becomes a mandatory parameter if "groundtruth_generator_activity" is applied in scheduling configuration. If other customized world simulator is used, this can be ignored.
- `job_id`: A string describes the simulation instance

Note: If relative paths are used for files or the output directory, they must be relative to the `simfwk_cli` binary, located in the `bin` folder.

## "simulation_scheduling"
This section is specifically designed for setting up simulation scheduling. It allows users to define the Activities and configure their behavior during simulations. Below is an example of `simulation_scheduling`.

For a detailed explanation, please refer to the dedicated chapter: [Simulation Scheduling](../documentation/markdown/simulation_scheduling.md).


```json
    "simulation_scheduling": {
        "sim_instance_name": "gt_gen_with_driver_and_kpi_logger",
        "foxglove":
        {
            "data_streaming": true,
            "host_name": "localhost",
            "port": 8700
        },
        "save_mcap": true,   
        "activities": [
            {
                "name": "groundtruth_generator_activity",
                "is_primary_activity": true,
                "topics_cycling_info": [
                    {
                        "topic_id": "__all__",
                        "topic_cycle_time_in_ms": 200
                    }
                ],
                "type": "built-in"
            },
            {
                "name": "dummy_tpm_activity",
                "depends_on": [
                    "groundtruth_generator_activity"
                ],
                "type": "built-in"
            },
            {
                "name": "dummy_driver_activity",
                "depends_on": [
                    "groundtruth_generator_activity"
                ],
                "type": "built-in"
            },
            {
                "name": "kpi_evaluator_activity",
                "depends_on": [
                    "dummy_driver_activity"
                ],
                "type": "built-in"
            },
            {
                "name": "kpi_logger_activity",
                "depends_on": [
                    "kpi_evaluator_activity"
                ],
                "type": "built-in"
            }
        ]
    }
```

## Running Simulation Framework using the CLI executable
Different arguments can be passed as options to configure the simulation:

```txt
usage:
  simfwk_cli <name1:value1 name2:value2 ...> (Customized parameters for simulation in 
  pattern 'name:value'. For more than one parameter, please separate them with spaces. 
  Note: Parameter name and value should not exceed 64 and 1024 bytes respectively.) <options>
where options are:
  -?, -h, --help                            Display usage information
  -v, --version                             Prints application version information
  -s, --simulation-config <simulation       Mandatory argument to specify the
  setup/configuration file>                 parameters of autonomy simulation
                                            configuration and parameters
  -c, --control-mode <If using CLI          Optional argument to specify if
  controller for simfwk>                    the cli client should be enabled
  -g, --cli-grpc-channel <cli controller    Optional argument to specify the
  grpc channel's IP address>                 cli server/controller grpc
                                            channel's IP address
  -t, --timeout <Timeout for simfwk         Optional integer argument to set
  scheduler events in milliseconds>         the scheduling event timeout in
                                            milliseconds
  -f, --time-scaling-factor <Time           Optional float argument to set
  Scaling Factor>                           the speed at which the simulation
                                            runs relative to real-time.
                                            Possible values:
                                                1.0: Real-time.
                                              < 1.0: Slower than real-time.
                                              > 1.0: Faster than real-time.
                                               -1.0: (default) As fast as
                                            system performance and resources
                                            allow. Entering a negative value
                                            requires an '='. E.g., `-f=-1.0`.
                                            All values <= 0 will result in
                                            the default behaviour.
```

where `-s <simulation_configuration.json>` is the only mandatory argument. If extra parameters are required by customized autonomy simulation, they can be given through the CLI. Thus, the file path can be retrieved by using the getter API of any activity. More explanation about the getter API in activities can be found [here](../documentation/markdown/customized_activity.md).

E.g. if you want a file named "file_foo" with path "path/to/file_foo.txt", the following command can be given using the CLI:
```bash
./simfwk_cli file_foo:path/to/file_foo.txt -s your_solver_settings_configuration.json
```

If other types of parameters are required by your simulation, the same pattern should be followed. Note that the assigned value is only retrievable as a string; you must cast it to the expected type. For details, please refer to the Activity API `GetCustomizedParameters()`.
```bash
./simfwk_cli file_foo:path/to/file_foo.txt integer_foo:1234 boolean_foo:true -s your_solver_settings_configuration.json
```

## Batch Mode Usage

If you want to execute the scenario and simply have the output, `simfwk_cli` can be executed using the command below:

```bash
./simfwk_cli -s your_solver_settings_configuration.json
```

## Interactive Usage

Additionally, you can trigger the cli controller mode by option `-c true`

```bash
./simfwk_cli -s your_solver_settings_configuration.json -c true
```

this enables the user control of simulation framework via `cli_controller`, instead of just running through of your scenario. With the `cli controller` , the user can send commands like `run` , `pause` , `resume` , `restart` , `step` or `kill` , to interact with simulation.

## Interact with simulation using the cli_controller

When the `-c true` is applied, a server will be created for listening to the user command. To control the simulation, following command are available:

```bash
./cli_controller <user command>
```

Supported commands:

```txt
[run]      : trigger the execution of the simulation, it will continue running until the simulation is done
[step]     : step the simulation for a given count. For example, "step 5" steps the simulation 5 times (default is 1 time)
[pause]    : pause the simulation and wait for a user command
[resume]   : resume the simulation
[kill]     : kill the program
[restart]  : restart the simulation from the initial state and wait for a user command
[help]     : display usage information
```

## Example

* First start your simulation and enable user control:

```bash
./simfwk_cli -s your_solver_settings_configuration.json -c true
```

* Then you will see following message in the console, if the default controller port is not changed:

```bash
[DEBUG][Cli] simulation with cli controller is enabled! Trying to start simulation with setup and connect with simfwk core server at IP address 0.0.0.0:50051 with client at IP address localhost:50051
SimfwkCliServer started: listening on IP 0.0.0.0:50051
```

* Open a new terminal, and try trigger the simulation:

```bash
./cli_controller run
```

* After a successful execution, the console shows `Cli Controller Execution Status OK!`. Then you can see the simulation has started.

```bash
[DEBUG][CliCommandProcessor] received action from cli controller
[INFO ][SimRunner] Starting simulation.
```

__Note: In this control mode, the simulation process `simfwk_cli` will not terminate unless you send `kill` from the cli_controller or manually press `ctrl+c`__.
