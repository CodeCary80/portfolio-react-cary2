import React,{useState} from "react";

const ContactModal = ({isOpen, onclose})=>{
    const[formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        alert('Thank you for your message!');
        onclose();
    };

    if(!isOpen)return null;

    return(
        <div className="contact-modal-overlay">
            <div className="contact-modal">
                <button className="close-modal" onClick={onclose}>
                    &times;
                </button>
                <h2 className="section-title">Contact Me</h2>
                <form OnSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            name="message" 
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

    const Contact = ()=>{
        const[isModalOpen,setIsModalOpen] = useState(false);

        const openModal = ()=>{
            setIsModalOpen(true);
        };

        const closeModal = ()=>{
            setIsModalOpen(false);
        };

        return(
            <>
                <section id="contact" className="contact section">
                    <div className="container">
                        <button
                            className="contact-btn"
                            onClick={openModal}
                        >
                           CONTACT ME 
                        </button>
                    </div>
                    <a href="/dummy_resume.pdf" className="resume-btn" download>
                        DOWNLOAD RESUME
                    </a>
                </section>
                <ContactModal isOpen={isModalOpen} onclose={closeModal} />
            </>
        );
    };

    export default Contact;