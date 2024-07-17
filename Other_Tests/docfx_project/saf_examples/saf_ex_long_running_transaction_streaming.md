# Long-running transaction streaming uploads

<a id="saf-ex-long-running-trans-summary"></a>
> ##### Summary
> 
> Use a long-running transaction to upload data as the transaction executes, coupled with
> page monitoring and progress display.

<a id="saf-ex-long-running-trans-objective"></a>

<a id="svg-version-4-0-0-63c5cb3-width-1-25em-height-1-25em-class-sd-material-icon-sd-material-icon-ads-click-sd-text-secondary-viewbox-0-0-20-20-aria-hidden-true-rect-fill-none-height-20-width-20-rect-path-d-m17-09-18-5l-3-47-3-47l12-5-18l10-10l8-2-5l-2-97-1-11l3-47-3-47l17-09-18-5z-m10-3-5c-3-58-0-6-5-2-92-6-5-6-5-s2-92-6-5-6-5-6-5c0-15-0-0-3-0-01-0-45-0-02l0-46-1-46c10-61-17-98-10-31-18-10-18c-4-42-0-8-3-58-8-8s3-58-8-8-8l0-0-c4-42-0-8-3-58-8-8c0-0-31-0-02-0-61-0-05-0-91l-1-46-0-46c0-01-0-15-0-02-0-3-0-02-0-45c16-5-6-42-13-58-3-5-10-3-5-m10-6-5-c-1-93-0-3-5-1-57-3-5-3-5c0-1-76-1-31-3-23-3-01-3-47l10-15c0-0-0-01-0-0-01-0c7-23-15-5-12-76-5-10c0-2-76-2-24-5-5-5l0-0-c2-76-0-5-2-23-5-4-99c0-0-0-0-01-0-0-01l-1-53-0-49c13-23-7-81-11-76-6-5-10-6-5-path-svg-objective"></a>

## <svg version="4.0.0.63c5cb3" width="1.25em" height="1.25em" class="sd-material-icon sd-material-icon-ads_click sd-text-secondary" viewBox="0 0 20 20" aria-hidden="true"><rect fill="none" height="20" width="20"></rect><path d="M17.09,18.5l-3.47-3.47L12.5,18L10,10l8,2.5l-2.97,1.11l3.47,3.47L17.09,18.5z M10,3.5c-3.58,0-6.5,2.92-6.5,6.5 s2.92,6.5,6.5,6.5c0.15,0,0.3-0.01,0.45-0.02l0.46,1.46C10.61,17.98,10.31,18,10,18c-4.42,0-8-3.58-8-8s3.58-8,8-8l0,0 c4.42,0,8,3.58,8,8c0,0.31-0.02,0.61-0.05,0.91l-1.46-0.46c0.01-0.15,0.02-0.3,0.02-0.45C16.5,6.42,13.58,3.5,10,3.5 M10,6.5 c-1.93,0-3.5,1.57-3.5,3.5c0,1.76,1.31,3.23,3.01,3.47L10,15c0,0-0.01,0-0.01,0C7.23,15,5,12.76,5,10c0-2.76,2.24-5,5-5l0,0 c2.76,0,5,2.23,5,4.99c0,0,0,0.01,0,0.01l-1.53-0.49C13.23,7.81,11.76,6.5,10,6.5"></path></svg> Objective

A “long-running transaction” is a transaction method annotated with `@long_running decorator`. This causes the transaction method to run asynchronously, allowing other methods to run while its own execution is still in progress.

This example shows how to upload data a the transaction executes and add widgets to the solution user interface: a button, a progress bar, a status label, and a timer that triggers a callback every second when active.

#### **Long transaction streaming upload**

| Name | Description |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Component      | Description                                                                                                                                   |
| Step model     | * Long-transaction counting from 0 to 50<br/>* Upload of the count to the solution                                                            |
| User interface | * Button to start the long transaction<br/>* Progress bar showing long transaction progress<br/>* Status label to show the transaction status |
<!-- .. _saf-ex-long-running-trans-prerequisites: -->
<!-- :material-outlined:`task;1.25em;sd-text-secondary` Prerequisites -->
<!-- ================================================================ -->

<a id="saf-ex-long-running-trans-solution"></a>

<a id="svg-version-1-1-width-1-0em-height-1-0em-class-sd-octicon-sd-octicon-code-square-sd-text-secondary-viewbox-0-0-16-16-aria-hidden-true-path-d-m0-1-75c0-784-784-0-1-75-0h12-5c15-216-0-16-784-16-1-75v12-5a1-75-1-75-0-0-1-14-25-16h1-75a1-75-1-75-0-0-1-0-14-25zm1-75-25a-25-25-0-0-0-25-25v12-5c0-138-112-25-25-25h12-5a-25-25-0-0-0-25-25v1-75a-25-25-0-0-0-25-25zm7-47-3-97a-75-75-0-0-1-1-06-0l2-2a-75-75-0-0-1-0-1-06l-2-2a-749-749-0-0-1-1-275-326-749-749-0-0-1-215-734l10-69-8-9-22-6-53a-75-75-0-0-1-0-1-06zm6-78-6-53-5-31-8l1-47-1-47a-749-749-0-0-1-326-1-275-749-749-0-0-1-734-215l-2-2a-75-75-0-0-1-0-1-06l2-2a-751-751-0-0-1-1-042-018-751-751-0-0-1-018-1-042z-path-svg-solution"></a>

## <svg version="1.1" width="1.0em" height="1.0em" class="sd-octicon sd-octicon-code-square sd-text-secondary" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> Solution

To add functionality and user interface elements to a long-running transaction, work through the sequence of tabs provided.

### 1️⃣Backend

First, define the step model.

### Define the step model

The step model for a simple step named `FirstStep` is defined in the `first_step.py` file.

* The step manages the state of the long transaction, using the `current_increment` attribute to count from 0 to 50.
* The other attributes manage the actual number of increments to run:
  * A status string reflects when the latest increment was updated.
  * A Boolean attribute indicates whether the long transaction is running.
* The only defined transaction uses a *for-loop* to increment the counter and the status string
  every second.

```python
    from ansys.saf.glow.solution import StepModel, StepSpec, transaction, long_running
    import time
    import datetime

    class FirstStep(StepModel):
        """Definition of a simple step."""
        status: str = "[]"
        processing: bool = False
        number_of_increments: int = 50
        current_increment: int = -1

        @long_running
        @transaction(
            self=StepSpec(
                download=["processing", "number_of_increments"],
                upload=["status", "current_increment"],
            )
        )
        def stream_updates(self) -> None:
            for i in range(self.number_of_increments):
            self.status = f"Update {i} at  {_now()}"
            self.current_increment = i
            self.transaction.upload(["status", "current_increment"])
            time.sleep(1)
            self.status = f"Last updated at {_now()}"

    def _now():
        return datetime.datetime.now().strftime("%H:%M:%S")
```

### 2️⃣Frontend

Next, define the user interface.

### Define the step layout

The user interface has three main widgets: a button, a progress bar, and a status label.
A fourth element that triggers a callback every second while active.

```python
from ansys.saf.glow.client.dashclient import DashClient, callback
from dash_extensions.enrich import Input, Output, State, dcc, html
from ansys.saf.glow.solution import MethodStatus
import dash_bootstrap_components as dbc
from dash.exceptions import PreventUpdate

from ansys.solutions.abc.solution.definition import AbcSolution
from ansys.solutions.abc.solution.first_step import FirstStep

def layout(step: FirstStep):
    return html.Div(
        [
            html.H1("Long Transaction Streaming Update Example"),
            html.P(),
            html.Button("Run test", id="run-button", n_clicks=0),
            html.Div([
                dbc.Progress(
                    id="completion-progress", className="mb-3",
                    value=0, label="", max=step.number_of_increments
                )
            ]),
            html.Div(id="status-line", children=["nothing"]),
            dcc.Interval(id="interval-refresh", interval=1 * 1000, n_intervals=0, disabled=True),  # in milliseconds
        ]
    )
```

### Define the timer callback

* When the Run test button is clicked, the timer callback is activated
  and called every second.
* The callback uses the data from the step to update the status string and the progress bar.
* When the processing is finished, it reactivates the Run test button and
  deactivates the timer.

```python
@callback(
    Output("status-line", "children"),
    Output("run-button", "disabled"),
    Output("interval-refresh", "disabled"),
    Output("completion-progress", "value"),
    Output("completion-progress", "label"),
    Input("interval-refresh", "n_intervals"),
    State("url", "pathname"),
    prevent_initial_call=True,
)
def update_status(_, pathname):
    project = DashClient[AbcSolution].get_project(pathname)
    step = project.steps.first_step
    if not step.processing:
        raise PreventUpdate
    else:
        number_of_completed_increments = step.current_increment + 1
        progress =  int((number_of_completed_increments * 100) / step.number_of_increments)
        if step.get_long_running_method_state("stream_updates").status == MethodStatus.Running:
            status = "running"
        else:
            status = "done"
            step.processing = False
        return f"{step.status} {status}", step.processing, not step.processing, number_of_completed_increments, f"{progress}%"
```

### Define the transaction start button

* The callback starting the long transaction resets the data in the step.
* To extend this example, you could add an input indicating the number of increments
  to be run.
* This data can be set as it is downloaded in the corresponding transaction.

```python
@callback(
    Output("status-line", "children"),
    Output("run-button", "disabled"),
    Output("interval-refresh", "disabled"),
    Output("completion-progress", "value"),
    Output("completion-progress", "label"),
    Input("run-button", "n_clicks"),
    State("url", "pathname"),
    prevent_initial_call=True,
)
def start_long_running_transaction(n_clicks, pathname):
    if n_clicks <= 0:
        raise PreventUpdate
    project = DashClient[AbcSolution].get_project(pathname)
    step = project.steps.first_step
    step.processing = True
    step.current_increment = -1
    step.stream_updates()
    return "running", True, False, 0, ""
```

<!-- Definitions of interpreted text roles (classes) for S5/HTML data. -->
<!-- This data file has been placed in the public domain. -->
<!-- Colours
======= -->
<!-- Text Sizes
========== -->
<!-- Display in Slides (Presentation Mode) Only
========================================== -->
<!-- Display in Outline Mode Only
============================ -->
<!-- Display in Print Only
===================== -->
<!-- Display in Handout Mode Only
============================ -->
<!-- Incremental Display
=================== -->
