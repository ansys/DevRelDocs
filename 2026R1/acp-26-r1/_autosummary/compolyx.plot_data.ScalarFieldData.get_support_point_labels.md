# get_support_point_labels

<a id="compolyx.plot_data.ScalarFieldData.get_support_point_labels"></a>

#### ScalarFieldData.get_support_point_labels()

Get the identifiers for the supporting points.

* **Returns:**
  Resulting n-dimensional array with the supporting point labels.

Labels are returned independent of update status of plot.

Examples:
: Get labels for supporting points defining look-up table plot:
  <br/>
  ```default
  >>> coords = my_plot._get_support_point_labels()
  ```
