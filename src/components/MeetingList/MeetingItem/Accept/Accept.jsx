import axios from 'axios'

import styles from './accept.module.scss'

export default function AcceptMeet({ meetData }) {
    // console.log(meetData)
    function clickHandler(e) {
        axios.patch(`https://conquest-api.bits-dvm.org/api/meetings/requests/${meetData.id}/`, {
            status: "accepted",
            slot: meetData.slot
        }, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).tokens.access}`
            }
        })
            .then(res => {
                console.log(res)
                e.target.parentElement.parentElement.parentElement.remove()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <p className={styles.accept} onClick={clickHandler}>Accept</p>
    )
}