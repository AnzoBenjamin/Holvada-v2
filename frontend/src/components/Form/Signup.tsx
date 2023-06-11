import Button from '../../UI/Button'
import Input from '../../UI/Input'
import classess from './Signup.module.scss'

const Signup = () => {
    const signupHandler=()=>{
      console.log('signup');
    }
  return (
    <form className={classess['form-signup']}>
        <h2>Signup</h2>
        <Input type="email" placeholder='Email'/>
        <Input type='password' placeholder='Password'/>
        <Input type='password' placeholder='Confirm password'/>
        <Button text='Signup' onClick={signupHandler} className=''/>
    </form>
  )
}

export default Signup