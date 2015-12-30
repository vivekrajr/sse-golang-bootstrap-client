/**
 * Created by Vivek Raj on 29-12-2015.
 */
window.onload = () => {

    var source = new EventSource("http://localhost:3000/event");

    source.onmessage = function(message) {

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

        setHTMLElementInnerText("progressbar", message.data+"%");
        setHTMLElementAttribute("progressbar", "style", "width:"+message.data+"%");
    }
}

function setHTMLElementInnerText(id:string, text:string) {
    document.getElementById(id).innerText = text;
}

function setHTMLElementAttribute(id:string, attributeText:string, attributeValue: string) {
    document.getElementById(id).setAttribute(attributeText, attributeValue);
}