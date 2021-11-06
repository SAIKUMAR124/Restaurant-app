import React from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { GiCrossMark } from "react-icons/gi";
import './SideModel.css';

const SideModel = ({children, open, onClose}) => {
    return (
        <Modal open={open} 
            onClose={onClose} 
            closeIcon={<GiCrossMark/>}
            closeIconId='cross-icon'
            classNames={{
                overlay: "customOverlay",
                modal: "customModal",
                
                modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
              }}
              animationDuration= {500}
            >
                {children}
        </Modal>
    )
}

export default SideModel
