
export default function(){
    const content = document.querySelector("#content");
    if(content.hasChildNodes()){
        content.removeChild(content.children[0]);
    }


}