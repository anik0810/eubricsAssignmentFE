import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheckSquare, faPencil, faRightFromBracket, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Item.css'
import { faCircleCheck, faEye } from '@fortawesome/free-regular-svg-icons';
import HealthModal from '../Health/HealthModal';
import { useDispatch } from 'react-redux';
import { deleteHealthData } from '../../state/slice/healthSlice';

export default function Item(props) {
  
  const [userId, setUserId] = useState(null);
  const [editModal, setEditModal] = useState(false);
  
  const dispatch = useDispatch();

  const deleteData = {
    userId:userId,
    id:props.data.id
  }
  
  const deleteHealth = (deleteData)=>{
    dispatch(deleteHealthData(deleteData))
  }

    useEffect(() => {
        let userDetails = localStorage.getItem('userDetails');
        userDetails = JSON.parse(userDetails);
        setUserId(userDetails.userId);
    })

  return (
    <div class="card border-primary mb-3">
      <div class="card-body">
        <button className='btn btn-outline-success'>
          <span>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        </button>
        <p1 className='todo'>
          {props.data.todo}
        </p1>
        <div className='buttons'>
          <button className='btn btn-outline-primary'>
            <span>
              <FontAwesomeIcon icon={faEye} />
            </span>
          </button>
          <button className='btn btn-outline-warning' onClick={()=>{setEditModal(true)}}>
            <span>
              <FontAwesomeIcon icon={faPencil}/>
            </span>
          </button>
          <button className='btn btn-outline-danger' onClick={()=>{deleteHealth(deleteData)}}>
            <span>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </button>
        </div>
      </div>
      <HealthModal
        show={editModal}
        onHide={() => setEditModal(false)}
        heading="Edit"
        details={props.data}
      />
    </div>
  )
}
