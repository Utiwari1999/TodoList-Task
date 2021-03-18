
function InvalidDepToast(props) {

    return (
          <Toast onClose={() => props.setAssignToast(false)} className="CreatedLPToast" show={props.showAssignToast} delay={6000} autohide>
            <div className="ToastBody" style={{width:"625px"}}>
             <Toast.Body className="ToastBodySpan">
             </Toast.Body>
            </div>
          </Toast>
    );
  }