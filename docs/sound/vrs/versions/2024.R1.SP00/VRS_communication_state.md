# State of the Sound Generator

The following messages are periodically sent by the sound generator to give information regarding its state.

<table>
    <thead>
        <tr>
            <td>
                <b>Keyword</b>
            </td>
            <td>
                <b>Data</b>
            </td>
            <td>
                <b>Comments</b>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ALIVE</td>
            <td>none</td>
            <td>
                <p>Provides information that the sound generator is functioning</p>
                <p>Sent each 500ms, or by a time lapse defined by GLOBAL_INIT</p>
            </td>
        </tr>
    </tbody>
</table>

The following messages are sent sporadically by the sound generator.

<table>
    <thead>
        <tr>
            <td>
                <b>Keyword</b>
            </td>
            <td>
                <b>Data</b>
            </td>
            <td>
                <b>Comments</b>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>WARNING</td>
            <td>String</td>
            <td>Reports a warning</td>
        </tr>
        <tr>
            <td>ERROR</td>
            <td>String</td>
            <td>
                <p>Reports a warning</p>
            </td>
        </tr>
        <tr>
            <td>INFO_END_PLAY_3D</td>
            <td>Id (int)</td>
            <td>Informs that the playback of the 3D sound associated with the Id is over</td>
        </tr>
        <tr>
            <td>INFO_END_PLAY_AMBIANCE</td>
            <td>Id (int)</td>
            <td>Informs that the playback of the ambiance sound associated with the Id is over</td>
        </tr>
    </tbody>
</table>

The sound generator is not functioning when no ALIVE message is sent in the time frame defined above.
