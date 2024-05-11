import React, { useState } from 'react'

function UploadComp(props) {
  const [uploadedFileName, setuploadedFileName] = useState('');

  const handleFileChange = (event) => {
    setuploadedFileName(event.target.files[0].name);
    props.handleFileChange(event);
  }
  return (
    <div className='upload_comp'>
        <input type="file" onChange={handleFileChange}/>
        <button className='add_button' title="Add" onClick={props.addField}>+</button>
        <button className='delete_button' title='Delete' onClick={() => props.deleteFile(props.fieldName, uploadedFileName)}>-</button>
    </div>
  )
}

export default UploadComp