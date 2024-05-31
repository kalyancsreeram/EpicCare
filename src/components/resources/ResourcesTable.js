import React from 'react'

function ResourcesTable() {
  return (
    <div className='resourcesTable'>       
        <table>    
            <tr>
                <th>Possible features:</th>
                <th></th>
                <th></th>
            </tr>   
            <tr>
                <td>Seizure calender</td>
                <td className='check'><span>&#10003;</span></td>
                <td className='check'><span>&#10003;</span></td>
            </tr>
            <tr>
                <td>Video documentation of seizure</td>
                <td className='check'><span>&#10003;</span></td>
                <td></td>
            </tr>
            <tr>
                <td>Remainder for medication/Appointment</td>
                <td className='check'><span>&#10003;</span></td>
                <td className='check'><span>&#10003;</span></td>
            </tr>
            <tr>
                <td>First Aid/Medication information</td>
                <td></td>
                <td className='check'><span>&#10003;</span></td>
            </tr>
            <tr>
                <td>VNS alarms</td>
                <td className='check'><span>&#10003;</span></td>
                <td></td>
            </tr>
            <tr>
                <td>Communication with Team</td>
                <td className='check'>Sync with website</td>
                <td className='check'>Export to email</td>
            </tr>
            <tr>
                <td>Graphic Option</td>
                <td className='check'><span>&#10003;</span></td>
                <td className='check'><span>&#10003;</span></td>
            </tr>
            <tr>
                <td>Lifestyle</td>
                <td className='check'><span>&#10003;</span></td>
                <td></td>
            </tr>
            <tr>
                <td className='lifestyle_choices'>- Diet</td>
                <td className='check'><span>&#10003;</span></td>
                <td></td>
            </tr>
            <tr>
                <td className='lifestyle_choices'>- Mood</td>
                <td className='check'><span>&#10003;</span></td>
                <td></td>
            </tr>
            <tr>
                <td className='lifestyle_choices'>- Triggers</td>
                <td className='check'><span>&#10003;</span></td>
                <td></td>
            </tr>
            <tr>
                <td>Cost</td>
                <td className='check'><span>&#10003;</span></td>
                <td className='check'><span>&#10003;</span></td>
            </tr>
            <tr>
                <td>IOS & Android</td>
                <td className='check'>both</td>
                <td className='check'>both</td>
            </tr>

        </table>

    </div>
  )
}

export default ResourcesTable