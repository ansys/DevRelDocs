<a id="saf-ex-spinner"></a>

<a id="spinner"></a>

# Spinner

<a id="saf-ex-spinner-summary"></a>
> ##### Summary
> 
> Learn to use Dash spinners to display loading states in your solution.
> 
> <!-- Source code for this example is in the `solution-examples <https://github.com/ansys-internal/solution-examples>`_ repository. -->

<a id="saf-ex-spinner-objective"></a>

<a id="svg-version-4-0-0-63c5cb3-width-1-25em-height-1-25em-class-sd-material-icon-sd-material-icon-ads-click-sd-text-secondary-viewbox-0-0-20-20-aria-hidden-true-rect-fill-none-height-20-width-20-rect-path-d-m17-09-18-5l-3-47-3-47l12-5-18l10-10l8-2-5l-2-97-1-11l3-47-3-47l17-09-18-5z-m10-3-5c-3-58-0-6-5-2-92-6-5-6-5-s2-92-6-5-6-5-6-5c0-15-0-0-3-0-01-0-45-0-02l0-46-1-46c10-61-17-98-10-31-18-10-18c-4-42-0-8-3-58-8-8s3-58-8-8-8l0-0-c4-42-0-8-3-58-8-8c0-0-31-0-02-0-61-0-05-0-91l-1-46-0-46c0-01-0-15-0-02-0-3-0-02-0-45c16-5-6-42-13-58-3-5-10-3-5-m10-6-5-c-1-93-0-3-5-1-57-3-5-3-5c0-1-76-1-31-3-23-3-01-3-47l10-15c0-0-0-01-0-0-01-0c7-23-15-5-12-76-5-10c0-2-76-2-24-5-5-5l0-0-c2-76-0-5-2-23-5-4-99c0-0-0-0-01-0-0-01l-1-53-0-49c13-23-7-81-11-76-6-5-10-6-5-path-svg-objective"></a>

## <svg version="4.0.0.63c5cb3" width="1.25em" height="1.25em" class="sd-material-icon sd-material-icon-ads_click sd-text-secondary" viewBox="0 0 20 20" aria-hidden="true"><rect fill="none" height="20" width="20"></rect><path d="M17.09,18.5l-3.47-3.47L12.5,18L10,10l8,2.5l-2.97,1.11l3.47,3.47L17.09,18.5z M10,3.5c-3.58,0-6.5,2.92-6.5,6.5 s2.92,6.5,6.5,6.5c0.15,0,0.3-0.01,0.45-0.02l0.46,1.46C10.61,17.98,10.31,18,10,18c-4.42,0-8-3.58-8-8s3.58-8,8-8l0,0 c4.42,0,8,3.58,8,8c0,0.31-0.02,0.61-0.05,0.91l-1.46-0.46c0.01-0.15,0.02-0.3,0.02-0.45C16.5,6.42,13.58,3.5,10,3.5 M10,6.5 c-1.93,0-3.5,1.57-3.5,3.5c0,1.76,1.31,3.23,3.01,3.47L10,15c0,0-0.01,0-0.01,0C7.23,15,5,12.76,5,10c0-2.76,2.24-5,5-5l0,0 c2.76,0,5,2.23,5,4.99c0,0,0,0.01,0,0.01l-1.53-0.49C13.23,7.81,11.76,6.5,10,6.5"></path></svg> Objective

To deliver the best experience, it is important to let the user know when a process is running.
Spinners are a great way to indicate that the application is loading data or performing a task.
This example illustrates how to use Dash spinners to display loading states in your solution.

When you complete this example, you can expect the following output in the solution UI:

<a id="output-1"></a>

<a id="output-2"></a>

<a id="saf-ex-spinner-prerequisites"></a>

<a id="svg-version-4-0-0-63c5cb3-width-1-25em-height-1-25em-class-sd-material-icon-sd-material-icon-task-sd-text-secondary-viewbox-0-0-24-24-aria-hidden-true-g-path-d-m0-0h24v24h0v0z-fill-none-path-g-g-path-d-m14-2h6c4-9-2-4-01-2-9-4-01-4l4-20c0-1-1-0-89-2-1-99-2h18c1-1-0-2-0-9-2-2v8l14-2z-m18-20h6v4h7v5h5v20z-m8-82-13-05-l7-4-14-46l10-94-18l5-66-5-66l-1-41-1-41l-4-24-4-24l8-82-13-05z-path-g-svg-prerequisites"></a>

## <svg version="4.0.0.63c5cb3" width="1.25em" height="1.25em" class="sd-material-icon sd-material-icon-task sd-text-secondary" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8.82,13.05 L7.4,14.46L10.94,18l5.66-5.66l-1.41-1.41l-4.24,4.24L8.82,13.05z"></path></g></svg> Prerequisites

To display loading states in the solution UI, you need the `dcc.Loading` component from the **Dash Core Components** library.

<a id="saf-ex-spinner-solution"></a>

<a id="svg-version-1-1-width-1-0em-height-1-0em-class-sd-octicon-sd-octicon-code-square-sd-text-secondary-viewbox-0-0-16-16-aria-hidden-true-path-d-m0-1-75c0-784-784-0-1-75-0h12-5c15-216-0-16-784-16-1-75v12-5a1-75-1-75-0-0-1-14-25-16h1-75a1-75-1-75-0-0-1-0-14-25zm1-75-25a-25-25-0-0-0-25-25v12-5c0-138-112-25-25-25h12-5a-25-25-0-0-0-25-25v1-75a-25-25-0-0-0-25-25zm7-47-3-97a-75-75-0-0-1-1-06-0l2-2a-75-75-0-0-1-0-1-06l-2-2a-749-749-0-0-1-1-275-326-749-749-0-0-1-215-734l10-69-8-9-22-6-53a-75-75-0-0-1-0-1-06zm6-78-6-53-5-31-8l1-47-1-47a-749-749-0-0-1-326-1-275-749-749-0-0-1-734-215l-2-2a-75-75-0-0-1-0-1-06l2-2a-751-751-0-0-1-1-042-018-751-751-0-0-1-018-1-042z-path-svg-solution"></a>

## <svg version="1.1" width="1.0em" height="1.0em" class="sd-octicon sd-octicon-code-square sd-text-secondary" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> Solution

To display a spinner while a process is running, work through the sequence of tabs provided.

### 1️⃣ Backend

Create the solution definition.

### Define the step model

First, create a `StepModel` class named `SpinnerStep`. You need a transaction method that mocks a process which takes some time to complete.

Then, create a `wait_some_time` transaction method that waits for a specified amount of time.

The `SpinnerStep` class contains two fields:

* `wait_time`: a float value that represents the time to wait
* `completed`: a Boolean value that indicates whether the process is completed

```python
  import time
  from ansys.saf.glow.solution import StepModel, StepSpec, transaction

  class SpinnerStep(StepModel):
    """Step definition of the dash spinners."""

    wait_time: float = 3.0
    completed: bool = False

    @transaction(self=StepSpec(upload=["completed"], download=["wait_time"]))
    def wait_some_time(self) -> None:
        """Wait for some time."""
        start_time = time.time()
        while (time.time() - start_time) < self.wait_time:
            time.sleep(0.5)
        self.completed = True
```

Click the [Frontend](#saf-ex-spinner-frontend-tab) tab to continue.

### 2️⃣ Frontend

Create a simple button to trigger the `wait_some_time` transaction, display a spinner while waiting for the process to complete, and show a simple message when the process is completed.

### Create the page layout with the loading component

Create the page layout for the spinner page.

```python
from ansys.saf.glow.client.dashclient import DashClient, callback
from dash_extensions.enrich import Input, Output, State, dcc, html
from dash_iconify import DashIconify
import dash_mantine_components as dmc

from ansys.solutions.examples.solution.definition import ExamplesSolution
from ansys.solutions.examples.solution.spinner_step import SpinnerStep


def layout(step: SpinnerStep):
  """Layout of the spinner page."""
  return html.Div(
      [
          html.H1("Spinner", className="display-3", style={"font-size": "48px", "fontWeight": "bold"}),
          html.P(
              "This page demonstrates the usage of spinners in Dash.",
              className="lead",
              style={"font-size": "20px"},
          ),
          html.Hr(className="my-2"),
          html.Br(),
          dmc.Button(
              "Start",
              id="start_button",
              variant="filled",
              radius="xl",
              style={"color": "#FFFFFF", "width": "20%"},
              leftIcon=DashIconify(icon="streamline:startup-solid"),
          ),
          dcc.Loading(
              id="loading",
              type="default",
              children=html.Div(
                  id="loading_output",
                  style={"margin-top": "50px"},
              )
          ),
      ]
  )
```

### Connect the button to the transaction method

When the Start button is clicked, the `wait_some_time` transaction method is triggered. For this, you need to create a callback function to call the transaction method and update the loading component accordingly.

```python
@callback(
    Output("loading_output", "children"),
    Input("start_button", "n_clicks"),
    State("url", "pathname"),
    prevent_initial_call=True,
)
def start_transaction(n_clicks, pathname):
    """Start the transaction."""
    project = DashClient[ExamplesSolution].get_project(pathname)
    step = project.steps.spinner_step
    step.wait_some_time()
    return html.Div("Transaction completed.")
```

Now that your implementation is complete, continue to the   [Testing](#saf-ex-spinner-testing) section.

<a id="saf-ex-spinner-testing"></a>

<a id="svg-version-1-1-width-1-0em-height-1-0em-class-sd-octicon-sd-octicon-verified-sd-text-secondary-viewbox-0-0-16-16-aria-hidden-true-path-d-m9-585-52-929-68c-153-112-331-186-518-215l1-138-175a2-678-2-678-0-0-1-2-24-2-24l-174-1-139c-029-187-103-365-215-518l-68-928a2-677-2-677-0-0-1-0-3-17l-68-928a1-174-1-174-0-0-0-215-518l-175-1-138a2-678-2-678-0-0-1-2-241-2-241l-1-138-175a1-17-1-17-0-0-0-518-215l-928-68a2-677-2-677-0-0-1-3-17-0l-928-68a1-174-1-174-0-0-0-518-215l3-83-14-41a2-678-2-678-0-0-1-2-24-2-24l-175-1-138a1-17-1-17-0-0-0-215-518l-68-928a2-677-2-677-0-0-1-0-3-17l-68-928c-112-153-186-331-215-518l-175-1-14a2-678-2-678-0-0-1-2-24-2-24l1-139-175c-187-029-365-103-518-215l-928-68a2-677-2-677-0-0-1-3-17-0zm7-303-1-728l-927-68a2-67-2-67-0-0-1-1-18-489l-1-137-174a1-179-1-179-0-0-0-987-987l-174-1-136a2-677-2-677-0-0-1-489-1-18l-68-928a1-18-1-18-0-0-0-0-1-394l-68-927c-256-348-424-753-489-1-18l-174-1-137c-078-509-478-909-987-987l1-136-174a2-67-2-67-0-0-1-1-18-489l-928-68c-414-305-979-305-1-394-0l-927-68a2-67-2-67-0-0-1-1-18-489l1-137-174a1-18-1-18-0-0-0-987-987l-174-1-136a2-67-2-67-0-0-1-489-1-18l-68-928a1-176-1-176-0-0-0-0-1-394l-68-927a2-686-2-686-0-0-1-489-1-18l-174-1-137a1-179-1-179-0-0-0-987-987l-1-136-174a2-677-2-677-0-0-1-1-18-489l-928-68a1-176-1-176-0-0-0-1-394-0zm11-28-6-78l-3-75-3-75a-75-75-0-0-1-1-06-0l4-72-8-78a-751-751-0-0-1-018-1-042-751-751-0-0-1-1-042-018l7-8-94l3-22-3-22a-751-751-0-0-1-1-042-018-751-751-0-0-1-018-1-042z-path-svg-testing"></a>

## <svg version="1.1" width="1.0em" height="1.0em" class="sd-octicon sd-octicon-verified sd-text-secondary" viewBox="0 0 16 16" aria-hidden="true"><path d="m9.585.52.929.68c.153.112.331.186.518.215l1.138.175a2.678 2.678 0 0 1 2.24 2.24l.174 1.139c.029.187.103.365.215.518l.68.928a2.677 2.677 0 0 1 0 3.17l-.68.928a1.174 1.174 0 0 0-.215.518l-.175 1.138a2.678 2.678 0 0 1-2.241 2.241l-1.138.175a1.17 1.17 0 0 0-.518.215l-.928.68a2.677 2.677 0 0 1-3.17 0l-.928-.68a1.174 1.174 0 0 0-.518-.215L3.83 14.41a2.678 2.678 0 0 1-2.24-2.24l-.175-1.138a1.17 1.17 0 0 0-.215-.518l-.68-.928a2.677 2.677 0 0 1 0-3.17l.68-.928c.112-.153.186-.331.215-.518l.175-1.14a2.678 2.678 0 0 1 2.24-2.24l1.139-.175c.187-.029.365-.103.518-.215l.928-.68a2.677 2.677 0 0 1 3.17 0ZM7.303 1.728l-.927.68a2.67 2.67 0 0 1-1.18.489l-1.137.174a1.179 1.179 0 0 0-.987.987l-.174 1.136a2.677 2.677 0 0 1-.489 1.18l-.68.928a1.18 1.18 0 0 0 0 1.394l.68.927c.256.348.424.753.489 1.18l.174 1.137c.078.509.478.909.987.987l1.136.174a2.67 2.67 0 0 1 1.18.489l.928.68c.414.305.979.305 1.394 0l.927-.68a2.67 2.67 0 0 1 1.18-.489l1.137-.174a1.18 1.18 0 0 0 .987-.987l.174-1.136a2.67 2.67 0 0 1 .489-1.18l.68-.928a1.176 1.176 0 0 0 0-1.394l-.68-.927a2.686 2.686 0 0 1-.489-1.18l-.174-1.137a1.179 1.179 0 0 0-.987-.987l-1.136-.174a2.677 2.677 0 0 1-1.18-.489l-.928-.68a1.176 1.176 0 0 0-1.394 0ZM11.28 6.78l-3.75 3.75a.75.75 0 0 1-1.06 0L4.72 8.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L7 8.94l3.22-3.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg>  Testing

Finally, test your implementation to confirm it works as expected.

Run the solution and compare your results with the results shown in the  [Objective](#saf-ex-spinner-objective) section.

<!-- seealso:
Check out the full usage example in the `solution-examples <https://github.com/ansys-internal/solution-examples>`_ repository. -->
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
