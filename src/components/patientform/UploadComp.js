import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons';

function UploadComp(props) {
  const [uploadedFileName, setuploadedFileName] = useState('');

  const handleFileChange = (event) => {  
    setuploadedFileName(event.target.files[0].name);
    props.handleFileChange(event);
  }
  return (
    <div className='upload_comp'>
        <input type="file" onChange={handleFileChange}/>
        <FontAwesomeIcon icon={faCirclePlus} className='add_button' title="Add" onClick={props.addField}/>
        <FontAwesomeIcon icon={faCircleMinus} className='delete_button' title='Delete' onClick={() => props.deleteFile(props.fieldName, uploadedFileName)}/>
    </div>
  )
}

export default UploadComp