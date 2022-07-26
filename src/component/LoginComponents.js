import {Component} from 'react';

class LoginComponents extends Component{
    render() {
        
        return(
            
            <div class='container-form'>
            <form>
                <label> User Name </label>
                <br/>
                <input type="text" name="name" id="username"/> 
                <br/>
                <label> Password </label>
                <br/>
                <input type="password" name="password" id="password"/>
                <br/>
                <button class="button-style" type="button">Login </button> 
            </form>
          </div>
         
          
            
           
        )
    }
}

//kalau pake class dibawahnya harus ditututp

export default LoginComponents