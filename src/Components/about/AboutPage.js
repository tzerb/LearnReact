import React from 'react';
import Modal from 'react-modal';

class AboutPage extends React.Component
{

    constructor(props, context)    {
        super(props, context);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            course: {modalIsOpen: true}
        };
    }

    openModal(event)
    {
        if (this && this.setState)
            this.setState({modalIsOpen: true});
        else
            alert('error');
    }

    afterOpenModal(event) {
        // references are now sync'd and can be accessed.
        this.refs.subtitle.style.color = '#f00';
    }

    closeModal(event) {
        this.setState({modalIsOpen: false});
    }
    
    render() {
        const customStyles = {
                content : {
                    top                   : '50%',
                    left                  : '50%',
                    right                 : 'auto',
                    bottom                : 'auto',
                    marginRight           : '-50%',
                    transform             : 'translate(-50%, -50%)'
                }
        };        
        
        return(
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux and React Routher and a variety of ther helpful libraries.</p>

                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles} >

                    <h2 ref="subtitle">Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        );

    }
}

export default AboutPage;