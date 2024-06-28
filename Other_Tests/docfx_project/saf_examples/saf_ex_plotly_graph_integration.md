# Plotly graph integration

<a id="saf-ex-plotly-graph-int-summary"></a>
> ##### Summary
> 
> Use Plotly graphs to display step field data in the user interface of a solution.

<a id="saf-ex-plotly-graph-int-objective"></a>

<a id="svg-version-4-0-0-63c5cb3-width-1-25em-height-1-25em-class-sd-material-icon-sd-material-icon-ads-click-sd-text-secondary-viewbox-0-0-20-20-aria-hidden-true-rect-fill-none-height-20-width-20-rect-path-d-m17-09-18-5l-3-47-3-47l12-5-18l10-10l8-2-5l-2-97-1-11l3-47-3-47l17-09-18-5z-m10-3-5c-3-58-0-6-5-2-92-6-5-6-5-s2-92-6-5-6-5-6-5c0-15-0-0-3-0-01-0-45-0-02l0-46-1-46c10-61-17-98-10-31-18-10-18c-4-42-0-8-3-58-8-8s3-58-8-8-8l0-0-c4-42-0-8-3-58-8-8c0-0-31-0-02-0-61-0-05-0-91l-1-46-0-46c0-01-0-15-0-02-0-3-0-02-0-45c16-5-6-42-13-58-3-5-10-3-5-m10-6-5-c-1-93-0-3-5-1-57-3-5-3-5c0-1-76-1-31-3-23-3-01-3-47l10-15c0-0-0-01-0-0-01-0c7-23-15-5-12-76-5-10c0-2-76-2-24-5-5-5l0-0-c2-76-0-5-2-23-5-4-99c0-0-0-0-01-0-0-01l-1-53-0-49c13-23-7-81-11-76-6-5-10-6-5-path-svg-objective"></a>

## <svg version="4.0.0.63c5cb3" width="1.25em" height="1.25em" class="sd-material-icon sd-material-icon-ads_click sd-text-secondary" viewBox="0 0 20 20" aria-hidden="true"><rect fill="none" height="20" width="20"></rect><path d="M17.09,18.5l-3.47-3.47L12.5,18L10,10l8,2.5l-2.97,1.11l3.47,3.47L17.09,18.5z M10,3.5c-3.58,0-6.5,2.92-6.5,6.5 s2.92,6.5,6.5,6.5c0.15,0,0.3-0.01,0.45-0.02l0.46,1.46C10.61,17.98,10.31,18,10,18c-4.42,0-8-3.58-8-8s3.58-8,8-8l0,0 c4.42,0,8,3.58,8,8c0,0.31-0.02,0.61-0.05,0.91l-1.46-0.46c0.01-0.15,0.02-0.3,0.02-0.45C16.5,6.42,13.58,3.5,10,3.5 M10,6.5 c-1.93,0-3.5,1.57-3.5,3.5c0,1.76,1.31,3.23,3.01,3.47L10,15c0,0-0.01,0-0.01,0C7.23,15,5,12.76,5,10c0-2.76,2.24-5,5-5l0,0 c2.76,0,5,2.23,5,4.99c0,0,0,0.01,0,0.01l-1.53-0.49C13.23,7.81,11.76,6.5,10,6.5"></path></svg> Objective

The user interface (UI) of a solution application can display both **input data** (such as strings, integers, floats, and files) and **output data** (such as 1D/2D/3D graphics, 3D viewers, and images).

As a solution developer, you must know how to display step field data in the UI. This example demonstrates how to display step field data a static plot in the solution UI.

When you complete this example, you can expect the following output in the solution UI:

<a id="saf-ex-plotly-graph-int-output-1"></a>
![image](_static/usage/plotly_graph_integration/output.png)

<a id="saf-ex-plotly-graph-int-prerequisites"></a>

<a id="svg-version-4-0-0-63c5cb3-width-1-25em-height-1-25em-class-sd-material-icon-sd-material-icon-task-sd-text-secondary-viewbox-0-0-24-24-aria-hidden-true-g-path-d-m0-0h24v24h0v0z-fill-none-path-g-g-path-d-m14-2h6c4-9-2-4-01-2-9-4-01-4l4-20c0-1-1-0-89-2-1-99-2h18c1-1-0-2-0-9-2-2v8l14-2z-m18-20h6v4h7v5h5v20z-m8-82-13-05-l7-4-14-46l10-94-18l5-66-5-66l-1-41-1-41l-4-24-4-24l8-82-13-05z-path-g-svg-prerequisites"></a>

## <svg version="4.0.0.63c5cb3" width="1.25em" height="1.25em" class="sd-material-icon sd-material-icon-task sd-text-secondary" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8.82,13.05 L7.4,14.46L10.94,18l5.66-5.66l-1.41-1.41l-4.24,4.24L8.82,13.05z"></path></g></svg> Prerequisites

Packages
: To render any Plotly-powered data visualization, you need the `dcc.Graph` component from the **Dash Core Components** library. For more information, see the [Plotly Dash documentation](https://dash.plotly.com/dash-core-components/graph).

<a id="saf-ex-plotly-graph-int-solution"></a>

<a id="svg-version-1-1-width-1-0em-height-1-0em-class-sd-octicon-sd-octicon-code-square-sd-text-secondary-viewbox-0-0-16-16-aria-hidden-true-path-d-m0-1-75c0-784-784-0-1-75-0h12-5c15-216-0-16-784-16-1-75v12-5a1-75-1-75-0-0-1-14-25-16h1-75a1-75-1-75-0-0-1-0-14-25zm1-75-25a-25-25-0-0-0-25-25v12-5c0-138-112-25-25-25h12-5a-25-25-0-0-0-25-25v1-75a-25-25-0-0-0-25-25zm7-47-3-97a-75-75-0-0-1-1-06-0l2-2a-75-75-0-0-1-0-1-06l-2-2a-749-749-0-0-1-1-275-326-749-749-0-0-1-215-734l10-69-8-9-22-6-53a-75-75-0-0-1-0-1-06zm6-78-6-53-5-31-8l1-47-1-47a-749-749-0-0-1-326-1-275-749-749-0-0-1-734-215l-2-2a-75-75-0-0-1-0-1-06l2-2a-751-751-0-0-1-1-042-018-751-751-0-0-1-018-1-042z-path-svg-solution"></a>

## <svg version="1.1" width="1.0em" height="1.0em" class="sd-octicon sd-octicon-code-square sd-text-secondary" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> Solution

To display a simple set of points in a two-dimensional Plotly graph, work through the sequence of tabs provided.

### 1️⃣Logic

First, write the business logic.

### Create a method to generate the data

In the `logic` folder, create a module named `parametric_curves.py`.

In this module, create a `compute_rd_curve` method to generate the set of points.

```bash
def compute_rd_curve(points: int = 10000) -> tuple:
  t = np.linspace(-6, 6, points)
  x_s = 10*np.sin(9.9*t)*np.round(np.sqrt(np.cos(np.cos(10*t))))
  y_s = 9*np.cos(9.9*t)**2*np.sin(np.sin(10*t))
  x, y = np.empty(0), np.empty(0)
  for alpha in np.linspace(0, 360, 6):
    alpha = np.radians(alpha)
    x = np.append(x, x_s*np.cos(alpha) + y_s*np.sin(alpha), axis=0)
    y = np.append(y, -x_s*np.sin(alpha) + y_s*np.cos(alpha), axis=0)
  d = np.sqrt(x**2 + y**2)
  return x.tolist(), y.tolist(), d.tolist()
```

To continue, click the **2️⃣Backend** tab above.

### 2️⃣Backend

Next, create the solution definition.

### Define the step model

Let `x_coords` and `y_coords` be the x and y coordinates of a set of points you
want to display in the solution UI. Declare these as step fields in the step model for the **Compute** step.

In the `solution` folder, create a module named `compute_step.py`.

In this module, create a `compute_parametric_curve` transaction method to invoke the `compute_rd_curve` business logic method.

```bash
        class ComputeStep(StepModel):
            """Step model of the compute step."""

            x_coords: list = []
            y_coords: list = []
            distance: list = []

            @transaction(
                self=StepSpec(
                    upload=[
                        "x_coords",
                        "y_coords",
                        "distance"
                    ]
                )
            )
            def compute_parametric_curve(self) -> None:
                """Method to compute the sum of two numbers."""
                self.x_coords, self.y_coords, self.distance = parametric_curves.compute_rd_curve()
```

To continue, click the **3️⃣Frontend** tab above.

### 3️⃣Frontend

Now, expose the solution definition in the UI.

### Initialize the Plotly graph

In the `ui/pages` folder, create a `compute_page.py` module to define the page layout for the **Compute** step.

In the `layout` function, add a `dcc.Graph` component and pass it the data you want to show.

```bash
  dcc.Graph(
          id="graph",
          figure={
              "data": [
                  {
                      "type": "scatter",
                      "x": step.x_coords,
                      "y": step.y_coords
                  },
              ]
          }
      )
```

### Customize the figure layout

In the `dcc.Graph` component, customize the layout of the figure using the `layout` key.

* Use the `width` and `height` options to control the size of the figure.
* Use the `margin` option to adjust the margins relative to the graph box.

Plotly enables many kinds of customization. For more information, see its [documentation](https://plotly.com/python-api-reference/generated/plotly.graph_objects.Layout.html) .

```bash
  dcc.Graph(
      id="graph",
      figure={
          "data": [
              {
                  "type": "scatter",
                  "x": step.x_coords,
                  "y": step.y_coords
              },
          ],
          "layout": {
              "width": 600,
              "height": 600,
              "margin": {
                  "l": 0,
                  "r": 0,
                  "b": 0,
                  "t": 0,
              },
          }
      }
  )
```

### Trigger the backend processes

In the `layout` function, create a button to trigger the backend coordinates computation from the frontend.

```bash
html.Div(
    dbc.Button(
        "Compute",
        id="compute",
        disabled=False,
        style = {
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "fontSize": "100%",
            "background-color": "rgba(0, 0, 0, 1)",
            "border-color": "rgba(0, 0, 0, 1)",
            "height": "30px",
        }
    ),
    className="d-grid gap-2 col-5 mx-auto",
```

### Add interactivity

You can also introduce interactivity by adding callback to the step.

For instance, the following callback updates the data you have displayed:

```bash
  @callback(
      Output("graph", "figure"),
      Input("compute", "n_clicks"),
      State("url", "pathname"),
      State("graph", "figure"),
      prevent_initial_call=True,
  )
  def update_graph_data(n_clicks, pathname, figure):
      """Callback function to trigger the computation."""
      project = DashClient[Cosmic_WaveSolution].get_project(pathname)
      step = project.steps.compute_step
      step.compute_parametric_curve()
      figure["data"][0]["x"] = step.x_coords
      figure["data"][0]["y"] = step.y_coords
      return figure
```

Now that your implementation is complete, continue to the   [Testing](#saf-ex-plotly-graph-int-testing) section.

<a id="saf-ex-plotly-graph-int-testing"></a>

<a id="svg-version-1-1-width-1-0em-height-1-0em-class-sd-octicon-sd-octicon-verified-sd-text-secondary-viewbox-0-0-16-16-aria-hidden-true-path-d-m9-585-52-929-68c-153-112-331-186-518-215l1-138-175a2-678-2-678-0-0-1-2-24-2-24l-174-1-139c-029-187-103-365-215-518l-68-928a2-677-2-677-0-0-1-0-3-17l-68-928a1-174-1-174-0-0-0-215-518l-175-1-138a2-678-2-678-0-0-1-2-241-2-241l-1-138-175a1-17-1-17-0-0-0-518-215l-928-68a2-677-2-677-0-0-1-3-17-0l-928-68a1-174-1-174-0-0-0-518-215l3-83-14-41a2-678-2-678-0-0-1-2-24-2-24l-175-1-138a1-17-1-17-0-0-0-215-518l-68-928a2-677-2-677-0-0-1-0-3-17l-68-928c-112-153-186-331-215-518l-175-1-14a2-678-2-678-0-0-1-2-24-2-24l1-139-175c-187-029-365-103-518-215l-928-68a2-677-2-677-0-0-1-3-17-0zm7-303-1-728l-927-68a2-67-2-67-0-0-1-1-18-489l-1-137-174a1-179-1-179-0-0-0-987-987l-174-1-136a2-677-2-677-0-0-1-489-1-18l-68-928a1-18-1-18-0-0-0-0-1-394l-68-927c-256-348-424-753-489-1-18l-174-1-137c-078-509-478-909-987-987l1-136-174a2-67-2-67-0-0-1-1-18-489l-928-68c-414-305-979-305-1-394-0l-927-68a2-67-2-67-0-0-1-1-18-489l1-137-174a1-18-1-18-0-0-0-987-987l-174-1-136a2-67-2-67-0-0-1-489-1-18l-68-928a1-176-1-176-0-0-0-0-1-394l-68-927a2-686-2-686-0-0-1-489-1-18l-174-1-137a1-179-1-179-0-0-0-987-987l-1-136-174a2-677-2-677-0-0-1-1-18-489l-928-68a1-176-1-176-0-0-0-1-394-0zm11-28-6-78l-3-75-3-75a-75-75-0-0-1-1-06-0l4-72-8-78a-751-751-0-0-1-018-1-042-751-751-0-0-1-1-042-018l7-8-94l3-22-3-22a-751-751-0-0-1-1-042-018-751-751-0-0-1-018-1-042z-path-svg-testing"></a>

## <svg version="1.1" width="1.0em" height="1.0em" class="sd-octicon sd-octicon-verified sd-text-secondary" viewBox="0 0 16 16" aria-hidden="true"><path d="m9.585.52.929.68c.153.112.331.186.518.215l1.138.175a2.678 2.678 0 0 1 2.24 2.24l.174 1.139c.029.187.103.365.215.518l.68.928a2.677 2.677 0 0 1 0 3.17l-.68.928a1.174 1.174 0 0 0-.215.518l-.175 1.138a2.678 2.678 0 0 1-2.241 2.241l-1.138.175a1.17 1.17 0 0 0-.518.215l-.928.68a2.677 2.677 0 0 1-3.17 0l-.928-.68a1.174 1.174 0 0 0-.518-.215L3.83 14.41a2.678 2.678 0 0 1-2.24-2.24l-.175-1.138a1.17 1.17 0 0 0-.215-.518l-.68-.928a2.677 2.677 0 0 1 0-3.17l.68-.928c.112-.153.186-.331.215-.518l.175-1.14a2.678 2.678 0 0 1 2.24-2.24l1.139-.175c.187-.029.365-.103.518-.215l.928-.68a2.677 2.677 0 0 1 3.17 0ZM7.303 1.728l-.927.68a2.67 2.67 0 0 1-1.18.489l-1.137.174a1.179 1.179 0 0 0-.987.987l-.174 1.136a2.677 2.677 0 0 1-.489 1.18l-.68.928a1.18 1.18 0 0 0 0 1.394l.68.927c.256.348.424.753.489 1.18l.174 1.137c.078.509.478.909.987.987l1.136.174a2.67 2.67 0 0 1 1.18.489l.928.68c.414.305.979.305 1.394 0l.927-.68a2.67 2.67 0 0 1 1.18-.489l1.137-.174a1.18 1.18 0 0 0 .987-.987l.174-1.136a2.67 2.67 0 0 1 .489-1.18l.68-.928a1.176 1.176 0 0 0 0-1.394l-.68-.927a2.686 2.686 0 0 1-.489-1.18l-.174-1.137a1.179 1.179 0 0 0-.987-.987l-1.136-.174a2.677 2.677 0 0 1-1.18-.489l-.928-.68a1.176 1.176 0 0 0-1.394 0ZM11.28 6.78l-3.75 3.75a.75.75 0 0 1-1.06 0L4.72 8.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L7 8.94l3.22-3.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg>  Testing

Finally, test your implementation to confirm it works as expected.

Run the solution and compare your results with the results shown in the  [Objective](#saf-ex-plotly-graph-int-objective) section.

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
