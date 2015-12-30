/**
 * Created by Vivek Raj on 29-12-2015.
 */

//Perform script action on window.onload
window.onload = () => {

    //create a new EventSource
    var source = new EventSource("http://localhost:3000/event");

    //Listen for message from the EventSource
    source.onmessage = function(message) {

        //Logic to change the colours of progressbar
        switch(message.data) {
            case "1":
                setHTMLElementAttribute("progressbar","class", "progress-bar progress-bar-success");
                break;
            case "50":
                setHTMLElementAttribute("progressbar","class", "progress-bar progress-bar-warning");
                break;
            case "90":
                setHTMLElementAttribute("progressbar","class", "progress-bar progress-bar-danger");
                break;
        }

        //Set the text of progressbar
        setHTMLElementInnerText("progressbar", message.data+"%");

        //Set the progressbar style
        setHTMLElementAttribute("progressbar", "style", "width:"+message.data+"%");
    }
}

//Convenience function to set the text of an HTML Element
function setHTMLElementInnerText(id:string, text:string) {
    document.getElementById(id).innerText = text;
}

//Convenience function to set the attribute of an HTML Element
function setHTMLElementAttribute(id:string, attributeText:string, attributeValue: string) {
    document.getElementById(id).setAttribute(attributeText, attributeValue);
}