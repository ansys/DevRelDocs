---
uid: _getting_started_user_guide
title: Getting Started Guide
---

# User guide

## What you can do with automation in Speos for NX

You can create new Speos for NX features or modify existing features, run and export simulations using scripts.

This section gives you an overview of what Speos for NX Library can achieve with one example of Python script.

This section contains the following topics: 

- **How to create an NX Journal Python**
- **How to create a Speos for NX Python script**
- **How to run an NX Journal**

## How to create an NX journal python

1. Create a text file in the target directory.
2. Edit it with a text editor.
3. Change its extension for .py.

-Or-

1. Press Ctrl + M on your keyboard.
2. Click Menu, Tools, Journal, Record.
3. Type the name of the journal.
4. Click OK.
5. Click Menu, Tools, Journal, Stop Recording.

## How to create a Speos for NX python script

1. Open your .py journal.
2. Rewrite the function as below:

```python
    # Imports system packages
    import sys
    import os

    # Imports the NX library
    import NXOpen

    # Retrieves the Speos library directory path using the "SPEOS_NX_DIR" environment variable.
    snxdir = os.getenv('SPEOS_NX_DIR', '') + '\\application\\'

    # Sets the Speos library directory path in the system environment.
    sys.path.append(snxdir)

    # Imports the Speos library
    import SpeosNX

    def main():

        # Gets the NX session.
        MyNXSession = NXOpen.Session.GetSession()

        # Gets the Speos session.
        Session = SpeosNX.Session.GetSession()

        # Gets the Speos part collection.
        PartCollection = Session.Parts

        # Loads all parts that contain Speos features.
        PartCollection.Load()

        # Gets the currents NX work part.
        workPart = MyNXSession.Parts.Work

        # Gets the current working part's Speos feature collection.
        FeatureCollection = PartCollection.Work.Features

        origin = workPart.Features.FindObject("DATUM_CSYS(0)").FindObject("POINT 1")
        xAxis = workPart.Datums.FindObject("DATUM_CSYS(0) X axis")
        yAxis = workPart.Datums.FindObject("DATUM_CSYS(0) Z axis")

        # Create the feature Builder
        MySpeosFeature = None
        IrradianceSensor = FeatureCollection.CreateSensorIrradianceBuilder(MySpeosFeature)

        # Feature name,
        IrradianceSensor.Name = "Irradiance Sensor"

        # Axis System
        IrradianceSensor.AxisSystem.OriginPoint = origin.Tag
        IrradianceSensor.AxisSystem.DirectionX = xAxis.Tag
        IrradianceSensor.AxisSystem.DirectionY = yAxis.Tag

        # Create the feature
        IrradianceSensor.Commit()

    if __name__ == '__main__':
        main()
```

## How to run an NX journal

1. In Menu, click Tools, Journal, Play....
2. Select the journal to play from Recently Accessed Journals.

-Or-

1. Browse for the journal to start.
2. Click Run.

 Note: You can also edit the journal from Speos for NX. You can add journal arguments.
