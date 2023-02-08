import React from "react";
import styles from './coll.module.css'
import { ButtonTask } from "../buttonTask/ButtonTask";
import Swal from "sweetalert2";
import { deleteMessage } from "../alerts/Alerts";
import useProjects from "../../../hooks/useProject";
import { useParams } from "react-router-dom";

export const Collaborator = ({name, email, idUser}) => {
  const {id} = useParams();

  const {removeCollab} = useProjects()

  const sendEmail = async () => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      Swal.fire(text)
    }
  }
  return (
    <div className={styles.collContainer}>
      <p>
        {name}
        <span>{email}
          <ButtonTask 
          backgroundColor="#2196F3"
          icon="material-symbols-outlined"
          iconTitle="email"
          callback={sendEmail}/>
        </span>
      </p>
      <div>
      <ButtonTask 
        backgroundColor="#f4511e"
        icon="material-symbols-outlined"
        iconTitle="delete"
        callback={()=>removeCollab(id, idUser)}/>
      </div>
    </div>
  );
};
