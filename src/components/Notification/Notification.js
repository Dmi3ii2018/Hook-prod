import React from 'react';
import ReactDOM from "react-dom";
import { NotificationWrapper, NotificationContainer } from "./Notification.style"

const portalRoot = document.getElementById('portal-root');

const Notification = ({ type, text }) => {
    const el = (
        <NotificationContainer>
            <NotificationWrapper className={type}>
                { text }
            </NotificationWrapper>
        </NotificationContainer>
    )
    
    return ReactDOM.createPortal(el, portalRoot);
}

export { Notification }
