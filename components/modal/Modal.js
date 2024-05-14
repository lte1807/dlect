import { Children } from "react";
import styled, { keyframes } from "styled-components";

function Modal({ isOpen, onClose, children}) {
    if(!isOpen) return null;
    
    return (
        <ModalWrapper onClick={onclose}>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
  }
  
  export default Modal;
  

  const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem 3rem;
  `

  const ModalContent = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  `