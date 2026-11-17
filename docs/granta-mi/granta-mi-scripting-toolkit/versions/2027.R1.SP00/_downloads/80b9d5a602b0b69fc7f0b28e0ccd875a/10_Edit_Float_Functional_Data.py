# -*- coding: utf-8 -*-
# # Float Functional Data
#
# Work with float functional data, including modifying parameter configurations.
#
# This example first introduces the different representations of float functional data in Granta MI, and then shows how
# to create and modify series float functional data, and then how to convert series float functional data into the
# corresponding grid representation.

# ## Connect to MI
# Specify a database and table.

import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")

table = db.get_table("Design Data")

# ## Create a new record
# Define names for a new record, and an attribute on that record.

from datetime import datetime

now = datetime.now().strftime('%c')
record_name = f"Scripting Toolkit Example 10:{now}"
functional_attribute_name = "Tensile Stress/Strain, L"

# Create the new **Record** object.

record = table.create_record(record_name)
record

# Get the unpopulated functional attribute for the new record, so we can populate it.

functional_attribute = record.attributes[functional_attribute_name]
functional_attribute

# ## Types of functional data in Scripting Toolkit

# Granta MI represents float functional data as either series functional or grid functional. Additionally, the
# schema defines a float functional attribute as containing either point or range data. As a result, there are
# four possible representations of float functional data in Scripting Toolkit:
#
# * Point series functional data as an `AttributeFunctionalSeriesPoint` object
# * Range series functional data as an `AttributeFunctionalSeriesRange` object
# * Point grid functional data as an `AttributeFunctionalGridPoint` object
# * Range grid functional data as an `AttributeFunctionalGridRange` object
#
# These objects do not need to be instantiated manually. When exporting existing data, the appropriate object is
# chosen automatically based on the data. Empty functional attributes are set as series functional data by default,
# and the definition of the attribute in the database schema defines whether the point or range variant is chosen.
# Methods are provided to convert between series and grid representations of functional data.
#
# In this case, the "Tensile Stress/Strain, L" attribute is defined as a point attribute, and the  `type()`
# function shows that a `AttributeFunctionalSeriesPoint` object has been created accordingly.

type(functional_attribute)

# All float functional attribute values have a defined x-axis parameter. Check the current x-axis parameter with the
# `x_axis` property.

functional_attribute.x_axis

# If the x-axis needs to be changed, use the `.with_new_x_axis()` method, with the name of the parameter to be used as
# the x-axis.

stress_vs_temperature = functional_attribute.with_new_x_axis("Temperature")
stress_vs_temperature.x_axis

# ## Create and import series functional data
#
# This section shows how to create and import series-based data. Since this is a point-based functional attribute,
# create `SeriesPoint` objects to create single-valued series functional data. This example imports stress-strain data
# as a function of temperature.

# A series functional attribute value is defined as a tuple of series objects. There are two series types available,
# `SeriesPoint` and `SeriesRange`. Use the appropriate object depending on the attribute value object type. For
# series data, each series must be created with two equal-length tuples of x values and y values. Each series may also
# have a tuple of parameter values and a decoration type.

# In this example, create two `SeriesPoint` objects for our two series, each with an additional 'Temperature' value.
# Assign both series to the functional attribute value.

series_1 = mpy.SeriesPoint(
    x=(0., 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2),
    y=(0., 100., 200., 300., 400., 495., 585., 670., 750., 825., 895., 950., 1000.),
    parameters=(mpy.SeriesParameterValue(name="Temperature", value=20.),),  # Note: This is a 1-tuple
    decoration=mpy.GraphDecoration.LINES,
)
series_2 = mpy.SeriesPoint(
    x=(0., 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2),
    y=(0., 75., 150., 225., 300., 370., 440., 500., 560., 620., 670., 710., 750.),
    parameters=(mpy.SeriesParameterValue(name="Temperature", value=200.),),  # Note: This is a 1-tuple
    decoration=mpy.GraphDecoration.LINES,
)

functional_attribute.value = (series_1, series_2)

# The y-axis unit is set with the `.unit` property

functional_attribute.unit = "ksi"

# Parameter units are set by modifying values returned by the `.parameters` property.


functional_attribute.parameters["Temperature"].unit = "°C"

# Additional parameter properties can also be modified. These do not affect the behavior of Scripting Toolkit
# operations, but may modify the behavior of other tools that interact with the data, for example MI Explore and MI
# Viewer.

functional_attribute.parameters["Strain"].interpolation_type = "Cubic Spline"
functional_attribute.parameters["Temperature"].interpolation_type = "None"

# Access the `functional_attribute.table_view.table_view` property to see the underlying data structure of the attribute
# represented as a list of lists. It shows all parameters supported by the attribute. Parameters that were not
# populated during the import have been set to **None**.

functional_attribute.table_view.table_view

# Use the `mi.update()` method to import the data into Granta MI.

record.set_attributes([functional_attribute])
record = mi.update([record])[0]
functional_attribute = record.attributes[functional_attribute_name]

# ## Editing float functional data

# This section shows how to modify series functional data.

# `SeriesPoint` objects are immutable, so they cannot be modified. However, existing values can be used when creating a
# new series. The cell below adds two additional points to the `series_2` value.

from math import isclose

series_200_deg = next(
    series for series in functional_attribute.value
    if isclose(series.parameters_by_name["Temperature"], 200)
)

series_2_extra_points = mpy.SeriesPoint(
    x=series_200_deg.x + (1.3, 1.4),
    y=series_200_deg.y + (770., 785.),
    parameters=series_200_deg.parameters,
    decoration=series_200_deg.decoration,
)

# The `functional_attribute.value` attribute is a tuple, so it is also immutable. To update the series objects
# assigned to the value, all series objects must be provided. The cell below defines an entirely new series, and then
# adds the original first series, the modified second series, and the new third series to the attribute value.
#
# Using immutable values in this way provides greater validation, ensuring that any errors in the data are raised as
# exceptions as soon as they are associated with the attribute value.

series_3 = mpy.SeriesPoint(
    x=(0., 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2),
    y=(0., 50., 100., 150., 200., 250., 290., 335., 375., 410., 450., 475., 500.),
    parameters=(mpy.SeriesParameterValue(name="Temperature", value=400.),),  # Note: This is a 1-tuple
    decoration=mpy.GraphDecoration.LINES,
)

functional_attribute.value = (series_1, series_2_extra_points, series_3)

# Use the `mi.update()` method to import the data into Granta MI.

record.set_attributes([functional_attribute])
record = mi.update([record])[0]
functional_attribute = record.attributes[functional_attribute_name]

# ## Convert series data to grid data

# The final section shows how to convert between series and grid representations of float functional data.

# Use the `generate_grid_version()` method to convert the series functional attribute value to the equivalent grid
# functional attribute value object. In this case, our `AttributeFunctionalSeriesPoint` attribute value is converted
# to an `AttributeFunctionalGridPoint` object. This method raises a `ValueError` if the series functional data cannot
# be represented as grid functional data.

grid_functional_attribute = functional_attribute.generate_grid_version()
type(grid_functional_attribute)

# The collection of `SeriesPoint` objects has been converted to a single `GridPoint` object. This contains the same
# information, but note that the temperature values have been expanded to fully populate the grid.

grid_value = grid_functional_attribute.value
print(f"x values:           {grid_value.x[:20]}...")
print(f"y values:           {grid_value.y[:20]}...")
print(f"Temperature values: {grid_value.parameters_by_name['Temperature'][:20]}...")

# The units and parameter configuration options are preserved by the transformation from series to grid representation.

print(f"y unit: {grid_functional_attribute.unit}")

print(f"Temperature unit: {grid_functional_attribute.parameters['Temperature'].unit}")

print(f"Strain interpolation type: {grid_functional_attribute.parameters['Strain'].interpolation_type}")
print(f"Temperature interpolation type: {grid_functional_attribute.parameters['Temperature'].interpolation_type}")

# Import the modified attribute.

record.set_attributes([grid_functional_attribute])
record.flag_for_release = False
record = mi.update([record])[0]
record

# Since the attribute now contains grid functional data, the data is exported into a `AttributeFunctionalGridPoint`
# object.

grid_functional_attribute = record.attributes[functional_attribute_name]
type(grid_functional_attribute)
