import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import './Health.css'
import Item from '../Item/Item';
import { HealthApi } from '../../apis/healthApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import HealthModal from './HealthModal';

import { useDispatch, useSelector } from 'react-redux';
import { getHealthData } from '../../state/slice/healthSlice';
import Login from '../Login/Login';

export default function Health() {

    const [list, setList] = useState([]);
    const [addModal, setAddModal] = useState(false);

    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    console.log(state.health.data)


    useEffect(async () => {
        document.title = 'Health - ToDo App';
        const userDetails = JSON.parse(await localStorage.getItem('userDetails'));

        if (state.health.data === null) {
            dispatch(getHealthData(userDetails.userId));
            setList(state.health.data);
        }

    }, [])



    return (
        <>
            <div className='health'>
                <h2>Health</h2>
                <div className='container mt-4'>
                {(state.health.isLoading)?<>Loading</>:
                    (state.health.data) ?
                        state.health.data.map((key, val) => {
                            return (
                                <>
                                    <Item data={key} />
                                </>
                            )
                        }) : null
                    }
                </div>
            </div>
            <div className='add'>
                <button className='btn btn-primary' onClick={() => { setAddModal(true) }}>
                    <span>
                        <FontAwesomeIcon icon={faPlusSquare} />
                    </span>
                </button>

            </div>
            <HealthModal
                show={addModal}
                onHide={() => setAddModal(false)}
                heading="Add"
            />

        </>
    )
}
