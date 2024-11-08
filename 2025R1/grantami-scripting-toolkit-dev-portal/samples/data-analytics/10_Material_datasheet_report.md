# Generate a Material Datasheet Report using MI Scripting Toolkit and `python-docx`

This example shows how to use the `python-docx` library to generate a datasheet report as a Word
docx file. At a high level, the notebook goes through the following steps:

1. Define the data to be included in the report
2. Export the data
3. Load the report template
4. Add single-valued attributes to the report
5. Add functional data to the report
6. Save the report

The final step is optional and uses the `docx2pdf` library to convert the docx file to pdf.
However, this step requires Microsoft Word to be installed on the computer running Python. If Word
is not available, this step is skipped.

## 1. Define the data to be included in the report

First, define some constants that identify the record and attributes to be included in the report.
The following cell identifies a record by Database Key, Table name, and Record History GUID, but
an alternative technique could be used to identify a record, for example searching.


```python
DATABASE = "MI_Training"
TABLE = "Design Data"
RECORD_HISTORY_GUID = "5b1df472-a92e-4317-b9a8-e1672335bc2e"
UNIT_SYSTEM = "SI (Consistent)"
```

The next cells define the attributes to be included in each section of the report. Apart from the
Datasheet Title attribute, these are dictionaries which map an attribute name to a label included
in the report.


```python
DATASHEET_TITLE_ATTRIBUTE = "Common Name"
```


```python
HEADER_ATTRIBUTES = {
    "Thickness": "Thickness",
    "Product Form": "Form",
    "Condition": "Condition",
}
```


```python
SINGLE_VALUED_PROPERTIES = {
    "Density": "ρ",
    "Thermal Conductivity": "k",
    "Thermal Expansion": "a",
    "Specific Heat": "c",
    "Modulus, L": "E (L-dir)",
    "Poisson's Ratio, L": "ν (L-dir)",
    "Yield Strength, L": "σ (yield, L-dir)",
    "Ultimate Tensile Strength, L": "σ (ult., L-dir)",
    "Elongation, L": "ε (L-dir)",
}
```

The `GRAPHS` dictionary maps functional attributes to a 4-tuple, where each element of the tuple
refers to:

1. The chart title
2. The y-axis label
3. The x-axis label
4. Optional: For multiple-series plots, a 2-tuple of the Parameter name and the title of the
   legend in the report


```python
GRAPHS = {
    "Thermal Conductivity with Temp.": ("Thermal conductivity vs Temperature", "k", "T", None),
    "Thermal Expansion with Temp.": ("Thermal expansion vs Temperature", "a", "T", None),
    "Specific Heat with Temp.": ("Specific heat vs Temperature", "c", "T", None),
    "Tensile Stress/Strain, L": ("Tensile stress vs Strain and Temperature", "σ", "ε", ("Temperature", "T")),
}
```

## 2. Export the data

Export the data for all the required attributes for the 'released' version of the record.


```python
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)
db = mi.get_db(db_key=DATABASE)
db.unit_system = UNIT_SYSTEM
table = db.get_table(TABLE)
record = db.get_record_by_id(hguid=RECORD_HISTORY_GUID)

# To get the released version of the record, iterate through all versions of the record
# and keep only the version which has the 'Released' `release_state`.
for record_version in record.all_versions.values():
    if record_version.release_state == "Released":
        released_record = record_version

# Create a list of all attributes by appending the keys of the three dictionaries defined above to
# the datasheet title attribute
all_attributes = [DATASHEET_TITLE_ATTRIBUTE] + list(HEADER_ATTRIBUTES.keys()) + list(SINGLE_VALUED_PROPERTIES.keys()) + list(GRAPHS.keys())

table.bulk_fetch(attributes=all_attributes, records=[released_record])
```

## 3. Load the report template

The report template is created in Microsoft Word, and the 'python-docx' library is used to
populate the template with data exported from Granta MI.

Import the `python-docx` library and create a `Document` object using the `docx.Document`
function. The function accepts an optional string as the relative path to a template file, which
is used to create the `Document` object. In this example the relative path to the template file is
`"supporting_files/report_template.docx"`, and the `Document` object is stored in the `report`
variable.

`docx.Document` can also be called without arguments, which creates an empty Word document
instead.


```python
from docx import Document

report = Document(docx="supporting_files/10_report_template.docx")
```

<div class="alert alert-info">

**Info:**

As `python-docx` does not implement all the layout and style functionality in Microsoft Word,
specifying a pre-defined template allows greater control over the layout of the document and more
concise code overall.
</div>

A screenshot of the template is shown below:

![The Word template header section, showing a company logo and tables with placeholder values.](assets/10_template-screenshot.png 'Word template')

## 4. Add single-valued attributes to the report

This section covers adding single-valued and range attributes to the report. The report makes use
of tables to present single-valued data, and so the general approach is as follows:

1. Identify the table in the report template to be modified
2. Format the attribute value as a string
3. Add a new row to the table (if required)
4. Add the value to the table and apply the appropriate style

### Define a helper function to write a value to a cell

First, define a function that writes a value to a cell. Use the
`docx.table._Cell.iter_inner_content()` to access the `Paragraph` object within the cell. The
`Paragraph.text` and `Paragraph.style` properties are then used to modify the cell content and
style respectively.


```python
from typing import Optional
from docx import table

def write_value_to_cell(cell: table._Cell, value: str, style: Optional[str]=None) -> None:
    paragraph = next(cell.iter_inner_content())
    paragraph.text = value
    paragraph.style = style
```

### Write the datasheet title 

The first table in the template contains identifying information about the material. The first row
contains the title, and subsequent rows contain additional information about the material.

The cell below does the following:

1. Identifies the target table based on its location in the document.
2. Identifies the target cell based on the row and column coordinates.
3. Creates the title string based on the `DATASHEET_TITLE_ATTRIBUTE` attribute value and the
   record version number.
4. Writes the value to the cell and applies the `"Material Name"` style as defined in the Word
   template document.


```python
# report.tables is an ordered list of the tables in the report template, in document order
header_table = report.tables[0]
cell = header_table.cell(row_idx=0, col_idx=1)
title_attribute_value = released_record.attributes[DATASHEET_TITLE_ATTRIBUTE].value
record_version_number = released_record.version_number
title = f"{title_attribute_value} [v{record_version_number}]"
write_value_to_cell(cell, title, "Material Name")
```

Modifying the `report` object does not provide any feedback. The `report` can be saved to disk as
a `docx` file at any point by using the `Document.save` method.

First, ensure the output directory exists. This directory will already exist if a notebook
was run previously that saved a file to disk.


```python
from pathlib import Path
output_folder = Path("./output")
output_folder.mkdir(exist_ok=True)
```

Next, save the report.


```python
report.save("output/10_report_header_only.docx")
```

Open the `report_header_only.docx` file to see the report template populated with the
`DATASHEET_TITLE_ATTRIBUTE` attribute value. A screenshot of the report with the title added is
shown below:

![The header section of a Word document containing a populated title cell.](assets/10_report-screenshot-header-only.png 'Word report with header')

The report will not be saved to disk again until the report is complete. If you want to see the
effects of individual operations on the report, use the ``report.save`` method to save the report
to disk at any point and open the file in Microsoft Word.

### Write 'Header' attributes

The header attributes are written to additional rows in the first table. The general process for
writing these attributes is the same as for the datasheet title attribute, but with the addition
of iterating through multiple header attributes. For each header attribute, a new row is added to
the table, and the attribute label and value are written to the new row.

First, define a function that formats an attribute value to a suitable string format depending on
the attribute type. The default format specifier `:.3g` uses a general format with at most 3
digits of precision.


```python
def format_attribute(attribute: mpy.AttributeValue, format_spec: str = ".3g", include_unit: bool = False) -> Optional[str]:
    value = attribute.value
    # A null value may either be None or an empty list
    if not value and value != 0:
        return None

    # Switch based on the attribute type
    if attribute.type == "RNGE":
        formatted_value = f"{value['low']:{format_spec}} - {value['high']:{format_spec}}"
    elif attribute.type == "POIN":
        # Single-valued point only
        if isinstance(attribute.value, (float, int)):
            formatted_value = f"{value:{format_spec}}"
        else:
            raise NotImplementedError("Multi-valued point attribute not supported.")
    elif attribute.type in ["STXT", "LTXT"]:
        formatted_value = value
    else:
        raise NotImplementedError(f'Attribute type "{attribute.type}" not supported.')

    # Include the unit in the output if requested and if it exists
    if include_unit and attribute.unit:
        return f"{formatted_value} {attribute.unit}"
    else:
        return formatted_value
```

Next, iterate through each header attribute and write the appropriately formatted value to the
header table.


```python
# The HEADER_ATTRIBUTES dictionary contains pairs of attribute names and report labels.
for idx, (attribute_name, label) in enumerate(HEADER_ATTRIBUTES.items()):

    # The 0th row contains the datasheet title
    # Each header attribute is therefore written to the 'idx+1'th row
    target_row = idx + 1

    # If the target row is beyond the end of the table, add a new row
    if target_row > len(header_table.rows) - 1:
        header_table.add_row()

    # Format the attribute value as a string with the unit included
    attribute = released_record.attributes[attribute_name]
    value = f"{format_attribute(attribute, include_unit=True)}"

    # Write the label to the cell in column 0 with the style "Property Label"
    label_cell = header_table.cell(target_row, 0)
    write_value_to_cell(label_cell, label, "Property Label")

    # Write the value to the cell in column 1 with the style "Property Value"
    prop_cell = header_table.cell(target_row, 1)
    write_value_to_cell(prop_cell, value, "Property Value")
```

### Write numeric attributes

Next, write the numeric attributes to the report. This step is similar to the header attributes
above, except the value and unit are written to separate cells instead of being joined in a
formatted string.

Additionally, the table also contains two attributes per row, so some additional calculations are
required to determine the row number.


```python
# This table is the second table in the `Document` object.
property_table = report.tables[1]

for idx, (attribute_name, label) in enumerate(SINGLE_VALUED_PROPERTIES.items()):
    # This table contains two attributes per row
    # Calculate the row and column offset for this attribute

    # First two attributes written to row 0, second two to row 1, etc.
    target_row = idx // 2

    # Even attributes written to columns 0, 1, 2, odd attributes to columns 3, 4, 5
    target_column_offset = (idx % 2) * 3

    if target_row > len(property_table.rows) - 1:
        property_table.add_row()

    attribute = released_record.attributes[attribute_name]

    # Use standard form for numeric attributes
    value = format_attribute(attribute, format_spec=".4e", include_unit=False)
    unit = attribute.unit

    # If there is no value for this attribute, set the value and unit to a dash
    if value is None:
        value = unit = "-"
    elif unit == "":
        unit = "-"

    # Write the label to the cell in the leftmost column (column 0 or 3) with the style "Property Label"
    label_cell = property_table.cell(target_row, target_column_offset)
    write_value_to_cell(label_cell, label, "Property Label")

    # Write the value to the cell in the center column (column 1 or 4) with the style "Property Value"
    value_cell = property_table.cell(target_row, target_column_offset+1)
    write_value_to_cell(value_cell, value, "Property Value")

    # Write the unit to the cell in the rightmost column (column 2 or 5) with the style "Property Unit"
    unit_cell = property_table.cell(target_row, target_column_offset+2)
    write_value_to_cell(unit_cell, unit, "Property Unit")
```

## 5. Add functional data to the report

Plot functional attributes with `seaborn` and `matplotlib`, convert the plots to image files, and
then embed these in the report. Note: This section assumes the user is familiar with `seaborn` and
`matplotlib`. For more examples and guidance in using these libraries see the previous Data
Analytics examples.

First, define a helper function to convert a `matplotlib` plot to a `png` file.


```python
import io
from matplotlib import pyplot

def convert_plot_to_png(plt: pyplot) -> io.BytesIO:
    fig = plt.get_figure()
    buffer = io.BytesIO()
    fig.savefig(buffer, format="png")
    fig.clf()
    buffer.seek(0)
    return buffer
```

Next, import `seaborn` and set the plot style.


```python
import seaborn as sns

sns.set_theme(
    palette=["black"],  # Datasheet reports are typically black and white
    rc={"figure.figsize": (7, 5)}  # This size produces plots suitable for printing
)
sns.set_style("ticks")  # Include tickmarks on axes
```

Now, define a function to create a plot for a functional attribute with a specified title, axis
labels, and optional constraint information.


```python
import io

import pandas as pd

def make_graph(
    attribute: mpy.AttributeFunctional,
    plot_title: str,
    y_label: str,
    x_label: str,
    constraint_param_name: Optional[str] = None,
    constraint_label: Optional[str] = None,
) -> io.BytesIO:
    
    value = attribute.value

    # This dictionary will be used to construct a dataframe
    data = {"y": list(), "x": list(), "constraint": list()}
    
    # If a constraint_param_name was provided, set a CONSTRAINT flag to True
    if constraint_param_name:
        CONSTRAINT = True
    else:
        CONSTRAINT = False

    # Get the position of the constraint parameter in the functional data value object
    if CONSTRAINT:
        param_idx = attribute.constraint_column_index[constraint_param_name]
    else:
        param_idx = None
        parameter_unit = None

    # Add the functional data to the dataframe dictionary
    for row in value[1:]:
        data["y"].append(row[0])
        data["x"].append(row[2])
        if CONSTRAINT:
            data["constraint"].append(f"{row[param_idx]:.3g}")

    if not CONSTRAINT:
        # Remove the constraint key from the dictionary before converting to a dataframe
        data.pop("constraint")

    # Create the dataframe
    df = pd.DataFrame(data)

    # The commands to create a plot are slightly different if there are multiple series
    if CONSTRAINT:
        plt = sns.lineplot(
            data=df,
            x="x",
            y="y",
            style="constraint",
            markers=True,
        )
    else:
        plt = sns.lineplot(
            data=df,
            x="x",
            y="y",
            marker='o',
        )
    
    x_unit = attribute.xaxis_parameter.unit
    y_unit = attribute.unit
    plt.set(
        title=plot_title,
        xlabel=f"{x_label} / {x_unit}",
        ylabel=f"{y_label} / {y_unit}",
    )
    
    # If we have a constraint, add a legend
    if CONSTRAINT:
        parameter_unit = attribute.parameters[constraint_param_name].unit
        legend_title = f"{constraint_label} [{parameter_unit}]"
        plt.legend(title=legend_title)
    
    png = convert_plot_to_png(plt)
    return png
```

Finally, use this function to create a plot image for each functional attribute and add it to the
report. The plots are added to the end of the document, and automatically flow to a new page if
the previous page is filled.


```python
for attribute_name, (title, y_label, x_label, constraint_info) in GRAPHS.items():
    attribute = released_record.attributes[attribute_name]
    png = make_graph(
        attribute=attribute,
        plot_title=title,
        y_label=y_label,
        x_label=x_label,
        # Use a ternary expression to only access the constraint_info tuple if it is not None
        constraint_param_name=constraint_info[0] if constraint_info else None,
        constraint_label=constraint_info[1] if constraint_info else None,
    )
    report.add_picture(png)
```

*Previous cell output:*
```output
<Figure size 700x500 with 0 Axes>
```

## 6. Save the report

The values and plots have been added to the `Document` object, but these changes have not yet been
saved to disk. To save the file, use the `Document.save` method to create a docx file at the path
specified.


```python
report.save("output/10_report.docx")
```

A screenshot in Word is shown below (only the first page is shown):

![The first page of a populated Word document showing a company logo, populated data tables, and a plot of thermal conductivity vs temperature.](assets/10_report-screenshot.png 'Word report')

## Optional: Convert the file to PDF (not available in HTML documentation)

This final step uses the `docx2pdf` library to convert the docx file to pdf. The `docx2pdf`
library requires a local installation of Word, and so is not supported on Linux.

The output of this step is not available in the HTML documentation, but will be visible if you run
this notebook in an environment with Word installed.


```python
from docx2pdf import convert
try:
    from pythoncom import com_error
except ModuleNotFoundError:  # pythoncom not supported on Linux
    pass

try:
    convert("output/10_report.docx", "output/10_report.pdf")
    pdf_created = True
except NotImplementedError:  # Raised on Linux
    pdf_created = False
except com_error:  # Word is not installed
    pdf_created = False
```

Display the PDF using the browser's PDF engine.


```python
if pdf_created:
    from IPython.display import IFrame, display
    display(IFrame("output/10_report.pdf", width=600, height=900))
```
