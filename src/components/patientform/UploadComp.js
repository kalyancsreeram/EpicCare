import React from 'react'

function UploadComp(props) {
  return (
    <div className='upload_comp'>
        <input type="file" onChange={props.handleFileChange}/>
        <button className='add_button' title="Add" onClick={props.addFile}>+</button>
        <button className='delete_button' title='Delete' onClick={() => props.deleteFile(props.fileName)}>-</button>
    </div>
  )
}

export default UploadComp