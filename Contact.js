import "./contact.css";
function Contact (){
    
    return (
        <div class="container">
<form onsubmit="sendEmail(); reset(); return false;">
<input type="text" id="name" placeholder="Your Name" required/>
<input type="email" id="email" placeholder="Email" required/>
<input type="text" id="phone" placeholder="Phone Number" required/>
<textarea  id="message" rows="4" placeholder="How can we assist you?"></textarea>
<button type="submit">Send</button>




</form>


</div>
    );
    };
export default Contact;