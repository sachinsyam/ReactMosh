function Message(){
    //JSX - js XML below
    const name='';
    if(name){
     return <h1>Hello {name}</h1>;
    }
     return <h1>Hello World</h1>

}

//to use this we need to export this as a default module
export default Message;
